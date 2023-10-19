const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownContent = document.getElementById("dropdown-content");
let isDropdownOpen = false;

dropdownTrigger.addEventListener("click", (event) => {
  event.stopPropagation();
  isDropdownOpen = !isDropdownOpen;
  dropdownContent.style.display = isDropdownOpen ? "block" : "none";
});

document.addEventListener("click", (event) => {
  if (isDropdownOpen && event.target !== dropdownTrigger) {
    dropdownContent.style.display = "none";
    isDropdownOpen = false;
  }
});
