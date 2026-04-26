/**
 * voiceUI.js
 * 動作・イベント制御
 */

let currentAudio = null;
let currentBtn = null;
let masterVolume = 0.8;

function setPlayIcon(btn, playing) {
  const icon = btn.querySelector(".btn-play-icon");
  if (!icon) return;

  icon.className = playing
    ? "btn-play-icon fa-solid fa-pause text-primary text-xs"
    : "btn-play-icon fa-solid fa-play text-slate-400 text-xs group-hover:text-primary transition-colors";
}

function showWave(btn) {
  const wave = btn?.querySelector(".wave-wrap");
  if (!wave) return;

  wave.classList.remove("opacity-0");
  wave.classList.add("opacity-100");
}

function hideWave(btn) {
  const wave = btn?.querySelector(".wave-wrap");
  if (!wave) return;

  wave.classList.remove("opacity-100");
  wave.classList.add("opacity-0");
}

function stopCurrent() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (currentBtn) {
    currentBtn.classList.remove("is-playing");
    setPlayIcon(currentBtn, false);
    hideWave(currentBtn);
    currentBtn = null;
  }

  const now = document.getElementById("now-playing-text");
  const musicIcon = document.getElementById("music-icon");

  if (now) now.textContent = "—";
  if (musicIcon) {
    musicIcon.className = "fa-solid fa-music text-primary";
  }
}

function playVoice(btn, src, label) {
  // 同じボタンを押したら停止
  if (currentBtn === btn) {
    stopCurrent();
    return;
  }

  stopCurrent();

  btn.classList.add("is-playing");
  setPlayIcon(btn, true);
  showWave(btn);

  currentBtn = btn;

  const now = document.getElementById("now-playing-text");
  const musicIcon = document.getElementById("music-icon");

  if (now) now.textContent = label;
  if (musicIcon) {
    musicIcon.className = "fa-solid fa-music text-primary fa-beat";
  }

  // src未設定
  if (!src) {
    setTimeout(() => {
      if (currentBtn === btn) stopCurrent();
    }, 300);
    return;
  }

  const audio = new Audio(src);
  audio.volume = masterVolume;

  audio.play().catch(() => stopCurrent());

  audio.addEventListener("ended", () => {
    if (currentBtn === btn) stopCurrent();
  });

  audio.addEventListener("error", () => {
    if (currentBtn === btn) stopCurrent();
  });

  currentAudio = audio;
}

function applyVoiceFilter(filterId, query = "") {
  const q = query.trim().toLowerCase();
  let anyVisible = false;

  document.querySelectorAll(".cat-section").forEach((sec) => {
    let visible = 0;

    sec.querySelectorAll(".v-btn").forEach((btn) => {
      const matchCat =
        filterId === "all" || btn.dataset.cat === filterId;

      const matchText =
        !q || btn.dataset.label.toLowerCase().includes(q);

      const show = matchCat && matchText;

      btn.classList.toggle("hidden", !show);

      if (show) visible++;
    });

    sec.classList.toggle("hidden", visible === 0);

    if (visible > 0) anyVisible = true;
  });

  const old = document.getElementById("voice-empty-state");
  if (old) old.remove();

  if (!anyVisible) {
    const main = document.getElementById("voice-main");
    if (!main) return;

    const div = document.createElement("div");

    div.id = "voice-empty-state";
    div.className = "text-center py-24 text-slate-400";

    div.innerHTML = `
      <i class="fa-solid fa-magnifying-glass text-4xl mb-4 block opacity-30"></i>
      <p class="font-bold">「${query}」に一致するボタンが見つかりませんでした。</p>
    `;

    main.appendChild(div);
  }
}

function initVoiceEvents() {
  // ボイス再生
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".v-btn");
    if (!btn) return;

    playVoice(btn, btn.dataset.src, btn.dataset.label);
  });

  // フィルタータブ
  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    document.querySelectorAll(".filter-tab").forEach((t) => {
      t.classList.remove(
        "active-tab",
        "bg-slate-900",
        "text-white",
        "border-slate-900",
        "shadow-md"
      );

      t.classList.add("border-slate-200", "text-slate-500");
    });

    tab.classList.add(
      "active-tab",
      "bg-slate-900",
      "text-white",
      "border-slate-900",
      "shadow-md"
    );

    tab.classList.remove("border-slate-200", "text-slate-500");

    const q =
      document.getElementById("search-input")?.value || "";

    applyVoiceFilter(tab.dataset.filter, q);

    // カテゴリ位置へスクロール
    if (tab.dataset.filter !== "all") {
      const target = document.getElementById(
        `cat-${tab.dataset.filter}`
      );

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 160,
          behavior: "smooth",
        });
      }
    }
  });

  // 検索
  document
    .getElementById("search-input")
    ?.addEventListener("input", (e) => {
      const active =
        document.querySelector(".filter-tab.active-tab");

      applyVoiceFilter(
        active?.dataset.filter || "all",
        e.target.value
      );
    });

  // 音量
  document
    .getElementById("volume-slider")
    ?.addEventListener("input", (e) => {
      masterVolume = e.target.value / 100;

      if (currentAudio) {
        currentAudio.volume = masterVolume;
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  buildFilterTabs();
  buildVoiceMain();
  initVoiceEvents();
});