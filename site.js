"use strict";
const screen = document.getElementById("animal-screen");
const caption = document.getElementById("screen-caption");
const views = {
  "2d": { src: "ocean-2d.webp", alt: "3D动物园海豚绘本插画页面，展示中英文名称、发音按钮和海豚插画", caption: "二维绘本插画 · 在 App 中轻点 3D 按钮，进入立体展示" },
  "3d": { src: "ocean-3d.webp", alt: "3D动物园海豚立体展示页面，展示中英文名称、发音按钮和三维海豚", caption: "3D 模型展示 · 在 App 中可旋转、缩放与点击互动" }
};
if (screen && caption) {
  document.querySelectorAll("[data-view]").forEach(button => {
    button.addEventListener("click", () => {
      const view = views[button.dataset.view];
      if (!view) return;
      screen.src = view.src;
      screen.alt = view.alt;
      caption.textContent = view.caption;
      document.querySelectorAll("[data-view]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    });
  });
}
