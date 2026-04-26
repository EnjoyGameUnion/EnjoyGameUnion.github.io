/**
 * voiceRenderer.js
 * 描画専用
 */

function buildFilterTabs() {
  const wrap = document.querySelector(".filter-scroll");
  if (!wrap) return;

  wrap.innerHTML = "";

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
          <h2 class="text-2xl font-black font-en text-dark">${cat.en}</h2>
          <span class="text-sm text-slate-400">${cat.jp}</span>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5" id="grid-${cat.id}"></div>
    `;

    main.appendChild(sec);

    const grid = sec.querySelector(`#grid-${cat.id}`);

    cat.voices.forEach((v) => {
      const btn = document.createElement("button");

      btn.className =
        "v-btn group w-full bg-white rounded-2xl border border-slate-100 p-3.5 text-left flex items-center gap-3";

      btn.dataset.label = v.label;
      btn.dataset.cat = cat.id;
      btn.dataset.src = v.src;

      btn.innerHTML = `
        <div class="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
          <i class="btn-play-icon fa-solid fa-play text-slate-400 text-xs"></i>
        </div>

        <div class="flex-1 min-w-0">
          <span class="text-xs font-bold text-slate-700">${v.label}</span>
        </div>
      `;

      grid.appendChild(btn);
    });
  });

  if (typeof observeFadeInUp === "function") {
    observeFadeInUp(main);
  }
}