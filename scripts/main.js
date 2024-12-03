// Configuración del contador
document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("timer");
    if (!countdown) return; // Salir si el contador está desactivado

    const launchDate = new Date("2024-12-13T20:00:00").getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        if (timeLeft < 0) {
            countdown.innerHTML = "¡El proyecto ya está disponible!";
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);
});

