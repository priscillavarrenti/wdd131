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


//parte 2 tp

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
//   my additions
  {
    templeName:"Buenos Aires Argentina",
    location:"Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 306599,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4088-thumb.jpg"
  },
  {
    templeName:"Montevideo Uruguay",
    location:"Montevideo, Uruguay",
    dedicated:"2001, March, 18",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18474-main.jpg",
  },
  {
    templeName:"Brasília Brazil",
    location:"Brazília, Brazil",
    dedicated:"2023, September, 17",
    area: 25000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39204-thumb.jpg"
   }
];

const container = document.getElementById("temples-container");
const PageTitle = document.getElementById("page-title");

function renderTemples(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach((t) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const dedicatedDate = new Date(t.dedicated);

        card.innerHTML = `
        <h3>${t.templeName}</h3>
        <p><strong>Location: </strong>${t.location}</p>
        <p><strong>Dedicated: </strong>${t.dedicated}</p>
        <p><strong>Size: </strong>${t.area.toLocaleString()}sq ft</p>
        <img src= "${t.imageUrl}" alt="${t.templeName}" loading = "lazy">
        `;
        container.appendChild(card);
    });
}
renderTemples(temples);

document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        let filtered = [];

        switch (filter) {
            case "all":
                PageTitle.textContent = "Home";
                filtered = temples;
                break;

            case "Old":
                PageTitle.textContent = "Old Temples";
                filtered = temples.filter((t) => new Date (t.dedicated).getFullYear() <1900);
                break;

            case "New":
                PageTitle.textContent = "New Temples";
                filtered = temples.filter(t => new Date (t.dedicated).getFullYear() >2000);
                break;
            case "Large":
                PageTitle.textContent= "Large Temples";
                filtered = temples.filter(t => t.area > 90000);
                break;

            case "Small":
                PageTitle.textContent = "Small Temples";
                filtered = temples.filter(t => t.area <10000);
                break;
        }

        renderTemples(filtered)
    })
})