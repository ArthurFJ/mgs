// Configuración del contador
document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("timer");
    if (!countdown) return;

    const launchDate = new Date("2024-12-17T14:00:00").getTime();

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


// Logro
document.addEventListener("DOMContentLoaded", () => {
    const animationContainer = document.getElementById("logro-animation-container");
    const animations = [
        { path: "jsons/animation_0.json", duration: 4000 },
        { path: "jsons/animation_00.json", duration: 2200 },
        { path: "jsons/animation_000.json", duration: 5500 },
        { path: "jsons/animation_0000.json", duration: 6000 },
    ];
    let currentAnimation = 0;

    const loadAnimation = (animation) => {
        animationContainer.innerHTML = "";

        lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: animation.path,
        });
    };

    const startAnimationLoop = () => {
        const animation = animations[currentAnimation];
        loadAnimation(animation);

        setTimeout(() => {
            currentAnimation = (currentAnimation + 1) % animations.length;
            startAnimationLoop();
        }, animation.duration);
    };

    startAnimationLoop();
});



// Animaciones de "Spoilers"
document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBars = document.querySelectorAll('.leaderboard-bar');
    const spoiler = document.getElementById('spoiler');
    const closeButton = document.getElementById('close-spoiler');
    const animationContainer = document.getElementById('animation-container');

    const animations = [
        'jsons/animation_1.json',
        'jsons/animation_2.json',
        'jsons/animation_4.json',
        'jsons/animation_3.json',
    ];

    leaderboardBars.forEach((bar, index) => {
        bar.addEventListener('click', () => {
            spoiler.style.display = 'flex';

            lottie.loadAnimation({
                container: animationContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: animations[index]
            });
        });
    });

    closeButton.addEventListener('click', () => {
        spoiler.style.display = 'none';
        animationContainer.innerHTML = '';
    });
});


// Actualizar orden de puntajes
document.addEventListener('DOMContentLoaded', () => {
    const leaderboardBars = document.querySelectorAll('.leaderboard-bar');

    const sortedBars = Array.from(leaderboardBars).sort((a, b) => {
        const scoreA = parseInt(a.getAttribute('data-score'));
        const scoreB = parseInt(b.getAttribute('data-score'));
        return scoreB - scoreA;
    });

    const container = document.querySelector('.leaderboard-container');

    sortedBars.forEach((bar, index) => {
        bar.classList.remove('first-place', 'second-place', 'third-place', 'fourth-place');

        if (index === 0) {
            bar.classList.add('first-place');
        } else if (index === 1) {
            bar.classList.add('second-place');
        } else if (index === 2) {
            bar.classList.add('third-place');
        } else if (index === 3) {
            bar.classList.add('fourth-place');
        }

        bar.querySelector('.position').textContent = index + 1;

        bar.querySelector('.score').textContent = bar.getAttribute('data-score');

        container.appendChild(bar);
    });
});

