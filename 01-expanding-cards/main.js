const panels = document.querySelectorAll(".img-text-container");

const clickHandler = (currentPanel) => {
  // variable to check if current panel had been active
  const currentPanelActive = false;

  // remove active handlers from the panels
  panels.forEach((panel) => {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
      if (panel.id === currentPanel.id) currentPanelActive = true;
    }
  });

  // if current panel had been active, return
  if (currentPanelActive) {
    return;
  }

  // adding the active
  currentPanel.classList.add("active");
};

panels.forEach((panel, idx) => {
  panel.id = idx;
  panel.addEventListener("click", () => clickHandler(panel));
});
