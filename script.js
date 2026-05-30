window.addEventListener("pageshow", () => {

    const animatedElements = document.querySelectorAll(
        ".intro-line, .bride-reveal, .ampersand-reveal, .groom-reveal, .details-1, .details-2, .details-3"
    );

    animatedElements.forEach(el => {
        el.style.animation = "none";

        void el.offsetWidth; // force reflow

        el.style.animation = "";
    });

});


    // =========================
// FALLING FLOWER PETALS
// =========================

const petalImages = [
    "assets/Petals/rose-red.png",
    "assets/Petals/rose-pink.png",
    "assets/Petals/marigold.png"
];

function createPetal() {

    const container = document.getElementById("petal-container");

    if (!container) return;

    const petal = document.createElement("img");

    const petalImages = [
        "assets/Petals/rose-red.png",
        "assets/Petals/rose-pink.png",
        "assets/Petals/marigold.png"
    ];

    petal.src =
        petalImages[Math.floor(Math.random() * petalImages.length)];

    petal.classList.add("flower-petal");

    petal.style.left = Math.random() * 100 + "%";

    
    petal.style.width =
(8 + Math.random() * 4) + "px";

    petal.style.animation =
        `petalFall ${8 + Math.random() * 4}s linear forwards`;

    container.appendChild(petal);

    petal.onload = () => {
        console.log("Loaded:", petal.src);
    };

    petal.onerror = () => {
        console.error("Image Missing:", petal.src);
    };

    setTimeout(() => {
        petal.remove();
    }, 12000);
}
    // Burst petals helper for form submission
    function burstPetals() {
        const petalColors = ['#D4AF37', '#FF8C00', '#FFA500', '#FFD700', '#FF7F50'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'marigold-petal';
                const color = petalColors[Math.floor(Math.random() * petalColors.length)];
                petal.style.backgroundColor = color;
                
                // Blast in 360 direction
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 150 + 50;
                const xDrift = Math.cos(angle) * distance + 'px';
                const yDrift = Math.sin(angle) * distance + 'px';
                const rotation = (Math.random() * 360) + 'deg';
                
                petal.style.setProperty('--x-drift', xDrift);
                petal.style.setProperty('--y-drift', yDrift);
                petal.style.setProperty('--rotation', rotation);

                petal.style.left = centerX + 'px';
                petal.style.top = centerY + 'px';

                document.body.appendChild(petal);

                setTimeout(() => {
                    petal.remove();
                }, 1200);
        }, i * 30);
        }
    }

// =========================
// TEMPLE DOOR OPENING
// =========================

function openTempleDoors() {

    const music = document.getElementById("wedding-music");
    const overlay = document.getElementById("door-overlay");
    const trigger = document.getElementById("door-trigger");
    const hero = document.getElementById("invitation-hero");

    if (music) {
        music.currentTime = 328;
        music.volume = 0.2;

        music.play().catch(err => {
            console.log("Music blocked:", err);
        });
    }

    if (trigger) {
        trigger.style.opacity = "0";
        trigger.style.pointerEvents = "none";
    }

    if (overlay) {

        overlay.classList.add("open");

        setTimeout(() => {

            overlay.style.opacity = "0";

            setTimeout(() => {
                overlay.style.display = "none";
            }, 1000);

        }, 2500);
    }

    if (hero) {
        setTimeout(() => {
            hero.classList.add("animate");
        }, 2500);
    }

    // Flower Petals Start
    for (let i = 0; i < 20; i++) {
        setTimeout(createPetal, i * 200);
    }

    window.petalInterval =
    setInterval(createPetal, 400);
}
document.addEventListener('DOMContentLoaded', () => {

    // =========================
    // MUSIC CONTROLS
    // =========================

const music = document.getElementById("wedding-music");

const playPauseBtn = document.getElementById("music-play-pause");
const muteBtn = document.getElementById("music-mute");
const volumeSlider = document.getElementById("music-volume");

if (playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            playPauseBtn.innerHTML = "❚❚";
        } else {
            music.pause();
            playPauseBtn.innerHTML = "▶";
        }

    });
}

if (muteBtn) {
    muteBtn.addEventListener("click", () => {

        music.muted = !music.muted;
        muteBtn.innerHTML = music.muted ? "🔇" : "🔊";

    });
}

if (volumeSlider) {
    volumeSlider.addEventListener("input", () => {

        music.volume = parseFloat(volumeSlider.value);

    });
}

    // --- 2. Mobile Navigation Menu ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDropdown = document.getElementById('mobile-dropdown');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

   if (mobileMenuBtn && mobileDropdown) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileDropdown.classList.toggle('hidden');
    });
}

    if (mobileNavLinks.length) {
mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDropdown.classList.add('hidden');
        });
    });
}

    
    // --- 3. Auspicious Countdown Timer ---
    // Wedding Date: August 30, 2026 at 09:30 AM (IST)
    const weddingDate = new Date('June 19, 2026 12:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = days.toString().padStart(2, '0');
        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown(); // Run immediately
    const countdownInterval = setInterval(updateCountdown, 1000);

});