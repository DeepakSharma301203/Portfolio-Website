document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 5px 15px rgba(255, 75, 43, 0.7)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });
    });
});
