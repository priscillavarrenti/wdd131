const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    menuButton.textContent = navMenu.classList.contains("open") ? "✖" : "☰";
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;



//======== Recipes ==========
if (document.querySelector(".recipes-section")) {
    const recipes = [
        {
            name: "Classic Chocolate Cake",
            level: "beginner",
            description: "A moist and fluffy chocolate cake, perfect for any occassion.",
            image: "images/chocoCake.jpg"
        },
        {
            name: "Vanilla Dream Cake",
            level: "beginner",
            description: "Simple and sweet vanilla cake, easy for beginners.",
            image: "images/chocoCake.jpg"
        },
        {
            name: "Freanch Macarons",
            level: "advanced",
            description: "Master this tricky yet amazing dessert.",
            image: "images/chocoCake.jpg"
        },
        {
            name: "White Chocolate Ganache",
            level: "advanced",
            description: "Perfect for frosting or cake filling",
            image: "images/chocoCake.jpg"
        }
    ];

    const grid = document.getElementById("recipe-grid");
    const buttons = document.querySelectorAll(".filter-bar button");

    function renderRecipes(filtered) {
        grid.innerHTML = "";
        filtered.forEach(recipe => {
            const card= document.createElement("div");
            card.classList.add("plan-card");
            card.innerHTML = `
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <img src="${recipe.image}" alt="${recipe.name}" loading="lazy">
            `;
            grid.appendChild(card);
        });
    }
    renderRecipes(recipes);

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const level = btn.dataset.level;
            const filtered = level === "all"
                ? recipes
                : recipes.filter(recipe => recipe.level ===level);
            
            renderRecipes(filtered);

        });
    });

}


// ======== Contact ========

if (document.getElementById("contact-form-form")) {
    const contactForm = document.getElementById("contact-form-form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const data = {
            name,
            email,
            message,
            submittedAt: new Date().toISOString()
        };
        localStorage.setItem("contactSubmission", JSON.stringify(data));
        alert("Thanks for contacting us! We'll get back to you soon.");
        contactForm.reset();
    });
    document.getElementById("contact-form").style.display = "block";
}

