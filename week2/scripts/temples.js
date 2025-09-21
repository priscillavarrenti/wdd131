const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});