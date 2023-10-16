const buttons = document.querySelectorAll(".services-img-button");
const textBlocks = document.querySelectorAll(".services-visible-content");

const buttonArray = Array.from(buttons);
const textBlockArray = Array.from(textBlocks);

buttonArray.forEach((button, index) => {
    button.addEventListener("click", () => {
      const textBlock = textBlockArray[index];
      if (textBlock.classList.contains("services-open-tab")) {
        textBlock.style.display = "none";
        textBlock.classList.remove("services-open-tab");
      } else {
        textBlock.style.display = "flex";
        textBlock.classList.add("services-open-tab");
      }
  });
});
