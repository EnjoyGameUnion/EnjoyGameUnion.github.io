/**
 * voiceService.js
 * ボイスボタン処理（voice.html 専用）
 * ※ voiceModel.js・commonService.js を先に読み込んでください
 *
 * 担当:
 *   - Audio Engine（再生・停止・音量）
 *   - ボイスボタン / カテゴリセクション 動的生成
 *   - フィルタータブ / 検索
 */

// ============================================================
//  Audio Engine
// ============================================================
let currentAudio = null;
let currentBtn   = null;
let masterVolume = 0.8;

function setPlayIcon(btn, playing) {
  const icon = btn.querySelector(".btn-play-icon");
  if (!icon) return;
  icon.className = playing
    ? "btn-play-icon fa-solid fa-pause text-primary text-xs"
    : "btn-play-icon fa-solid fa-play text-slate-400 text-xs group-hover:text-primary transition-colors";
}

function stopCurrent() {
  if (currentAudio) { currentAudio.pause(); currentAudio = null; }
  if (currentBtn)   { currentBtn.classList.remove("is-playing"); setPlayIcon(currentBtn, false); currentBtn = null; }
  const nowPlaying = document.getElementById("now-playing-text");
  const musicIcon  = document.getElementById("music-icon");
  if (nowPlaying) nowPlaying.textContent = "—";
  if (musicIcon)  musicIcon.className = "fa-solid fa-music text-primary";
}

function playVoice(btn, src, label) {
  // 同じボタンをもう一度押したら停止
  if (currentBtn === btn) { stopCurrent(); return; }
  stopCurrent();

  const nowPlaying = document.getElementById("now-playing-text");
  const musicIcon  = document.getElementById("music-icon");
  if (nowPlaying) nowPlaying.textContent = label;
  if (musicIcon)  musicIcon.className = "fa-solid fa-music text-primary fa-beat";

  btn.classList.add("is-playing");
  setPlayIcon(btn, true);
  currentBtn = btn;

  if (!src) {
    // ファイル未設定のときは何もしない（ボタンの見た目は元に戻す）
    setTimeout(() => { if (currentBtn === btn) stopCurrent(); }, 300);
    return;
  }

  const audio = new Audio(src);
  audio.volume = masterVolume;
  audio.play().catch(() => { if (currentBtn === btn) stopCurrent(); });
  audio.addEventListener("ended", () => { if (currentBtn === btn) stopCurrent(); });
  audio.addEventListener("error", () => { if (currentBtn === btn) stopCurrent(); });
  currentAudio = audio;
}

// ============================================================
//  Build UI — フィルタータブ
// ============================================================
function buildFilterTabs() {
  const wrap = document.querySelector(".filter-scroll");
  if (!wrap) return;

  VOICE_CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className =
      "filter-tab shrink-0 px-4 py-2 rounded-full text-xs font-black font-en tracking-wider " +
      "border border-slate-200 text-slate-500 hover:border-primary hover:text-primary transition-all";
    btn.dataset.filter = cat.id;
    btn.textContent    = cat.en;
    wrap.appendChild(btn);
  });
}

// ============================================================
//  Build UI — カテゴリ & ボイスボタン
// ============================================================
function buildVoiceMain() {
  const main = document.getElementById("voice-main");
  if (!main) return;
  main.innerHTML = "";

  VOICE_CATEGORIES.forEach((cat, idx) => {
    const sec = document.createElement("section");
    sec.className = "cat-section mb-16 fade-in-up";
    sec.id        = `cat-${cat.id}`;
    sec.style.transitionDelay = `${idx * 0.04}s`;

    sec.innerHTML = `
      <div class="flex items-center gap-4 mb-6">
        <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <i class="${cat.icon} text-primary text-sm"></i>
        </div>
        <div class="flex items-baseline gap-3">
          <h2 class="text-2xl font-black font-en text-dark tracking-tight">${cat.en}</h2>
          <span class="text-sm text-slate-400 font-medium">${cat.jp}</span>
          <span class="text-[10px] font-black font-en tracking-widest text-slate-400 border border-slate-200 rounded-full px-2.5 py-0.5">${cat.voices.length}</span>
        </div>
        <div class="flex-1 h-px bg-slate-100 ml-2"></div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5" id="grid-${cat.id}"></div>
    `;
    main.appendChild(sec);

    const grid = sec.querySelector(`#grid-${cat.id}`);
    cat.voices.forEach((v) => {
      const btn = document.createElement("button");
      btn.className    = "v-btn group w-full bg-white rounded-2xl border border-slate-100 p-3.5 text-left flex items-center gap-3 shadow-sm";
      btn.dataset.label = v.label;
      btn.dataset.cat   = cat.id;
      btn.innerHTML = `
        <div class="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
          <i class="btn-play-icon fa-solid fa-play text-slate-400 text-xs group-hover:text-primary transition-colors"></i>
        </div>
        <div class="flex-1 min-w-0">
          <span class="text-xs font-bold text-slate-700 leading-snug line-clamp-2">${v.label}</span>
        </div>
        <div class="wave-wrap flex items-end gap-0.5 h-4 shrink-0 opacity-0 transition-opacity">
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
        </div>
      `;

      // is-playing クラスが付いたら波形を表示
      const waveWrap = btn.querySelector(".wave-wrap");
      new MutationObserver(() => {
        const playing = btn.classList.contains("is-playing");
        waveWrap.classList.toggle("opacity-100", playing);
        waveWrap.classList.toggle("opacity-0",   !playing);
      }).observe(btn, { attributes: true, attributeFilter: ["class"] });

      btn.addEventListener("click", () => playVoice(btn, v.src, v.label));
      grid.appendChild(btn);
    });
  });

  // 動的生成された .fade-in-up を IntersectionObserver に登録（commonService の関数を利用）
  if (typeof observeFadeInUp === "function") observeFadeInUp(main);
}

// ============================================================
//  Filter / Search
// ============================================================
function applyVoiceFilter(filterId, query = "") {
  const q    = query.trim().toLowerCase();
  const main = document.getElementById("voice-main");
  if (!main) return;

  // 既存の空状態表示を削除
  const old = document.getElementById("voice-empty-state");
  if (old) old.remove();

  let anyVisible = false;

  VOICE_CATEGORIES.forEach((cat) => {
    const sec  = document.getElementById(`cat-${cat.id}`);
    const grid = document.getElementById(`grid-${cat.id}`);
    if (!sec || !grid) return;

    const catMatch = filterId === "all" || filterId === cat.id;
    let visible = 0;

    grid.querySelectorAll(".v-btn").forEach((btn) => {
      const match = catMatch && (!q || btn.dataset.label.toLowerCase().includes(q));
      btn.classList.toggle("is-hidden", !match);
      if (match) visible++;
    });

    sec.classList.toggle("is-hidden", visible === 0);
    if (visible > 0) anyVisible = true;
  });

  if (!anyVisible) {
    const div = document.createElement("div");
    div.id        = "voice-empty-state";
    div.className = "text-center py-24 text-slate-400";
    div.innerHTML = `
      <i class="fa-solid fa-magnifying-glass text-4xl mb-4 block opacity-30"></i>
      <p class="font-bold">「${query}」に一致するボタンが見つかりませんでした。</p>
    `;
    main.appendChild(div);
  }
}

// ============================================================
//  Event Listeners
// ============================================================
function initVoiceEvents() {
  // 音量スライダー
  const volSlider = document.getElementById("volume-slider");
  if (volSlider) {
    volSlider.addEventListener("input", (e) => {
      masterVolume = e.target.value / 100;
      if (currentAudio) currentAudio.volume = masterVolume;
    });
  }

  // 検索
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const active = document.querySelector(".filter-tab.active-tab");
      applyVoiceFilter(active ? active.dataset.filter : "all", e.target.value);
    });
  }

  // フィルタータブ
  const filterScroll = document.querySelector(".filter-scroll");
  if (filterScroll) {
    filterScroll.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;

      // アクティブスタイル切り替え
      document.querySelectorAll(".filter-tab").forEach((t) => {
        t.classList.remove("active-tab", "bg-slate-900", "text-white", "border-slate-900", "shadow-md");
        t.classList.add("border-slate-200", "text-slate-500");
      });
      tab.classList.add("active-tab", "bg-slate-900", "text-white", "border-slate-900", "shadow-md");
      tab.classList.remove("border-slate-200", "text-slate-500");

      const q = searchInput ? searchInput.value : "";
      applyVoiceFilter(tab.dataset.filter, q);

      // 対象カテゴリにスクロール（ALL 以外）
      if (tab.dataset.filter !== "all") {
        const target = document.getElementById(`cat-${tab.dataset.filter}`);
        if (target) {
          const offset = 160; // ヘッダー + コントロールバー分
          window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
        }
      }
    });
  }
}

// ============================================================
//  初期化
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  buildFilterTabs();
  buildVoiceMain();
  initVoiceEvents();
});
