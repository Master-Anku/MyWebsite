function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
}

let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
mobileMenuBtn.addEventListener("click", toggleMenu);

function showContent(contentId) {
  // Hide all content
  document
    .querySelectorAll(".content div")
    .forEach((div) => (div.style.display = "none"));

  // Show the selected content
  document.getElementById(contentId).style.display = "block";
}

function showContent(contentId) {
  // Hide all main content
  document
    .querySelectorAll(".content > div")
    .forEach((div) => (div.style.display = "none"));

  // Show the selected main content
  document.getElementById(contentId).style.display = "block";
}

function showSubContent(subContentId) {
  // Hide all subcontent
  document
    .querySelectorAll(".content > div")
    .forEach((div) => (div.style.display = "none"));

  // Show the selected subcontent
  document.getElementById(subContentId).style.display = "block";
}
