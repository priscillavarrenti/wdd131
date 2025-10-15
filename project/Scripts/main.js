// ===== Basic Info =====
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===== Menu Toggle =====
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✖" : "☰";
});

// ===== Recipes Data =====
const recipes = [
  {
    id: 1,
    title: "Chocolate Cake",
    desc: "Classic, moist, and rich chocolate cake.",
    image: "images/choco-medium.jpg",
    category: "beginners"
  },
  {
    id: 2,
    title: "Strawberry Tart",
    desc: "Fresh strawberries and cream on a crisp tart shell.",
    image: "images/choco-small.jpg",
    category: "advanced"
  }
];

// ===== Render Recipes =====
function createRecipeCard(recipe) {
  return `
    <article class="recipe-card" data-id="${recipe.id}">
      <h3>${recipe.title}</h3>
      <p>${recipe.desc}</p>
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
      <button class="fav-btn" aria-label="Add ${recipe.title} to favorites">❤</button>
    </article>
  `;
}

function renderRecipes(list) {
  const container = document.getElementById("plan-container");
  if (!container) return;
  container.innerHTML = list.map(createRecipeCard).join("");
  attachFavButtons();
  markFavButtons();
}

// ===== Favorites in localStorage =====
function loadFavorites() {
  return JSON.parse(localStorage.getItem("olga-favs")) || [];
}

function saveFavorites(favs) {
  localStorage.setItem("olga-favs", JSON.stringify(favs));
}

function attachFavButtons() {
  document.querySelectorAll(".fav-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = parseInt(e.target.closest(".recipe-card").dataset.id);
      let favs = loadFavorites();
      if (favs.includes(id)) {
        favs = favs.filter(f => f !== id);
      } else {
        favs.push(id);
      }
      saveFavorites(favs);
      markFavButtons();
      renderFavorites();
    });
  });
}

function markFavButtons() {
  const favs = loadFavorites();
  document.querySelectorAll(".recipe-card").forEach(card => {
    const id = parseInt(card.dataset.id);
    const btn = card.querySelector(".fav-btn");
    if (favs.includes(id)) btn.classList.add("is-fav");
    else btn.classList.remove("is-fav");
  });
}

// ===== Render Favorites on Home =====
function renderFavorites() {
  const container = document.getElementById("fav-container");
  if (!container) return;
  const favs = loadFavorites();
  const favItems = recipes.filter(r => favs.includes(r.id));
  container.innerHTML = favItems.length
    ? favItems.map(r => `<p>${r.title}</p>`).join("")
    : "<p>No favorites yet.</p>";
}

// ===== Contact Form Validation =====
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const feedback = document.getElementById("formFeedback");

  let errors = [];
  if (name.length < 2) errors.push("Name must be at least 2 characters.");
  if (!/^\S+@\S+\.\S+$/.test(email)) errors.push("Invalid email.");
  if (message.length < 10) errors.push("Message must be at least 10 characters.");

  if (errors.length) {
    feedback.textContent = errors.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = `Thank you, ${name}! Your message has been received.`;
    feedback.style.color = "green";
    localStorage.setItem("olga-last-contact", JSON.stringify({ name, email, message }));
    form.reset();
  }
});

// ===== Run renderers =====
renderRecipes(recipes);
renderFavorites();
