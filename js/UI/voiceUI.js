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
    : "btn-play-icon fa-solid fa-play text-slate-400 text-xs";
}

function stopCurrent() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (currentBtn) {
    currentBtn.classList.remove("is-playing");
    setPlayIcon(currentBtn, false);
    currentBtn = null;
  }

  const now = document.getElementById("now-playing-text");
  if (now) now.textContent = "—";
}

function playVoice(btn, src, label) {
  if (currentBtn === btn) {
    stopCurrent();
    return;
  }

  stopCurrent();

  btn.classList.add("is-playing");
  setPlayIcon(btn, true);
  currentBtn = btn;

  const now = document.getElementById("now-playing-text");
  if (now) now.textContent = label;

  if (!src) return;

  const audio = new Audio(src);
  audio.volume = masterVolume;

  audio.play().catch(stopCurrent);
  audio.addEventListener("ended", stopCurrent);

  currentAudio = audio;
}

function applyVoiceFilter(filterId, query = "") {
  const q = query.toLowerCase();

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
  });
}

function initVoiceEvents() {
  // 再生クリック
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".v-btn");
    if (!btn) return;

    playVoice(btn, btn.dataset.src, btn.dataset.label);
  });

  // タブクリック
  document.addEventListener("click", (e) => {
    const tab = e.target.closest(".filter-tab");
    if (!tab) return;

    document.querySelectorAll(".filter-tab").forEach((t) => {
      t.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");

    const q =
      document.getElementById("search-input")?.value || "";

    applyVoiceFilter(tab.dataset.filter, q);
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