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

// --- X投稿URL生成 ---
function buildXUrl(title, id) {
  const pageUrl = `${location.origin}${location.pathname}#news=${id}`;
  const tweetText = `「${title}」の記事を読みました！\n${pageUrl}\n#EnjoyGameUnion`;
  return `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
}

// --- コピー用URL生成 ---
function buildPageUrl(id) {
  return `${location.origin}${location.pathname}#news=${id}`;
}

// --- 上部：アイコンのみのコンパクトシェアボタン ---
function buildTopShareBtns(title, id) {
  const xUrl = buildXUrl(title, id);

  return `
    <div class="flex items-center gap-1.5 shrink-0">
      <span class="text-[10px] font-black font-en tracking-widest text-slate-300 uppercase mr-1">Share</span>

      <!-- X -->
      <a
        href="${xUrl}"
        target="_blank"
        rel="noopener noreferrer"
        title="Xでポスト"
        class="w-8 h-8 rounded-xl inline-flex items-center justify-center
               bg-slate-900 text-white text-xs
               hover:bg-primary hover:scale-110 hover:-rotate-6
               transition-all duration-200 shadow-sm"
      >
        <i class="fa-brands fa-x-twitter"></i>
      </a>

      <!-- コピー -->
      <button
        id="copy-btn-top-${id}"
        onclick="copyNewsUrl(${id})"
        title="リンクをコピー"
        class="w-8 h-8 rounded-xl inline-flex items-center justify-center
               bg-white text-slate-400 text-xs border border-slate-200
               hover:border-indigo-300 hover:text-indigo-500 hover:scale-110 hover:rotate-6
               transition-all duration-200 shadow-sm"
      >
        <i class="fa-solid fa-link"></i>
      </button>
    </div>
  `;
}

// --- 下部：リッチなシェアブロック ---
function buildBottomShare(title, id) {
  const xUrl = buildXUrl(title, id);

  return `
    <div class="mt-20 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
      <div class="flex flex-col sm:flex-row sm:items-center gap-6">

        <!-- 左：テキスト -->
        <div class="flex-1">
          <p class="text-[10px] font-black font-en tracking-[0.3em] text-indigo-400 uppercase mb-1">Share</p>
          <p class="text-base font-black text-slate-800">この記事をシェアする</p>
        </div>

        <!-- 右：ボタン群 -->
        <div class="flex items-center gap-3 shrink-0">

          <!-- X -->
          <a
            href="${xUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="group relative inline-flex items-center gap-2
                   px-4 py-2.5 text-xs
                   sm:px-5 sm:py-3 sm:text-sm
                   rounded-2xl bg-slate-900 text-white font-bold overflow-hidden whitespace-nowrap
                   hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20
                   transition-all duration-300"
          >
            <span class="absolute inset-0 bg-primary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-2xl"></span>
            <i class="fa-brands fa-x-twitter relative z-10"></i>
            <span class="relative z-10">ポストする</span>
          </a>

          <!-- コピー -->
          <button
            id="copy-btn-bottom-${id}"
            onclick="copyNewsUrl(${id})"
            class="group inline-flex items-center gap-2
                   px-4 py-2.5 text-xs
                   sm:px-5 sm:py-3 sm:text-sm
                   rounded-2xl bg-white text-slate-600 font-bold border-2 border-slate-200 whitespace-nowrap
                   hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-1
                   hover:shadow-lg hover:shadow-indigo-100
                   transition-all duration-300"
          >
            <i class="fa-solid fa-link text-xs group-hover:rotate-45 transition-transform duration-300"></i>
            <span>リンクをコピー</span>
          </button>

        </div>
      </div>
    </div>
  `;
}

// --- 上部ナビ（戻る＋シェア） ---
function buildTopNav(backHtml, title, id) {
  return `
    <div class="flex items-center justify-between mb-12">
      <div>${backHtml}</div>
      ${buildTopShareBtns(title, id)}
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
function renderNewsDetail(id, backHtml) {
  const data = newsContent.find((m) => m.id === id);
  if (!data) return;

  document.getElementById("news-back-btn").innerHTML =
    buildTopNav(backHtml, data.title, id);

  document.getElementById("news-content-area").innerHTML = `
    <span class="text-primary font-en font-bold text-sm tracking-widest uppercase">${data.tag}</span>
    <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">${data.title}</h1>
    <div class="text-slate-400 font-en font-bold mb-16">${data.date}</div>
    <div class="prose prose-xl prose-slate">${data.body}</div>
    ${buildBottomShare(data.title, id)}
  `;
}
