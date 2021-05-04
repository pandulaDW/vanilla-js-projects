const boxElements = document.querySelectorAll(".item");

const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxElements.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBoxes);
