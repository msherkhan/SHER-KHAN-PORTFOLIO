
const menuButton = document.getElementById("menu-button");
const menuLinks = document.getElementById("menu-links");

menuButton.addEventListener("click", function () {
    menuLinks.classList.toggle("open");
});

document.getElementById("year").textContent = new Date().getFullYear();