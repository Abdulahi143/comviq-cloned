// Hamburger Menu start
const hamburger = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = (visibility) =>
  mobileMenu.setAttribute("data-visible", visibility);

hamburger.addEventListener("click", () => toggleMenu("true"));
closeIcon.addEventListener("click", () => toggleMenu("false"));
// Hamburger Menu end
