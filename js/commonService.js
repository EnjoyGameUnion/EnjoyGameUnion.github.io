/**
 * commonService.js
 * 共通処理（index.html・voice.html 両方で読み込む）
 *
 * 担当:
 *   - ヘッダー スクロール制御
 *   - ハンバーガーメニュー 開閉
 *   - スクロールアニメーション (IntersectionObserver)
 */

// --- ヘッダー スクロール制御 ---
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
    header.classList.replace("bg-white/80", "bg-white/95");
  } else {
    header.classList.remove("shadow-md");
    header.classList.replace("bg-white/95", "bg-white/80");
  }
});

// --- ハンバーガーメニュー 開閉 ---
function toggleMenu(isOpen) {
  const sideMenu = document.getElementById("side-menu");
  const overlay  = document.getElementById("menu-overlay");
  if (!sideMenu || !overlay) return;

  if (isOpen) {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const openBtn  = document.getElementById("menu-open-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const overlay  = document.getElementById("menu-overlay");
  if (openBtn)  openBtn.addEventListener("click",  () => toggleMenu(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggleMenu(false));
  if (overlay)  overlay.addEventListener("click",  () => toggleMenu(false));

  // ナビリンクをクリックしたらメニューを閉じる
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });
});

// --- スクロールアニメーション (IntersectionObserver) ---
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { root: null, rootMargin: "0px", threshold: 0.1 }
);

// DOMContentLoaded 後に .fade-in-up を監視開始
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in-up").forEach((el) => {
    scrollObserver.observe(el);
  });
});

// voice.html 側から動的生成後に追加要素を監視させる場合に呼ぶユーティリティ
function observeFadeInUp(root) {
  const target = root || document;
  target.querySelectorAll(".fade-in-up").forEach((el) => {
    scrollObserver.observe(el);
  });
}
