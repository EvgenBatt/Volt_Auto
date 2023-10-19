const buttons = document.querySelectorAll(".services-img-content");
const textBlocks = document.querySelectorAll(".services-visible-content");

const buttonArray = Array.from(buttons);
const textBlockArray = Array.from(textBlocks);

buttonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (window.innerWidth <= 1023) {
      const textBlock = textBlockArray[index];
      if (textBlock.classList.contains("services-open-tab")) {
        textBlock.style.display = "none";
        textBlock.classList.remove("services-open-tab");
      } else {
        textBlock.style.display = "flex";
        textBlock.classList.add("services-open-tab");
      }
    }
  });
});

buttonArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (window.innerWidth > 1024) {
      const textBlock = textBlockArray[index];
      const target = button.getAttribute("data-target");
      const targetContent = document.querySelector("." + target);

      if (textBlock.classList.contains("services-open-tab")) {
        textBlock.style.display = "none";
        textBlock.classList.remove("services-open-tab");
      } else {
        textBlock.style.display = "flex";
        textBlock.classList.add("services-open-tab");
      }

      textBlockArray.forEach((block) => {
        if (block !== targetContent) {
          block.style.display = "none";
          block.classList.remove("services-open-tab");
        }
      });
    }
  });
});