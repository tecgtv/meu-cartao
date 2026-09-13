(function () {
    const card = document.getElementById("flipCard");
    const button = document.getElementById("flipButton");
    const status = document.getElementById("status");

    function toggleCard() {
        const flipped = card.classList.toggle("is-flipped");

        card.setAttribute("aria-pressed", String(flipped));
        status.textContent = flipped ? "Verso" : "Frente";
        button.textContent = flipped ? "↻ Voltar à frente" : "↻ Virar cartão";
    }

    card.addEventListener("click", toggleCard);

    button.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleCard();
    });

    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleCard();
        }
    });
})();
