// promisified timeout
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// current index
let index = 0;

// elements
const lines = document.querySelectorAll(".line");
const numbers = document.querySelectorAll(".number");

// buttons
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

// event handler for next button
const nextHandler = async () => {
  if (index === 2) next.classList.remove("active");
  if (index === 3) return;

  const line = lines[index];
  index++;

  numbers[index].classList.add("highlight");
  line.classList.add("highlight");

  await sleep(10);
  line.classList.add("showWidth");

  if (index > 0) previous.classList.add("active");
};

// event handler for previous button
const prevHandler = async () => {
  if (index === 1) previous.classList.remove("active");
  if (index === 0) return;

  numbers[index].classList.remove("highlight");
  index--;

  const line = lines[index];
  line.classList.remove("showWidth");

  await sleep(10);
  line.classList.remove("highlight");

  if (index < 3) next.classList.add("active");
};

// attaching the event listeners
next.addEventListener("click", nextHandler);
previous.addEventListener("click", prevHandler);
