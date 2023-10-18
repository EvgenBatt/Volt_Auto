function toggleDropdown() {
    const content = document.querySelector('.dropdown-content');
    const arrow = document.querySelector('.arrow');

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove('rotated');
    } else {
        content.style.display = "block";
        arrow.classList.add('rotated');
    }
}