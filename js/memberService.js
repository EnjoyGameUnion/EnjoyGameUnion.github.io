/**
 * memberService.js
 * メンバー表示処理（index.html 専用）
 * ※ memberModel.js を先に読み込んでください
 *
 * 担当:
 *   - メンバーカード 動的生成
 *   - タグフィルター
 *   - モーダル 開閉 / スライダー制御
 */

// --- メンバーカードの動的生成 ---
function renderMembers() {
  const gridContainer = document.getElementById("members-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  membersData.forEach((member, index) => {
    // 画像が未設定の場合はプレースホルダーを自動生成
    if (!member.images || member.images[0] === "") {
      const placeholder = (opacity) =>
        `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20opacity%3D%22${opacity}%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20font-weight%3D%22900%22%3EComingSoon...%3C%2Ftext%3E%3C%2Fsvg%3E`;
      member.images = [placeholder("0.1"), placeholder("0.2"), placeholder("0.3")];
    }

    // 最初の 10 人だけ遅延アニメーション
    const delay = (index % 10) * 0.05;

    const cardHTML = `
      <div
        class="member-card bg-white rounded-[2rem] border border-slate-100 p-3 cursor-pointer fade-in-up"
        style="transition-delay:${delay}s"
        data-tag="${member.tag}"
        onclick="openModal(${member.id})"
      >
        <div class="member-img-wrap aspect-[4/5] bg-slate-50 rounded-[1.5rem] mb-4 flex items-center justify-center relative">
          <img src="${member.images[0]}" alt="${member.name}" class="w-full h-full object-cover rounded-[1.5rem]">
          <div class="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[8px] font-black text-slate-800 shadow-sm uppercase tracking-tighter">
            ${member.tag}
          </div>
        </div>
        <div class="px-2 pb-2">
          <div class="text-[8px] font-en font-black text-primary tracking-widest mb-1">${member.vrc}</div>
          <h4 class="text-sm font-black text-slate-900 truncate">${member.name}</h4>
        </div>
      </div>
    `;
    gridContainer.insertAdjacentHTML("beforeend", cardHTML);
  });

  // カード生成後に新しい .fade-in-up を observer に登録
  if (typeof observeFadeInUp === "function") {
    observeFadeInUp(gridContainer);
  }
}

// --- タグフィルター ---
function initMemberFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // アクティブ切り替え
      filterBtns.forEach((b) => {
        b.classList.remove("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
        b.classList.add("border-slate-200", "text-slate-500");
      });
      btn.classList.add("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
      btn.classList.remove("border-slate-200", "text-slate-500");

      // カード表示切り替え
      const tag = btn.dataset.tag;
      document.querySelectorAll(".member-card").forEach((card) => {
        if (tag === "all" || card.dataset.tag.includes(tag)) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      });
    });
  });
}

// --- スライダー制御 ---
let currentSlide  = 0;
let slideInterval = null;

function setSlide(index) {
  currentSlide = index;
  const track = document.getElementById("modal-slider-track");
  if (track) track.style.transform = `translateX(-${index * 33.333}%)`;

  document.querySelectorAll(".slide-indicator").forEach((ind, i) => {
    ind.style.backgroundColor = i === index ? "#6366f1" : "#e2e8f0";
  });
}

function startAutoSlide() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    setSlide(currentSlide);
  }, 4000);
}

// --- モーダル 開く ---
function openModal(id) {
  const member = membersData.find((m) => m.id === id);
  if (!member) return;

  document.getElementById("modal-name").textContent   = member.name;
  document.getElementById("modal-en").textContent     = member.en || "";
  document.getElementById("modal-tag").textContent    = member.tag;
  document.getElementById("modal-desc1").innerHTML    = member.desc1;
  document.getElementById("modal-desc2").innerHTML    = member.desc2;

  for (let i = 0; i < 3; i++) {
    const slide = document.getElementById(`slide-${i}`);
    if (slide) slide.src = member.images[i] || "";
  }

  setSlide(0);
  startAutoSlide();

  // SNS リンク生成（重複防止のため既存を削除）
  const existX  = document.getElementById("modal-x");
  const existYt = document.getElementById("modal-yt");
  if (existX)  existX.remove();
  if (existYt) existYt.remove();

  const modalLinksContent = document.getElementById("modal-links");
  if (member.x) {
    modalLinksContent.insertAdjacentHTML("beforeend", `
      <a id="modal-x" href="https://x.com/${member.x}" target="_blank"
        class="px-3 md:px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-primary transition-all">
        <i class="fa-brands fa-x-twitter"></i><span>X (Twitter)</span>
      </a>
    `);
  }
  if (member.youtube) {
    modalLinksContent.insertAdjacentHTML("beforeend", `
      <a id="modal-yt" href="https://www.youtube.com/@${member.youtube}" target="_blank"
        class="px-3 md:px-6 py-3 bg-red-600 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-red-700 transition-all">
        <i class="fa-brands fa-youtube"></i><span>YouTube</span>
      </a>
    `);
  }

  const modal = document.getElementById("member-modal");
  if (modal) modal.classList.add("active");
  document.documentElement.style.overflow = "hidden";
}

// --- モーダル 閉じる ---
function closeModal() {
  clearInterval(slideInterval);
  const modal = document.getElementById("member-modal");
  if (modal) modal.classList.remove("active");
  document.documentElement.style.overflow = "";
}

// --- 背景クリックで閉じる ---
function initModalClose() {
  const modal = document.getElementById("member-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

// --- 初期化 ---
document.addEventListener("DOMContentLoaded", () => {
  renderMembers();
  initMemberFilter();
  initModalClose();
});