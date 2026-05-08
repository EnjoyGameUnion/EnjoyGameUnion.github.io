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

// --- 戻るボタン HTML ---
const BACK_TO_HOME = `
  <button onclick="DetailToMain()"
    class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold transition-colors">
    <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO HOME
  </button>`;

const BACK_TO_NEWS = `
  <button onclick="DetailToAll()"
    class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold transition-colors">
    <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO NEWS
  </button>`;

// --- ホーム → 詳細 ---
function MainToDetail(id) {
  renderNewsDetail(id, BACK_TO_HOME);
  showView("view-news-detail");
  window.scrollTo(0, 0);
  pushHash(`#news=${id}`);
}

// --- 詳細 → ホーム ---
function DetailToMain() {
  pushHash(location.pathname);
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
  renderNewsDetail(id, BACK_TO_NEWS);
  showView("view-news-detail");
  window.scrollTo(0, 0);
  pushHash(`#news=${id}`);
}

// --- 詳細 → 全表示 ---
function DetailToAll() {
  pushHash("#news=all");
  showView("view-news-all");
}

// --- トースト通知 ---
function showCopyToast() {
  // 既存トーストがあれば削除
  const existing = document.getElementById("copy-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "copy-toast";
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%) translateY(16px);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  `;
  toast.innerHTML = `
    <div style="
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: #1e1b4b;
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      padding: 12px 20px;
      border-radius: 999px;
      box-shadow: 0 8px 30px rgba(99,102,241,0.35), 0 2px 8px rgba(0,0,0,0.15);
      white-space: nowrap;
    ">
      <span style="
        width: 22px; height: 22px;
        background: #6366f1;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
      ">
        <i class="fa-solid fa-check" style="font-size:10px;"></i>
      </span>
      リンクをコピーしました
    </div>
  `;

  document.body.appendChild(toast);

  // フェードイン
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });
  });

  // 2秒後にフェードアウト→削除
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(8px)";
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// --- URLコピー ---
function copyNewsUrl(id) {
  const url = `${location.origin}${location.pathname}#news=${id}`;

  const doAction = () => {
    showCopyToast();
  };

  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(doAction).catch(() => {
      fallbackCopy(url);
      doAction();
    });
  } else {
    fallbackCopy(url);
    doAction();
  }
}

function fallbackCopy(text) {
  const el = document.createElement("input");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// --- ハッシュを読み取って初期表示を決定 ---
function handleHash() {
  const hash = location.hash;
  if (!hash.startsWith("#news=")) return;

  const value = hash.replace("#news=", "");

  if (value === "all") {
    MainToAll();
    return;
  }

  const id = parseInt(value, 10);
  if (isNaN(id)) return;

  AllToDetail(id);
}

// --- ブラウザの「戻る/進む」ボタン対応 ---
window.addEventListener("popstate", () => {
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
  handleHash();
});
