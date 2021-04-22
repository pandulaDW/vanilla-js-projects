const promisifiedTimeout = (ms) => new Promise((res) => setTimeout(res, ms));

const bgWrapper = document.querySelector(".bgWrapper");
const number = document.querySelector(".number");
const text = document.querySelector(".text");

const revealBackground = async () => {
  let count = 0;

  for (let i = 1; i > 0; i -= 0.01) {
    await promisifiedTimeout(50);
    bgWrapper.style.opacity = i;
    count++;
    number.innerHTML = count;
    text.style.opacity = i;
  }
};

revealBackground();
