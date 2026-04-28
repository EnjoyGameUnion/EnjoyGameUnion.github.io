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
  `;
}