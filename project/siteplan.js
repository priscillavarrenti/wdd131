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
        siteName: "Site name",
        name: "Olga's Sweet Secrets",
        description: 
        "Olga is the name of my sweet grandmother who passed away without sharing the little secrets she had for all of her recipes. This site is a tribute to her.",
        category: "blog"
    },

    {
        siteName: "Site purpose",
        description: 
        "the site aims to share recipes for beginners and advanced bakers, accompanied by family stories and tips that inspire tradition and creativity in the kitchen.",
        category: "blog"
    },

    {
        siteName: "Scenarios",
        scenarioOne: "How can I find the recipes for advanced bakers?",
        scenarioTwo: "Where can I find Olga's stories and the history behind each recipe?",
        category: "specials"
    },

    {
        siteName: "Color Schema",
        description: 
        "The color palette is inspired by sweet and warm tones, reflecting the comforting and inviting nature of baking and cooking. --primary-color: #b43434;--second-color: #E180A5;--bg-color: #FFD6F7;--light_bg_color:#f6a4ad;--text-color: #73001F;",
        imageUrl0: "images/ColorSchemapalette.png",
        category: "beginners"
    },

    {
        siteName: "Typography",
        name: "Gravitas One, Dosis and Sans serif",
        description: "Body: Dosis, Sans serif",
        descriptionTwo: "Header h1: Gravitas One, Sans serif",
        category: "advanced"
    },

    {
        siteName: "Wireframes",
        imageUrl: "images/SmallWireframe.webp",
        imageUrlTwo: "images/LargeWireframe.webp",
        category: "advanced"
    },


];

const container = document.getElementById("plan-container");
const pageTitle = document.getElementById("page-title");

function renderPlan(dataArray) {
    container.innerHTML = "";
    dataArray.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("plan-card");
        card.innerHTML = `
            <h3>${item.siteName}</h3>
            ${item.name ? `<p><strong>Name:</strong>${item.name}<p>` : ""}
            ${ item.description ? `<p><strong>Description:</strong>${item.description}</p>` : ""}
            ${ item.descriptionTwo ? `<p><strong>Description 2:</strong>${item.descriptionTwo}</p>` : ""}
            ${ item.scenarioOne ? `<p><strong>Scenario 1:</strong>${item.scenarioOne}</p>` : ""}
            ${ item.scenarioTwo ? `<p><strong>Scenario 2:</strong>${item.scenarioTwo}</p>` : ""}
            ${ item.imageUrl0 ? `<div><strong>${item.name || "Color Palette" }:</strong><br><img src= "${item.imageUrl0}"alt="Color Palette" class="plan-img" loading="lazy"</div>` : ""}
            ${ item.imageUrl ? `<div><strong>${item.name || "Mobile View" }:</strong><br><img src= "${item.imageUrl}"alt="Mobile Wireframe" class="plan-img" loading="lazy"</div>` : ""}
            ${ item.imageUrlTwo ? `<div><strong>${item.name || "Desktop View"}: </strong><br><img src="${item.imageUrlTwo}" alt="Desktop Wireframe" loading="lazy">` : ""}

        `;
        container.appendChild(card);
    });
}

renderPlan(plan);
document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        let filtered = [];
        switch (filter) {
            case "all":
                pageTitle.textContent = "Home";
                filtered = plan;
                break;
            case "blog":
                pageTitle.textContent = "Blog";
                filtered = plan.filter(item => item.category === "blog");
                break;
            case "specials":
                pageTitle.textContent = "Specials";
                filtered = plan.filter(item => item.category === "specials");
                break;
            case "advanced":
                pageTitle.textContent = "Advanced";
                filtered = plan.filter(item => item.category === "advanced");
                break;
        }
        renderPlan(filtered);
    })
});