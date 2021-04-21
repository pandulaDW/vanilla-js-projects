const container = document.querySelector(".container");
const icon = document.querySelector(".box1");

icon.addEventListener("click", () => {
  if (container.classList.contains("onClick")) {
    container.classList.remove("onClick");
  } else {
    container.classList.add("onClick");
  }
});
