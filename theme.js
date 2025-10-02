const btn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");
const body = document.body;

// Tema inicial: Dark
let isLight = false;

btn.addEventListener("click", () => {
  isLight = !isLight;

  if (isLight) {
    body.setAttribute("data-theme", "light");
    icon.textContent = "light_mode"; // ☀️
  } else {
    body.removeAttribute("data-theme"); // volta pro dark
    icon.textContent = "dark_mode"; // 🌙
  }
});
