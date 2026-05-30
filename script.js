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
function openTempleDoors() {
    
    const music = document.getElementById("wedding-music");

    music.currentTime = 328;
    music.volume = 0.2;

    music.play().catch(err => {
        console.log("Music blocked:", err);
    });

    const overlay = document.getElementById("door-overlay");
    const trigger = document.getElementById("door-trigger");

    trigger.style.opacity = "0";
    trigger.style.pointerEvents = "none";

    overlay.classList.add("open");

    // Remove overlay after door animation finishes
    setTimeout(() => {
        overlay.style.opacity = "0";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 1000);
    }, 2500);

    setTimeout(() => {
        document
            .getElementById("invitation-hero")
            .classList.add("animate");
    }, 2500);
    setInterval(createPetal, 1400);
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


    // --- 4. Interactive RSVP Form ---
    const rsvpForm = document.getElementById('rsvp-form');
    const attendanceRadios = document.getElementsByName('attendance');
    const additionalRsvpDetails = document.getElementById('additional-rsvp-details');
    const rsvpSuccessOverlay = document.getElementById('rsvp-success-overlay');
    const rsvpResetBtn = document.getElementById('rsvp-reset-btn');

    // Toggle details (food pref and guest count) if declining
    attendanceRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'declined') {
                additionalRsvpDetails.style.opacity = '0.3';
                additionalRsvpDetails.style.pointerEvents = 'none';
                document.getElementById('guest-count').disabled = true;
                document.getElementById('food-pref').disabled = true;
            } else {
                additionalRsvpDetails.style.opacity = '1';
                additionalRsvpDetails.style.pointerEvents = 'auto';
                document.getElementById('guest-count').disabled = false;
                document.getElementById('food-pref').disabled = false;
            }
        });
    });

    
    
const petalContainer = document.getElementById("petal-container");

const petalImages = [
    "assets/Petals/rose-red.png",
    "assets/Petals/rose-pink.png",
    "assets/Petals/marigold.png"
];

function createPetal() {

    const petal = document.createElement("img");

    petal.src = petalImages[
        Math.floor(Math.random() * petalImages.length)
    ];

    petal.className = "flower-petal";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.width =
        (25 + Math.random() * 20) + "px";

    petal.style.animation =
        `petalFall ${8 + Math.random() * 6}s linear forwards`;

    document.getElementById("petal-container")
        .appendChild(petal);

    petal.onerror = () => {
        console.log("IMAGE NOT FOUND:", petal.src);
    };

    setTimeout(() => {
        petal.remove();
    }, 15000);
}
