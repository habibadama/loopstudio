const navbar = document.querySelector(".navbar");
const showMenu = document.querySelector(".show-menu");
const closeMenu = document.querySelector(".close-menu");

showMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  closeMenu.classList.toggle("active");
});
