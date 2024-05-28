document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("side-menu");
  const closeBtn = document.getElementById("close-btn");

  hamburger.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
  });

  closeBtn.addEventListener("click", function () {
    sideMenu.classList.remove("open");
  });
});
