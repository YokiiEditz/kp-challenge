var menubtn = document.querySelector(".menu-btn");
var nav = document.querySelector(".navbar");

menubtn.addEventListener("click", () => {
  nav.classList.toggle("visible");
});
