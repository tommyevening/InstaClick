document.addEventListener('DOMContentLoaded', () => {
    const userProfile = document.querySelector('.user-profile');
    const userDropdown = document.querySelector('.user-dropdown');
    const chevronIcon = userProfile.querySelector('.fa-chevron-down');

    if (userProfile && userDropdown) {
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
            
            // Dodanie animacji dla ikony
            chevronIcon.style.transform = userDropdown.classList.contains('active') 
                ? 'rotate(180deg)' 
                : 'rotate(0)';
            chevronIcon.style.transition = 'transform 0.3s ease';
        });

        // Zamykanie dropdown menu przy kliknięciu poza nim
        document.addEventListener('click', () => {
            if (userDropdown.classList.contains('active')) {
                userDropdown.classList.remove('active');
                chevronIcon.style.transform = 'rotate(0)';
            }
        });
    }
});