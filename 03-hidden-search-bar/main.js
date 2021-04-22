const promisifiedTimeout = (ms) => new Promise((res) => setTimeout(res, ms));

const container = document.querySelector(".container");
const icon = document.querySelector(".icon");
const searchBar = document.querySelector(".search");
const headingElement = document.querySelector(".heading");

icon.addEventListener("click", () => {
  container.classList.toggle("onClick");
  searchBar.focus();
});

const headingText = "idden Search Widget";

const attachLetter = async () => {
  for (let i = 0; i < headingText.length; i++) {
    await promisifiedTimeout(200);
    const letter = headingText[i];
    headingElement.innerHTML += letter;
  }
};

attachLetter();
