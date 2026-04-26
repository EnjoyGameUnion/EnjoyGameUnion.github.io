/**
 * voiceRenderer.js
 * 描画専用（ALLタブ追加版）
 */

function buildFilterTabs() {
  const wrap = document.querySelector(".filter-scroll");
  if (!wrap) return;

  wrap.innerHTML = "";

  // -----------------------------
  // ALL タブ（先頭固定）
  // -----------------------------
  const allBtn = document.createElement("button");

  allBtn.className =
    "filter-tab active-tab shrink-0 px-4 py-2 rounded-full text-xs font-black font-en tracking-wider " +
    "bg-slate-900 text-white border border-slate-900 shadow-md transition-all";

  allBtn.dataset.filter = "all";
  allBtn.textContent = "ALL";

  wrap.appendChild(allBtn);

  // -----------------------------
  // カテゴリタブ
  // -----------------------------
  VOICE_CATEGORIES.forEach((cat) => {
    const btn = document.createElement("button");

    btn.className =
      "filter-tab shrink-0 px-4 py-2 rounded-full text-xs font-black font-en tracking-wider " +
      "border border-slate-200 text-slate-500 hover:border-primary hover:text-primary transition-all";

    btn.dataset.filter = cat.id;
    btn.textContent = cat.en;

    wrap.appendChild(btn);
  });
}

function buildVoiceMain() {
  const main = document.getElementById("voice-main");
  if (!main) return;

  main.innerHTML = "";

  VOICE_CATEGORIES.forEach((cat, idx) => {
    const sec = document.createElement("section");

    sec.className = "cat-section mb-16 fade-in-up";
    sec.id = `cat-${cat.id}`;
    sec.style.transitionDelay = `${idx * 0.04}s`;

    sec.innerHTML = `
      <div class="flex items-center gap-4 mb-6">
        <div class="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
          <i class="${cat.icon} text-primary text-sm"></i>
        </div>

        <div class="flex items-baseline gap-3">
          <h2 class="text-2xl font-black font-en text-dark tracking-tight">
            ${cat.en}
          </h2>

          <span class="text-sm text-slate-400 font-medium">
            ${cat.jp}
          </span>

          <span class="text-[10px] font-black font-en tracking-widest text-slate-400 border border-slate-200 rounded-full px-2.5 py-0.5">
            ${cat.voices.length}
          </span>
        </div>

        <div class="flex-1 h-px bg-slate-100 ml-2"></div>
      </div>

      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5"
        id="grid-${cat.id}"
      ></div>
    `;

    main.appendChild(sec);

    const grid = sec.querySelector(`#grid-${cat.id}`);

    cat.voices.forEach((v) => {
      const btn = document.createElement("button");

      btn.className =
        "v-btn group w-full bg-white rounded-2xl border border-slate-100 p-3.5 text-left flex items-center gap-3 shadow-sm";

      btn.dataset.label = v.label;
      btn.dataset.cat = cat.id;
      btn.dataset.src = v.src || "";

      btn.innerHTML = `
        <div class="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
          <i class="btn-play-icon fa-solid fa-play text-slate-400 text-xs group-hover:text-primary transition-colors"></i>
        </div>

        <div class="flex-1 min-w-0">
          <span class="text-xs font-bold text-slate-700 leading-snug line-clamp-2">
            ${v.label}
          </span>
        </div>

        <div class="wave-wrap flex items-end gap-0.5 h-4 shrink-0 opacity-0 transition-opacity">
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
          <span class="wave-bar"></span>
        </div>
      `;

      grid.appendChild(btn);
    });
  });

  if (typeof observeFadeInUp === "function") {
    observeFadeInUp(main);
  }
}