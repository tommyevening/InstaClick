particlesJS('particles-js', {
    particles: {
        number: {
            value: 120, // Więcej cząsteczek
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#5271ff", "#8c54ff", "#ffd700"] // Niebieski, fioletowy, złoty
        },
        opacity: {
            value: 0.8, // Większa widoczność
            random: false
        },
        size: {
            value: 5, // Większe cząsteczki
            random: true
        },
        move: {
            enable: true,
            speed: 1.5, // Wolniejszy ruch
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    }
});