const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {
  if (heart.getAttribute("fill") === "none") {
    heart.setAttribute("fill", "red");
    console.log("asdS");
  } else {
    heart.setAttribute("fill", "none");
  }
});
