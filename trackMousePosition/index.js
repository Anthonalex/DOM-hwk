const xAxis = document.querySelector(".x-axis");
const yAxis = document.querySelector(".y-axis");

window.addEventListener("mousemove", (event) => {
  xAxis.value = event.x;
  yAxis.value = event.y;
});
