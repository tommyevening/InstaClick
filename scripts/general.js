// ===== Konfiguracja =====
const CONFIG = {
    POINTS: {
        FOLLOW: 100,
        LIKE: 50
    },
    ANIMATION: {
        DURATION: 800,
        OFFSET: 100
    },
    TOAST_DURATION: 3000
};

// ===== Inicjalizacja AOS =====
AOS.init({
    duration: CONFIG.ANIMATION.DURATION,
    offset: CONFIG.ANIMATION.OFFSET,
    once: true
});