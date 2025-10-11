const yearSpan = document.getElementById("currentyear");
const currentYear= new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastMod = document.getElementById("lastModified");
lastMod.textContent = document.lastModified;


const reviewCoubtSpan = document.getElementById("reviewCount");

let reviewCount = localStorage.getItem("reviewCount");
if(!reviewCount) {
    reviewCount = 0;
}
else {
    reviewCount = parseInt(reviewCount);
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

reviewCoubtSpan.textContent = reviewCount;