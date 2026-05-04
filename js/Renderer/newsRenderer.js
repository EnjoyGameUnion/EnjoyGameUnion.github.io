/**
 * newsRenderer.js
 * ニュースの描画専用
 */

// --- タグバッジ ---
function getTagBadge(tag) {
  const map = {
    "お知らせ": "bg-purple-100 text-purple-600",
    "活動報告": "bg-blue-100 text-blue-600",
    "動画更新": "bg-pink-100 text-pink-600",
    "Live配信": "bg-green-100 text-green-600",
  };
  const cls = map[tag] || "bg-slate-100 text-slate-600";
  return `<span class="${cls} text-xs font-bold px-3 py-1 rounded-full">${tag}</span>`;
}

// --- SNSシェアボタン ---
function buildShareButtons(title, id) {
  const pageUrl = encodeURIComponent(
    `${location.origin}${location.pathname}#news=${id}`
  );
  const text = encodeURIComponent(`${title} | EnjoyGameUnion!!`);

  const xUrl    = `https://x.com/intent/tweet?text=${text}&url=${pageUrl}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${pageUrl}`;
  const copyId  = `copy-btn-${id}`;

  return `
    <div class="share-block mt-16 pt-10 border-t border-slate-100">
      <p class="text-[11px] font-black font-en tracking-[0.25em] text-slate-400 uppercase mb-5">Share this article</p>
      <div class="flex flex-wrap gap-3">

        <!-- X (Twitter) -->
        <a
          href="${xUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="share-btn group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl
                 bg-slate-900 text-white font-bold text-sm
                 hover:bg-primary hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-primary/30"
        >
          <i class="fa-brands fa-x-twitter text-base"></i>
          <span>ポストする</span>
        </a>

        <!-- URLコピー -->
        <button
          id="${copyId}"
          onclick="copyNewsUrl(${id}, '${copyId}')"
          class="share-btn group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl
                 bg-white text-slate-700 font-bold text-sm border border-slate-200
                 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all shadow-sm"
        >
          <i class="fa-solid fa-link text-sm group-hover:text-primary transition-colors"></i>
          <span>URLをコピー</span>
        </button>

      </div>
    </div>
  `;
}

// --- 一覧描画 ---
function renderNewsList(showAll) {
  const containerId = showAll ? "news-all-grid" : "news-grid";
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  const total = newsContent.length;
  const limit = showAll ? total : 3;
  const onClick = showAll ? "AllToDetail" : "MainToDetail";

  for (let i = 0; i < limit; i++) {
    const content = newsContent.find((m) => m.id === total - i);
    if (!content) continue;

    const html = `
      <li class="group hover:bg-gray-50 transition-colors">
        <div class="flex flex-col md:flex-row md:items-start p-6 gap-4 cursor-pointer" onclick="${onClick}(${content.id})">
          <div class="w-full md:w-40 aspect-video shrink-0 overflow-hidden rounded-xl">
            <img src="${content.thumb}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="${content.title}">
          </div>
          <div class="flex-1 flex flex-col h-full">
            <div class="flex items-center gap-4 mt-1 mb-2">
              <span class="text-gray-400 font-en font-medium">${content.date}</span>
              ${getTagBadge(content.tag)}
            </div>
            <div class="flex items-center justify-between flex-1">
              <h4 class="text-gray-800 font-bold text-lg flex-1 group-hover:text-primary transition-colors">
                ${content.title}
              </h4>
              <i class="fa-solid fa-arrow-right text-gray-300 hidden md:block group-hover:text-primary transition-colors transform group-hover:translate-x-1"></i>
            </div>
          </div>
        </div>
      </li>
    `;
    container.insertAdjacentHTML("beforeend", html);
  }
}

// --- 詳細描画 ---
function renderNewsDetail(id) {
  const data = newsContent.find((m) => m.id === id);
  if (!data) return;

  document.getElementById("news-content-area").innerHTML = `
    <span class="text-primary font-en font-bold text-sm tracking-widest uppercase">${data.tag}</span>
    <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">${data.title}</h1>
    <div class="text-slate-400 font-en font-bold mb-16">${data.date}</div>
    <div class="prose prose-xl prose-slate">${data.body}</div>
    ${buildShareButtons(data.title, id)}
  `;
}
