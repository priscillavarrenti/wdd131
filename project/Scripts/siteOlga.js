// ===========================
// Menu Toggle
// ===========================
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

// ===========================
// Footer Info
// ===========================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===========================
// Site Content (Recetas, Blog, etc.)
// ===========================
const plan = [
  {
    name: "Olga's Sweet Secrets",
    description: "This site is a tribute to my grandmother and her delicious recipes.",
    category: "home"
  },
  {
    name: "Easy Vanilla Cake",
    description: "A beginner-friendly recipe that’s soft, fluffy, and delicious.",
    category: "beginners",
    imageUrl: "images/vanilla-cake.jpg"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Advanced dessert with molten center. Not for the faint of heart!",
    category: "advanced",
    imageUrl: "images/lava-cake.jpg"
  },
  {
    name: "Why Olga never wrote anything down",
    description: "A blog post about how recipes were passed down by memory.",
    category: "blog"
  },
  {
    name: "Pumpkin Pie – Fall Special",
    description: "Limited-time fall special recipe. Only until November!",
    category: "specials",
    imageUrl: "images/pumpkin-pie.jpg"
  }
];

// ===========================
// Render Cards
// ===========================
const container = document.getElementById("plan-container");
const pageTitle = document.getElementById("page-title");
const hero = document.getElementById("hero");

function renderPlan(dataArray) {
  container.innerHTML = "";
  dataArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("plan-card");

    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name}" loading="lazy">` : ""}
    `;

    container.appendChild(card);
  });
}

// ===========================
// Navigation Filter Buttons
// ===========================
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    let filtered = [];

    switch (filter) {
      case "all":
        pageTitle.textContent = "Home";
        filtered = plan.filter(item => item.category === "home");
        hero.style.display = "block";
        break;
      case "beginners":
        pageTitle.textContent = "Beginners";
        filtered = plan.filter(item => item.category === "beginners");
        hero.style.display = "none";
        break;
      case "advanced":
        pageTitle.textContent = "Advanced";
        filtered = plan.filter(item => item.category === "advanced");
        hero.style.display = "none";
        break;
      case "blog":
        pageTitle.textContent = "Blog";
        filtered = plan.filter(item => item.category === "blog");
        hero.style.display = "none";
        break;
      case "specials":
        pageTitle.textContent = "Specials";
        filtered = plan.filter(item => item.category === "specials");
        hero.style.display = "none";
        break;
      default:
        pageTitle.textContent = "Home";
        filtered = plan.filter(item => item.category === "home");
        hero.style.display = "block";
        break;
    }

    renderPlan(filtered);
  });
});

// ===========================
// Initial Load (Home Page)
// ===========================
renderPlan(plan.filter(item => item.category === "home"));
hero.style.display = "block";
