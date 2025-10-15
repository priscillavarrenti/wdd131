document.addEventListener("DOMContentLoaded"), () => {
    const grid=document.getElementById("recipe-grid");
    const buttons=document.querySelectorAll(".filter-bar button");

    function renderRecipes(level="all") {
        const filtered=
        level==="all"
        ? recipesData
        : recipesData.filter((r) => r.level === level);

    grid.innerHTML=filtered
    .map(
        (r) =>`
        <article class
        `
    )
    }
}