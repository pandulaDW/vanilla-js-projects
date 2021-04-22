const container = document.querySelector(".container");
const icon = document.querySelector(".icon");
const searchBar = document.querySelector(".search");

icon.addEventListener("click", () => {
  container.classList.toggle("onClick");
  searchBar.focus();
});
