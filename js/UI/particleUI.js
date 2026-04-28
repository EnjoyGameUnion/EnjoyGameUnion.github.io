/**
 * particleUI.js
 * ヒーローセクションの浮遊パーティクル生成
 * index.html 専用
 */

(function createParticles() {
  const container = document.getElementById("particles-container");
  if (!container) return;

  // コンテナ自体を絶対配置でヒーロー全体に広げる
  container.style.cssText =
    "position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;";

  // パーティクルの設定バリエーション
  const variants = [
    { size: 8,   opacity: 0.15, duration: 18 },
    { size: 14,  opacity: 0.10, duration: 22 },
    { size: 6,   opacity: 0.20, duration: 16 },
    { size: 20,  opacity: 0.08, duration: 26 },
    { size: 10,  opacity: 0.12, duration: 20 },
    { size: 5,   opacity: 0.18, duration: 14 },
    { size: 16,  opacity: 0.07, duration: 30 },
    { size: 12,  opacity: 0.10, duration: 24 },
    { size: 7,   opacity: 0.15, duration: 17 },
    { size: 18,  opacity: 0.06, duration: 28 },
    { size: 9,   opacity: 0.13, duration: 19 },
    { size: 11,  opacity: 0.09, duration: 23 },
    { size: 4,   opacity: 0.20, duration: 13 },
    { size: 22,  opacity: 0.05, duration: 32 },
    { size: 6,   opacity: 0.16, duration: 15 },
  ];

  variants.forEach((v, i) => {
    const el = document.createElement("div");
    el.className = "particle";

    // ランダムな横位置・開始タイミング
    const left  = Math.random() * 100;
    const delay = Math.random() * -20; // マイナス delay で最初から流れて見える

    el.style.cssText = `
      width: ${v.size}px;
      height: ${v.size}px;
      left: ${left}%;
      bottom: -${v.size}px;
      opacity: ${v.opacity};
      animation-duration: ${v.duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(el);
  });
})();
