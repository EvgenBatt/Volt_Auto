const mobileMenuButton = document.querySelector(".header-mob-menu-btn");
const mobileMenu = document.querySelector(".header-nav-menu");
const languageList = document.querySelector(".header-language-mobile-list");
const languageItem = document.querySelectorAll(".header-language-mobile-item");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileMenuButton.classList.toggle("active");
  languageList.classList.toggle("active");
  languageItem.forEach((item) => {
    item.classList.toggle("active");
  });
});
