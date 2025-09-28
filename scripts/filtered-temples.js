const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;


const temples =[];

createTempleCard();

function createTempleCard() {
    temples.forEach(temple => {
        let card - document.createElement("section");
        let name - document.createElement("h3");
        let location - document.createElement("p");
        let dedication - document.createElement("p");
        let area - document.createElement("p");
        let img - document.elementFromPoint("img"); 


        name.textContent = temple.templeName;
        location.innerHTML = '<span class="label"> Location:</s>'
    })
}