/**
 * newsService.js
 * ニュース表示処理（index.html 専用）
 * ※ newsModel.js を先に読み込んでください
 *
 * 担当:
 *   - ニュース一覧 / ハイライト 動的生成
 *   - ビュー遷移（ホーム ↔ 詳細 ↔ 全表示）
 */

// --- タグに応じたバッジ HTML を返す ---
function getTagBadge(tag) {
  const map = {
    "お知らせ": "bg-purple-100 text-purple-600",
    "活動報告":  "bg-blue-100 text-blue-600",
    "動画更新":  "bg-pink-100 text-pink-600",
    "Live配信":  "bg-green-100 text-green-600",
  };
  const cls = map[tag] || "bg-slate-100 text-slate-600";
  return `<span class="${cls} text-xs font-bold px-3 py-1 rounded-full">${tag}</span>`;
}

// --- ニュース一覧を描画する ---
// showAll: true → news-all-grid（全件）、false → news-grid（最新3件）
function setNews(showAll) {
  const containerId = showAll ? "news-all-grid" : "news-grid";
  const newsContainer = document.getElementById(containerId);
  if (!newsContainer) return;

  newsContainer.innerHTML = "";

  const total  = newsContent.length;
  const limit  = showAll ? total : 3;
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
    newsContainer.insertAdjacentHTML("beforeend", html);
  }
}

// --- 詳細ビューに内容をセットする共通処理 ---
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

// --- ビュー切り替えユーティリティ ---
function showView(viewId) {
  ["view-home", "view-news-detail", "view-news-all"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("hidden", id !== viewId);
  });
}

// --- ホーム → 詳細 ---
function MainToDetail(id) {
  document.getElementById("news-back-btn").innerHTML = `
    <button onclick="DetailToMain()"
      class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold mb-12 transition-colors">
      <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO HOME
    </button>`;
  renderNewsDetail(id);
  showView("view-news-detail");
  window.scrollTo(0, 0);
}

// --- 詳細 → ホーム ---
function DetailToMain() {
  showView("view-home");
  document.getElementById("news")?.scrollIntoView();
}

// --- ホーム → 全表示 ---
function MainToAll() {
  showView("view-news-all");
}

// --- 全表示 → ホーム ---
function AllToMain() {
  showView("view-home");
  document.getElementById("news")?.scrollIntoView();
}

// --- 全表示 → 詳細 ---
function AllToDetail(id) {
  document.getElementById("news-back-btn").innerHTML = `
    <button onclick="DetailToAll()"
      class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold mb-12 transition-colors">
      <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO NEWS
    </button>`;
  renderNewsDetail(id);
  showView("view-news-detail");
  window.scrollTo(0, 0);
}

// --- 詳細 → 全表示 ---
function DetailToAll() {
  showView("view-news-all");
}

// --- 初期化 ---
document.addEventListener("DOMContentLoaded", () => {
  setNews(false); // ハイライト（最新3件）
  setNews(true);  // 全表示
});
