// hamburgerMenu.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('navItems');

    if (hamburger && navItems) {
        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('mobile');
            hamburger.innerHTML = navItems.classList.contains('mobile') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
});