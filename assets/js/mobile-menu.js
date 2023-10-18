const mobileMenuButton = document.querySelector(".header-mob-menu-btn");
const mobileMenu = document.querySelector(".header-nav-menu");
const languageList = document.querySelector(".header-language-mobile-list");
const languageItem = document.querySelectorAll(".header-language-mobile-item");
const body = document.body;

mobileMenuButton.addEventListener("click", (event) => {
  if (window.innerWidth <= 1023) {
    event.stopPropagation();
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      languageList.classList.remove("active");
      languageItem.forEach((item) => {
        item.classList.remove("active");
      });
      body.style.overflowY = "auto";
    } else {
      mobileMenu.classList.add("active");
      mobileMenuButton.classList.add("active");
      languageList.classList.add("active");
      languageItem.forEach((item) => {
        item.classList.add("active");
      });
      body.style.overflowY = "hidden";
    }
  }
});

body.addEventListener("click", (event) => {
  if (window.innerWidth <= 1023) {
    if (!mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove("active");
      mobileMenuButton.classList.remove("active");
      languageList.classList.remove("active");
      languageItem.forEach((item) => {
        item.classList.remove("active");
      });
      body.style.overflowY = "auto";
    }
  }
});
