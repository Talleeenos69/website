const hoverText = document.getElementById("hover-text");
const hoverImg = document.querySelector(".hover-img");

hoverText.addEventListener("mousemove", (e) => {
  hoverImg.style.display = "block";
  hoverImg.style.left = e.pageX + "px";
  hoverImg.style.top = e.pageY + "px";
});

hoverText.addEventListener("mouseout", () => {
  hoverImg.style.display = "none";
});
