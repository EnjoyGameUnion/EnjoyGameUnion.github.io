/**
 * memberRenderer.js
 * メンバーの描画専用
 */

function renderMembers() {
  const gridContainer = document.getElementById("members-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  membersData.forEach((member, index) => {
    // プレースホルダー生成
    if (!member.images || member.images[0] === "") {
      const placeholder = (opacity) =>
        `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Crect%20width%3D%22400%22%20height%3D%22500%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20opacity%3D%22${opacity}%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22${encodeURIComponent(member.color)}%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20font-weight%3D%22900%22%3EComingSoon...%3C%2Ftext%3E%3C%2Fsvg%3E`;
      member.images = [placeholder("0.1"), placeholder("0.2"), placeholder("0.3")];
    }

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

  if (typeof observeFadeInUp === "function") {
    observeFadeInUp(gridContainer);
  }
}