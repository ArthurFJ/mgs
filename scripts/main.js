// Configuración del contador
document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("timer");
    if (!countdown) return; // Salir si el contador está desactivado

    const launchDate = new Date("2024-12-16T14:00:00").getTime();

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


document.addEventListener('DOMContentLoaded', () => {
    // Obtener todas las barras del leaderboard
    const leaderboardBars = document.querySelectorAll('.leaderboard-bar');

    // Convertir las barras a un array y ordenarlas por puntaje (data-score)
    const sortedBars = Array.from(leaderboardBars).sort((a, b) => {
        // Parsear los puntajes de los atributos data-score
        const scoreA = parseInt(a.getAttribute('data-score'));
        const scoreB = parseInt(b.getAttribute('data-score'));
        return scoreB - scoreA; // Orden descendente
    });

    // Seleccionar el contenedor de las barras
    const container = document.querySelector('.leaderboard-container');

    // Limpiar el contenedor antes de insertar las barras ordenadas
    container.innerHTML = '<h2>Leaderboard</h2>';

    // Reinsertar las barras ordenadas en el DOM y actualizar las posiciones, puntajes y animación
    sortedBars.forEach((bar, index) => {
        // Eliminar clases previas relacionadas con la posición
        bar.classList.remove('first-place', 'second-place', 'third-place', 'fourth-place');

        // Asignar clases de posición dinámicamente
        if (index === 0) {
            bar.classList.add('first-place');
        } else if (index === 1) {
            bar.classList.add('second-place');
        } else if (index === 2) {
            bar.classList.add('third-place');
        } else if (index === 3) {
            bar.classList.add('fourth-place');
        }

        // Actualizar el texto de las posiciones (1, 2, 3, ...)
        bar.querySelector('.position').textContent = index + 1;

        // Actualizar el texto de los puntajes
        bar.querySelector('.score').textContent = bar.getAttribute('data-score');

        // Volver a insertar la barra ordenada en el contenedor
        container.appendChild(bar);
    });
});

