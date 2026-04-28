/**
 * newsUI.js
 * UIの制御・画面遷移
 */

// --- ビュー切り替え ---
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
  renderNewsList(false);
  renderNewsList(true);
});