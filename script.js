// Inicjalizacja AOS
AOS.init({
    duration: 800,
    offset: 100,
    once: true
});

// Dane przykładowych użytkowników
const sampleUsers = [
    {
        id: 1,
        username: '@travel_lover',
        bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
        avatar: 'https://source.unsplash.com/random/100x100?portrait=1',
        cover: 'https://source.unsplash.com/random/400x150?landscape=1',
        followers: '1.2k',
        posts: '500',
        rating: '4.8',
        category: 'travel'
    },
    // Dodaj więcej przykładowych użytkowników
];

// Funkcja generująca kartę użytkownika
function createUserCard(user) {
    return `
        <div class="user-card" data-aos="fade-up">
            <div class="user-cover">
                <img src="${user.cover}" alt="Cover">
                <div class="user-avatar">
                    <img src="${user.avatar}" alt="Avatar">
                </div>
            </div>
            <div class="user-info">
                <h3>${user.username}</h3>
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

// Funkcja ładująca użytkowników
function loadUsers() {
    const usersGrid = document.getElementById('usersGrid');
    sampleUsers.forEach(user => {
        usersGrid.innerHTML += createUserCard(user);
    });
}

// Funkcja aktualizująca punkty
function updatePoints(amount) {
    const pointsValue = document.querySelector('.points-value');
    const currentPoints = parseInt(pointsValue.textContent.replace(',', ''));
    const newPoints = currentPoints + amount;
    
    pointsValue.textContent = newPoints.toLocaleString();
    pointsValue.parentElement.classList.add('points-update');
    
    setTimeout(() => {
        pointsValue.parentElement.classList.remove('points-update');
    }, 500);
}

// Funkcja pokazująca toast
function showToast(message, type = 'success') {
    const toast = document.querySelector('.toast');
    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.className = 'toast';
    if (type === 'error') toast.classList.add('error');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Obsługa dropdown menu
const userProfile = document.querySelector('.user-profile');
const userDropdown = document.querySelector('.user-dropdown');

userProfile.addEventListener('click', (e) => {
    e.stopPropagation();
    userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', () => {
    userDropdown.style.display = 'none';
});

// Obsługa filtrów
document.querySelectorAll('select, input').forEach(element => {
    element.addEventListener('change', function() {
        // Tutaj dodaj logikę filtrowania
        showToast('Filtry zostały zastosowane');
    });
});

// Infinite scroll
let isLoading = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000 && !isLoading) {
        loadMoreUsers();
    }
});

function loadMoreUsers() {
    isLoading = true;
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
    
    // Symulacja ładowania nowych użytkowników
    setTimeout(() => {
        // Tutaj dodaj kod ładowania nowych użytkowników
        loader.style.display = 'none';
        isLoading = false;
    }, 1500);
}

// Inicjalizacja strony
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    
    // Obsługa przycisków w kartach użytkowników
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const action = e.target.textContent.toLowerCase();
            
            if (action === 'obserwuj') {
                updatePoints(100);
                showToast('Rozpoczęto obserwowanie użytkownika! +100 punktów');
                e.target.style.backgroundColor = '#2ecc71';
                e.target.textContent = 'Obserwujesz';
            } else if (action === 'polub') {
                updatePoints(50);
                showToast('Polubiono profil! +50 punktów');
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
                e.target.textContent = 'Polubiono';
            }
        }
    });
});