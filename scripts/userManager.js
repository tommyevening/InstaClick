// userManager.js
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
        },
        {
            id: 6,
            username: '@travel_lover',
            bio: '✈️ Podróżnik | 📸 Fotograf | 🌍 30 krajów',
            avatar: 'assets/download (7).jpg',
            cover: 'assets/download (7).jpg',
            followers: '1.2k',
            posts: '500',
            rating: '4.8',
            category: 'travel'
        }
        
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

document.addEventListener('DOMContentLoaded', () => {
    UserManager.loadUsers();
});