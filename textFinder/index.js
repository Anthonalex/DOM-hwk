const first = document.querySelector(".first-paragraph");
const second = document.querySelector(".second-paragraph");
const btn = document.querySelector(".highlight-btn");

btn.addEventListener("click", () => {
  first.innerHTML = first.innerText
    .split(" ")
    .map((el) => {
      if (el.length > 8) {
        return `<mark>${el}</mark>`;
      }
      if (el === "?") {
        return el.replace("?", "🤔");
      }
      if (el === "!") {
        return el.replace("!", "😲");
      } else {
        return el;
      }
    })
    .join(" ");

  second.innerHTML = second.innerText
    .split(" ")
    .map((el) => {
      if (el.length > 8) {
        return `<mark>${el}</mark>`;
      }
      if (el === "?") {
        return el.replace("?", "🤔");
      }
      if (el === "!") {
        return el.replace("!", "😲");
      } else {
        return el;
      }
    })
    .join(" ");
});
