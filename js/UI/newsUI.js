/**
 * newsUI.js
 * UIの制御・画面遷移
 *
 * ▼ URL共有機能（ハッシュ方式）
 *   記事詳細を開くと URL が #news=1 の形式に変わります。
 *   そのURLを直接開いた場合も、該当記事が表示されます。
 *   例) EnjoyGameUnion.github.io/#news=1
 */

// --- ビュー切り替え ---
function showView(viewId) {
  ["view-home", "view-news-detail", "view-news-all"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle("hidden", id !== viewId);
  });
}

// --- ハッシュを更新（URLに反映） ---
function pushHash(hash) {
  history.pushState(null, "", hash || location.pathname);
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
  pushHash(`#news=${id}`);
}

// --- 詳細 → ホーム ---
function DetailToMain() {
  pushHash(location.pathname); // ハッシュを消す
  showView("view-home");
  document.getElementById("news")?.scrollIntoView();
}

// --- ホーム → 全表示 ---
function MainToAll() {
  pushHash("#news=all");
  showView("view-news-all");
}

// --- 全表示 → ホーム ---
function AllToMain() {
  pushHash(location.pathname);
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
  pushHash(`#news=${id}`);
}

// --- 詳細 → 全表示 ---
function DetailToAll() {
  pushHash("#news=all");
  showView("view-news-all");
}

// --- ハッシュを読み取って初期表示を決定 ---
function handleHash() {
  const hash = location.hash; // 例: "#news=3" or "#news=all"

  if (!hash.startsWith("#news=")) return; // newsに関係ないハッシュは無視

  const value = hash.replace("#news=", "");

  if (value === "all") {
    // ニュース一覧ページを表示
    MainToAll();
    return;
  }

  const id = parseInt(value, 10);
  if (isNaN(id)) return;

  // どちらの遷移元かわからないので AllToDetail を使う（BACK TO NEWS）
  AllToDetail(id);
}

// --- ブラウザの「戻る/進む」ボタン対応 ---
window.addEventListener("popstate", () => {
  // ハッシュが消えたらホームに戻す
  if (!location.hash.startsWith("#news=")) {
    showView("view-home");
  } else {
    handleHash();
  }
});

// --- 初期化 ---
document.addEventListener("DOMContentLoaded", () => {
  renderNewsList(false);
  renderNewsList(true);
  handleHash(); // ページ読み込み時にURLを確認
});