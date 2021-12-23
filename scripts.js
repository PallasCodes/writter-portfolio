const btn = document.getElementById("hamburguer-btn");
const menu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close-btn");
const links = menu.querySelectorAll("li");

function closeMenu() {
  menu.classList.add("closeMenu");
  setTimeout(() => {
    menu.classList.add("hidden");
    menu.classList.remove("menu");
  }, 490);
}

btn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.remove("closeMenu");
  menu.classList.add("menu");
});

closeBtn.addEventListener("click", () => closeMenu());

window.addEventListener("scroll", () => {
  if (window.scrollY > 180) nav.classList.add("nav");
  else nav.classList.remove("nav");
});

links.forEach((link) => {
  link.addEventListener("click", () => closeMenu());
});
