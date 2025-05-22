// navigation.js - toggle menu for small screens

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  const nav = document.getElementById("nav");

  menuButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  });

  // Close menu when a link is clicked (optional usability enhancement)
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 640) {
        nav.style.display = "none";
      }
    });
  });
});
