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

// ===== Klasa zarządzania użytkownikami =====
class UserManager {
    static sampleUsers = [
        {
            id: 1,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (8).jpg',
            cover: 'assets/download (8).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        },
        {
            id: 2,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (7).jpg',
            cover: 'assets/download (7).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        },
        {
            id: 3,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (8).jpg',
            cover: 'assets/download (8).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        },
        {
            id: 4,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (7).jpg',
            cover: 'assets/download (7).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        },
        {
            id: 5,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (8).jpg',
            cover: 'assets/download (8).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        }
        // Więcej użytkowników można dodać tutaj
    ];

    static createUserCard(user) {
        return `
            <div class="user-card" data-aos="fade-up">
                <div class="user-cover">
                    <img src="${user.cover}" alt="Cover">
                </div>
                <div class="user-info">
                    <div class="user-header">
                        <div class="user-avatar">
                            <img src="${user.avatar}" alt="Avatar">
                        </div>
                        <h3>${user.username}</h3>
                    </div>
                    <p class="user-bio">${user.bio}</p>
                    <div class="user-stats">
                        <div class="stat-item">
                            <div class="stat-value">${user.followers}</div>
                            <div class="stat-label">Obserwujących</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${user.posts}</div>
                            <div class="stat-label">Postów</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${user.rating}</div>
                            <div class="stat-label">Ocena</div>
                        </div>
                    </div>
                </div>
                <div class="action-buttons">
                    <button class="btn btn-primary">Obserwuj</button>
                    <button class="btn btn-secondary">Polub</button>
                </div>
            </div>
        `;
    }

    static loadUsers() {
        const usersGrid = document.getElementById('usersGrid');
        this.sampleUsers.forEach(user => {
            usersGrid.innerHTML += this.createUserCard(user);
        });
    }
}

// ===== Klasa zarządzania UI =====
class UIManager {
    static updatePoints(amount) {
        const pointsValue = document.querySelector('.points-value');
        const currentPoints = parseInt(pointsValue.textContent.replace(',', ''));
        const newPoints = currentPoints + amount;
        
        pointsValue.textContent = newPoints.toLocaleString();
        pointsValue.parentElement.classList.add('points-update');
        
        setTimeout(() => {
            pointsValue.parentElement.classList.remove('points-update');
        }, 500);
    }

    static showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, CONFIG.TOAST_DURATION);
    }

    static handleDropdown() {
        const userProfile = document.querySelector('.user-profile');
        const userDropdown = document.querySelector('.user-dropdown');

        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', () => {
            userDropdown.style.display = 'none';
        });
    }

    static handleFilters() {
        document.querySelectorAll('select, input').forEach(element => {
            element.addEventListener('change', () => {
                this.showToast('Filtry zostały zastosowane');
            });
        });
    }

    static handleInfiniteScroll() {
        let isLoading = false;

        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000 && !isLoading) {
                this.loadMoreUsers();
            }
        });
    }

    static loadMoreUsers() {
        // Implementacja ładowania kolejnych użytkowników
    }
}

// ===== Inicjalizacja aplikacji =====
document.addEventListener('DOMContentLoaded', () => {
    UserManager.loadUsers();
    UIManager.handleDropdown();
    UIManager.handleFilters();
    UIManager.handleInfiniteScroll();

    // Obsługa przycisków w kartach użytkowników
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const action = e.target.textContent.toLowerCase();
            
            if (action === 'obserwuj') {
                UIManager.updatePoints(CONFIG.POINTS.FOLLOW);
                UIManager.showToast('Rozpoczęto obserwowanie użytkownika! +100 punktów');
                e.target.style.backgroundColor = '#2ecc71';
                e.target.textContent = 'Obserwujesz';
            } else if (action === 'polub') {
                UIManager.updatePoints(CONFIG.POINTS.LIKE);
                UIManager.showToast('Polubiono profil! +50 punktów');
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
                e.target.textContent = 'Polubiono';
            }
        }
    });
});


particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Liczba cząsteczek
            density: {
                enable: true,
                value_area: 800 // Gęstość cząsteczek
            }
        },
        color: {
            value: "#00d4ff" // Kolor cząsteczek
        },
        shape: {
            type: "circle", // Kształt cząsteczek
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#6c63ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse" // Efekt odpychania cząsteczek
            },
            onclick: {
                enable: true,
                mode: "push" // Dodawanie cząsteczek po kliknięciu
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('navItems');

    hamburger.addEventListener('click', () => {
        navItems.classList.toggle('mobile'); // Dodaj/usuń klasę "mobile"
        navItems.classList.toggle('hidden'); // Ukryj/pokaż menu
    });
});

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('mobile');
    navItems.classList.toggle('hidden');
    hamburger.innerHTML = navItems.classList.contains('mobile') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});