const image = document.getElementById("zoom-image");

image.addEventListener("click", () => {
  image.classList.toggle("zoomed");
});

image.addEventListener("click", () => {
  if (image.classList.contains("zoomed")) {
    image.classList.remove("zoomed");
  } else {
    image.classList.add("zoomed");
  }
});
