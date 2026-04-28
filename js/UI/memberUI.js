/**
 * memberUI.js
 * UIの挙動・イベント制御
 */

// --- フィルター ---
function initMemberFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
        b.classList.add("border-slate-200", "text-slate-500");
      });

      btn.classList.add("active", "bg-slate-900", "text-white", "border-slate-900", "shadow-lg");
      btn.classList.remove("border-slate-200", "text-slate-500");

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

// --- スライダー ---
let currentSlide = 0;
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

// --- モーダル ---
function openModal(id) {
  const member = membersData.find((m) => m.id === id);
  if (!member) return;

  document.getElementById("modal-name").textContent = member.name;
  document.getElementById("modal-en").textContent = member.en || "";
  document.getElementById("modal-tag").textContent = member.tag;
  document.getElementById("modal-desc1").innerHTML = member.desc1;
  document.getElementById("modal-desc2").innerHTML = member.desc2;

  for (let i = 0; i < 3; i++) {
    const slide = document.getElementById(`slide-${i}`);
    if (slide) slide.src = member.images[i] || "";
  }

  setSlide(0);
  startAutoSlide();

  const modal = document.getElementById("member-modal");
  if (modal) modal.classList.add("active");
  document.documentElement.style.overflow = "hidden";
}

function closeModal() {
  clearInterval(slideInterval);
  const modal = document.getElementById("member-modal");
  if (modal) modal.classList.remove("active");
  document.documentElement.style.overflow = "";
}

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
  renderMembers();       // renderer呼び出し
  initMemberFilter();
  initModalClose();
});