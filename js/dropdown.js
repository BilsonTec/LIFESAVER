// @ts-nocheck

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  menuButton.addEventListener("click", function () {
    // Ajoute ou enlève la classe active pour l'animation
    dropdownMenu.classList.toggle("active");
  });

  // Fermer le menu si on clique ailleurs sur la page
  document.addEventListener("click", function (event) {
    if (
      !menuButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.remove("active");
    }
  });
});
