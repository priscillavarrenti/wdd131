const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const plan = [
  {
    name: "Olga's Sweet Secrets",
    description: "This site is a tribute to my grandmother and her delicious recipes.",
    category: "home"
  },
  // Beginners
  {
    name: "Popular Recipe: Choco Cake",
    description: "This classic chocolate cake was everyone's favorite at my family gatherings. Soft, moist, and unforgettable.",
    category: "beginners",
    imageUrl: "images/chocolateCake.jpg"
  },
  {
    name: "Popular Recipe: Vanilla Cake",
    description: "This classic vanilla cake is light, fluffy, and easy to make.",
    category: "beginners",
    imageUrl: "images/vanilla-cake.jpg"
  },
  // Advanced
  {
    name: "Chocolate Lava Cake",
    description: "Advanced dessert with molten center. Not for the faint of heart!",
    category: "advanced",
    imageUrl: "images/lava-cake.jpg"
  },
  {
    name: "Macarons",
    description: "Master the art of French macarons with this detailed guide.",
    category: "advanced",
    imageUrl: "images/macarons.jpg"
  },
  // Blog
  {
    name: "Why Olga never wrote anything down",
    description: "A blog post about how recipes were passed down by memory.",
    category: "blog"
  },
  // Contact
  {
    name: "Contact Us",
    description: "Have questions or want to share a family recipe? Fill out the form below!",
    category: "contact"
  }
];


const container = document.getElementById("plan-container");
const pageTitle = document.getElementById("page-title");
const hero = document.getElementById("hero");
const contactFormSection = document.getElementById("contact-form");


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

document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    
    hero.style.display = "none";
    contactFormSection.style.display = "none";
    container.innerHTML= "";

    switch (filter) {
      case "all":
        pageTitle.textContent = "Home";
        filtered = plan.filter(item => item.category === "home");
        hero.style.display = "block";
        break;
      case "beginners":
        pageTitle.textContent = "Beginners";
        filtered = plan.filter(item => item.category === "beginners");
        break;
      case "advanced":
        pageTitle.textContent = "Advanced";
        renderPlan(plan.filter(item => item.category === "advanced"));
        break;
      case "blog":
        pageTitle.textContent = "Blog";
        renderPlan(plan.filter(item => item.category === "blog"));
        break;
      case "contact":
        pageTitle.textContent = "Contact Us";
        contactFormSection.style.display = "block";
        break;
      default:
        pageTitle.textContent = "Home";
        renderPlan(plan.filter(item => item.category === "home"));
        hero.style.display = "block";
        break;
    }
  });
});

document.addEventListener("submit", (e) => {
  if (e.target.id === "contact-form-form") {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const contactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem("contactForm", JSON.stringify(contactData));
    alert("Message saved! Thank you for contacting us.");
    e.target.reset();
  }
});


renderPlan(plan.filter(item => item.category === "home"));
hero.style.display = "block";
contactFormSection.style.display = "none";
