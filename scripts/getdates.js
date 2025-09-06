const yearspan = document.getElementById("currentyear");
const currentyear= new Date().getFullYear();
yearSpan.textContent = currentyear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;