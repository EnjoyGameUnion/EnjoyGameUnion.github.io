// --- 2. メンバーカードの動的生成 ---
const gridContainer = document.getElementById("members-grid");

function renderMembers() {
  gridContainer.innerHTML = "";
  membersData.forEach((member, index) => {
    // imagesの自動生成
    if (member.images == "")
      member.images = [
        `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20opacity%3D%220.1%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20font-weight%3D%22900%22%3EComingSoon...%3C%2Ftext%3E%3C%2Fsvg%3E`,
        `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20opacity%3D%220.2%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20font-weight%3D%22900%22%3EComingSoon...%3C%2Ftext%3E%3C%2Fsvg%3E`,
        `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20opacity%3D%220.3%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20font-weight%3D%22900%22%3EComingSoon...%3C%2Ftext%3E%3C%2Fsvg%3E`,
      ];
    // 20人同時だと重いので、最初の10人だけ遅延アニメーションをつける
    const delay = (index % 10) * 0.05;
    const cardHTML = `
              <div class="member-card bg-white rounded-[2rem] border border-slate-100 p-3 cursor-pointer fade-in-up" data-tag="${member.tag}" onclick="openModal(${member.id})">
              <div class="member-img-wrap aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 flex items-center justify-center relative">
                  <img src="${member.images[0]}" alt="${member.name}" class="w-full h-full object-cover rounded-[1.5rem]">
                  <div class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-black text-slate-800 shadow-sm uppercase tracking-tighter">${member.tag}</div>
              </div>
              <div class="px-2 pb-2">
                  <div class="text-[8px] font-en font-black text-primary tracking-widest mb-1">${member.vrc}</div>
                  <h4 class="text-sm font-black text-slate-900 truncate">${member.name}</h4>
              </div>
          </div>
          `;
    gridContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

renderMembers();

// --- フィルター機能の制御 ---
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
      b.classList.add("border-slate-200", "text-slate-500");
    });
    btn.classList.add("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
    btn.classList.remove("border-slate-200", "text-slate-500");
    const tag = btn.dataset.tag;
    document.querySelectorAll(".member-card").forEach((card) => {
      if (tag === "all" || card.dataset.tag === tag) {
        card.classList.remove("hidden-card");
      } else {
        card.classList.add("hidden-card");
      }
    });
  });
});

// --- 3. モーダル制御ロジック ---
const modal = document.getElementById("member-modal");

// --- スライダー制御 ---
let currentSlide = 0;
let slideInterval;

function setSlide(index) {
  currentSlide = index;
  const track = document.getElementById("modal-slider-track");
  track.style.transform = `translateX(-${index * 33.333}%)`;
  const indicators = document.querySelectorAll(".slide-indicator");
  indicators.forEach((ind, i) => {
    ind.style.backgroundColor = i === index ? "#6366f1" : "#e2e8f0";
    ind.style.width = i === index ? "40px" : "40px";
  });
}

function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    setSlide(currentSlide);
  }, 4000);
}

function openModal(id) {
  const member = membersData.find((m) => m.id === id);
  document.getElementById("modal-name").textContent = member.name;
  document.getElementById("modal-en").textContent = member.en;
  document.getElementById("modal-tag").textContent = member.tag;
  document.getElementById("modal-desc1").innerHTML = member.desc1;
  document.getElementById("modal-desc2").innerHTML = member.desc2;

  for (let i = 0; i < 3; i++) {
    document.getElementById(`slide-${i}`).src = member.images[i];
  }

  setSlide(0);
  startAutoSlide();

  // モーダル内リンク生成
  const removeModalX = document.getElementById("modal-x");
  if (removeModalX != null) removeModalX.remove();
  const removeModalYt = document.getElementById("modal-yt");
  if (removeModalYt != null) removeModalYt.remove();
  const modalLinksContent = document.getElementById("modal-links");

  if (member.x != "") {
    const modalLinksX = `
    <a id="modal-x" href="https://x.com/${member.x}" target="_blank"
      class="px-3 md:px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary transition-all">
      <i class="fa-brands fa-x-twitter"></i> <span>X (Twitter)</span>
    </a>
  `;
    modalLinksContent.insertAdjacentHTML("beforeend", modalLinksX);
  }

  if (member.youtube != "") {
    const modalLinksYt = `
    <a id="modal-yt" href="https://www.youtube.com/@${member.youtube}" target="_blank"
      class="px-3 md:px-6 py-3 bg-red-600 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-red-700 transition-all">
      <i class="fa-brands fa-youtube"></i> <span>YouTube</span>
    </a>
  `;
    modalLinksContent.insertAdjacentHTML("beforeend", modalLinksYt);
  }
  document.getElementById("member-modal").classList.add("active");

  // スクロールを禁止
  document.documentElement.style.overflow = "hidden";
}

function closeModal() {
  clearInterval(slideInterval);
  document.getElementById("member-modal").classList.remove("active");
  // スクロール禁止解除
  document.documentElement.style.overflow = "";
}

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal(); // 背景クリックで閉じる
});

// --- 4. スクロールアニメーション (Intersection Observer) ---
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1, // 10%見えたら発火
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      // 一度表示したら監視を解除する場合（繰り返しアニメーションさせない場合）
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// .fade-in-up クラスを持つすべての要素を監視
document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});

// --- 5. ヘッダーのスクロール制御 ---
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md");
    header.classList.replace("bg-white/80", "bg-white/95");
  } else {
    header.classList.remove("shadow-md");
    header.classList.replace("bg-white/95", "bg-white/80");
  }
});

// --- 6. ハンバーガーメニュー ---
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");
function toggleMenu(isOpen) {
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

// イベント登録
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu-open-btn").addEventListener("click", () => toggleMenu(true));
  document.getElementById("menu-close-btn").addEventListener("click", () => toggleMenu(false));
  overlay.addEventListener("click", () => toggleMenu(false));
  // リンククリックで閉じる
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });
});

// --- 7. Newsハイライト ---
function setNews(showAll) {
  const newsContainer = showAll ? document.getElementById("news-all-grid") : document.getElementById("news-grid");
  newsContainer.innerHTML = "";
  const newsTotal = newsContent.length;
  console.log(newsTotal);
  const maxContentsLength = showAll ? newsTotal : 3;
  for (let i = 0; i < maxContentsLength; i++) {
    const content = newsContent.find((m) => m.id === newsTotal - i);
    let contentHTML = ``;
    if (showAll) {
      contentHTML += `
      <li class="hover:bg-gray-50 transition-colors">
      <div class="flex flex-col md:flex-row md:items-center p-6 gap-4" onclick="AllToDetail(${content.id})">
        <!-- サムネ -->
          <div class="w-full md:w-40 aspect-video shrink-0 overflow-hidden rounded-xl">
            <img src="${content.thumb}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
          </div>
          <div class="flex items-center gap-4 md:w-48 shrink-0">
            <span class="text-gray-400 font-en font-medium">${content.date}</span>`;
    } else {
      contentHTML += `
      <li class="hover:bg-gray-50 transition-colors">
        <div class="flex flex-col md:flex-row md:items-center p-6 gap-4" onclick="MainToDetail(${content.id})">
        <!-- サムネ -->
          <div class="w-full md:w-40 aspect-video shrink-0 overflow-hidden rounded-xl">
            <img src="${content.thumb}" class="w-full h-full object-cover group-hover:scale-105 transition-transform">
          </div>
          <div class="flex items-center gap-4 md:w-48 shrink-0">
            <span class="text-gray-400 font-en font-medium">${content.date}</span>`;
    }
    switch (content.tag) {
      case "お知らせ":
        contentHTML += `<span class="bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full">${content.tag}</span>`;
        break;
      case "活動報告":
        contentHTML += `<span class="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">${content.tag}</span>`;
        break;
      case "動画更新":
        contentHTML += `<span class="bg-pink-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full">${content.tag}</span>`;
        break;
      case "Live配信":
        contentHTML += `<span class="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">${content.tag}</span>`;
        break;
      default:
        contentHTML += `<span class="text-xs font-bold px-3 py-1 rounded-full">${content.tag}</span>`;
    }
    contentHTML += `</div>
          <h4 class="text-gray-800 font-bold text-lg flex-1 group-hover:text-primary transition-colors">
          ${content.title}
          </h4>
          <i
            class="fa-solid fa-arrow-right text-gray-300 hidden md:block group-hover:text-primary transition-colors transform group-hover:translate-x-1"></i>
        </a>
      </li>
      `;
    newsContainer.insertAdjacentHTML("beforeend", contentHTML);
  }
}

// 全表示部分の内容
setNews(true);

// ハイライト部分の内容
setNews(false);
// --- 8. News詳細 ---
function MainToDetail(id) {
  document.getElementById("news-back-btn").innerHTML = `<button onclick="DetailToMain()"
  class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold mb-12 transition-colors">
  <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO HOME
</button>`;
  const data = newsContent.find((m) => m.id === id);
  document.getElementById("news-content-area").innerHTML = `
          <span class="text-primary font-en font-bold text-sm tracking-widest uppercase">${data.tag}</span>
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">${data.title}</h1>
          <div class="text-slate-400 font-en font-bold mb-16">${data.date}</div>
          <div class="prose prose-xl prose-slate">${data.body}</div>
      `;
  document.getElementById("view-home").classList.add("hidden");
  document.getElementById("view-news-detail").classList.remove("hidden");
  document.getElementById("view-news-all").classList.add("hidden");
  window.scrollTo(0, 0);
}
function DetailToMain() {
  document.getElementById("view-home").classList.remove("hidden");
  document.getElementById("view-news-detail").classList.add("hidden");
  document.getElementById("view-news-all").classList.add("hidden");
  document.getElementById("news").scrollIntoView();
}
// --- 9. News全表示 ---
function MainToAll() {
  document.getElementById("view-home").classList.add("hidden");
  document.getElementById("view-news-detail").classList.add("hidden");
  document.getElementById("view-news-all").classList.remove("hidden");
}
function AllToMain() {
  document.getElementById("view-home").classList.remove("hidden");
  document.getElementById("view-news-detail").classList.add("hidden");
  document.getElementById("view-news-all").classList.add("hidden");
  document.getElementById("news").scrollIntoView();
}
function AllToDetail(id) {
  document.getElementById("news-back-btn").innerHTML = `<button onclick="DetailToAll()"
  class="group flex items-center gap-3 text-slate-400 hover:text-primary font-bold mb-12 transition-colors">
  <i class="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> BACK TO HOME
</button>`;
  const data = newsContent.find((m) => m.id === id);
  document.getElementById("news-content-area").innerHTML = `
          <span class="text-primary font-en font-bold text-sm tracking-widest uppercase">${data.tag}</span>
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-8 leading-tight">${data.title}</h1>
          <div class="text-slate-400 font-en font-bold mb-16">${data.date}</div>
          <div class="prose prose-xl prose-slate">${data.body}</div>
      `;
  document.getElementById("view-home").classList.add("hidden");
  document.getElementById("view-news-detail").classList.remove("hidden");
  document.getElementById("view-news-all").classList.add("hidden");
  window.scrollTo(0, 0);
}
function DetailToAll() {
  document.getElementById("view-home").classList.add("hidden");
  document.getElementById("view-news-detail").classList.add("hidden");
  document.getElementById("view-news-all").classList.remove("hidden");
}