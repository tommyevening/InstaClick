// userManager.js
class UserManager {
    static sampleUsers = [
        {
            id: 1,
            username: 'Julia Żugaj',
            bio: '💄 Beauty & Lifestyle | 🎥 YouTube 2M sub | ✨ TikTok 1.5M',
            avatar: 'assets/OIP.jpg',
            cover: 'assets/OIP.jpg',
            followers: '2.3M',
            posts: '800',
            rating: '4.9',
            category: 'lifestyle'
        },
        {
            id: 2,
            username: 'Karol "Friz" Wiśniewski',
            bio: '🎮 Gaming & Vlogi | 🚀 Ekipa | 💪 YouTube 4.8M sub',
            avatar: 'assets/friz.jpg',
            cover: 'assets/friz.jpg',
            followers: '3.8M',
            posts: '1.2K',
            rating: '4.7',
            category: 'gaming'
        },
        {
            id: 3,
            username: 'Marcin Dubiel',
            bio: '🎥 Vloger | 🎮 Gaming | 🎯 YouTube 2.5M sub',
            avatar: 'assets/OIP (2).jpg',
            cover: 'assets/OIP (2).jpg',
            followers: '2.1M',
            posts: '950',
            rating: '4.8',
            category: 'entertainment'
        },
        {
            id: 4,
            username: 'Weronika Sowa (Wersow)',
            bio: '💄 Beauty & Lifestyle | 🎵 Muzyka | ⭐️ Ekipa',
            avatar: 'assets/wersow.jpg',
            cover: 'assets/wersow.jpg',
            followers: '2.5M',
            posts: '700',
            rating: '4.6',
            category: 'lifestyle'
        },
        {
            id: 5,
            username: 'Kacper Blonsky',
            bio: '📱 Tech Reviewer | 💻 Gadgets | 🎥 YouTube 1.2M sub',
            avatar: 'assets/kacper.jpg',
            cover: 'assets/kacper.jpg',
            followers: '1.9M',
            posts: '500',
            rating: '4.7',
            category: 'tech'
        },
        {
            id: 6,
            username: 'Mikołaj "Konopskyy" Tylko',
            bio: '🎬 Commentary | 🎯 Drama | 💡 Śledztwa',
            avatar: 'assets/OIP (5).jpg',
            cover: 'assets/OIP (5).jpg',
            followers: '1.7M',
            posts: '300',
            rating: '4.8',
            category: 'commentary'
        },
        {
            id: 7,
            username: 'Natalia Karczmarczyk (Natsu)',
            bio: '📱 Lifestyle | 🎵 TikTok 3M | 💄 Beauty',
            avatar: 'assets/OIP (6).jpg',
            cover: 'assets/OIP (6).jpg',
            followers: '3.5M',
            posts: '1.5k',
            rating: '4.9',
            category: 'lifestyle'
        },
        {
            id: 8,
            username: 'Krzysztof Gonciarz',
            bio: '🎥 Filmmaker | 🗾 Japan Vlogs | 📚 Autor',
            avatar: 'assets/OIP (7).jpg',
            cover: 'assets/OIP (7).jpg',
            followers: '1.8M',
            posts: '750',
            rating: '4.6',
            category: 'travel'
        },
        {
            id: 9,
            username: 'Marta Rentel (Marti Renti)',
            bio: '💃 Lifestyle | 🎵 TikTok Star | 🌟 Model',
            avatar: 'assets/OIP (8).jpg',
            cover: 'assets/OIP (8).jpg',
            followers: '1.6M',
            posts: '400',
            rating: '4.5',
            category: 'lifestyle'
        },
        {
            id: 10,
            username: 'Wojtek Gola',
            bio: '🥊 FAME MMA | 💪 Fitness | 🎥 Vloger',
            avatar: 'assets/OIP (9).jpg',
            cover: 'assets/OIP (9).jpg',
            followers: '2.4M',
            posts: '850',
            rating: '4.7',
            category: 'sport'
        },
        {
            id: 11,
            username: 'Angelika Mucha (LittleMooonster96)',
            bio: '🎮 Gaming | 💄 Beauty | 🎥 YouTube 2M',
            avatar: 'assets/OIP (10).jpg',
            cover: 'assets/OIP (10).jpg',
            followers: '2.2M',
            posts: '600',
            rating: '4.6',
            category: 'gaming'
        },
        {
            id: 12,
            username: 'Kasia Mecinski',
            bio: '🎨 Art & Design | ✏️ Digital Art | 🎥 Tutorials',
            avatar: 'assets/OIP (11).jpg',
            cover: 'assets/OIP (11).jpg',
            followers: '1.9M',
            posts: '1.1k',
            rating: '4.8',
            category: 'art'
        },
        {
            id: 13,
            username: 'Maciej "Z dvpy" Dąbrowski',
            bio: '😂 Comedy | 🎭 Stand-up | 🎤 Podcast',
            avatar: 'assets/OIP (12).jpg',
            cover: 'assets/OIP (12).jpg',
            followers: '1.5M',
            posts: '300',
            rating: '4.5',
            category: 'comedy'
        },
        {
            id: 14,
            username: 'Sylwia Przybysz',
            bio: '🎵 Music | 🎥 Vlogs | 👶 Lifestyle',
            avatar: 'assets/OIP (13).jpg',
            cover: 'assets/OIP (13).jpg',
            followers: '2.2M',
            posts: '700',
            rating: '4.7',
            category: 'music'
        },
        {
            id: 15,
            username: 'Karolina Gilon',
            bio: '📺 TV Host | 👗 Fashion | 💄 Beauty',
            avatar: 'assets/OIP (14).jpg',
            cover: 'assets/OIP (14).jpg',
            followers: '1.8M',
            posts: '500',
            rating: '4.6',
            category: 'fashion'
        },
        {
            id: 16,
            username: 'Piotr "Izak" Skowyrski',
            bio: '🎮 Gaming | 🎯 CS:GO | 🎥 Twitch Partner',
            avatar: 'assets/OIP (15).jpg',
            cover: 'assets/OIP (15).jpg',
            followers: '1.9M',
            posts: '400',
            rating: '4.5',
            category: 'gaming'
        },
        {
            id: 17,
            username: 'Agnieszka Grzelak (Fagata)',
            bio: '💄 Beauty | 🎵 Music | ⭐️ Team X',
            avatar: 'assets/OIP (16).jpg',
            cover: 'assets/OIP (16).jpg',
            followers: '2.6M',
            posts: '900',
            rating: '4.8',
            category: 'lifestyle'
        },
        {
            id: 18,
            username: 'Stuart Burton (Stuu)',
            bio: '🎮 Gaming | 🎥 YouTube 2M | 🎯 Minecraft',
            avatar: 'assets/OIP (17).jpg',
            cover: 'assets/OIP (17).jpg',
            followers: '2.0M',
            posts: '600',
            rating: '4.7',
            category: 'gaming'
        },
        {
            id: 19,
            username: 'Monika Kociołek',
            bio: '🥗 Fitness & Health | 💪 Workout | 🥑 Diet',
            avatar: 'assets/OIP (18).jpg',
            cover: 'assets/OIP (18).jpg',
            followers: '2.3M',
            posts: '700',
            rating: '4.8',
            category: 'fitness'
        },
        {
            id: 20,
            username: 'Kamil Labudda (Budda)',
            bio: '🎮 Gaming | 🎥 Vlogs | 🚀 Team X',
            avatar: 'assets/OIP (19).jpg',
            cover: 'assets/OIP (19).jpg',
            followers: '3.0M',
            posts: '1.0k',
            rating: '4.9',
            category: 'gaming'
        }
    ];

    // W pliku scripts/generating/userManager.js

static createUserCard(user) {
    // Określ płeć na podstawie imienia
    const isFemale = user.username.match(/a\s|Julia|Weronika|Natalia|Marta|Angelika|Kasia|Sylwia|Karolina|Agnieszka|Monika/);
    const genderClass = isFemale ? 'female' : 'male';

    return `
        <div class="user-card ${genderClass}" data-aos="fade-up">
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
                <a href="announcement.html" class="btn btn-primary">Wyświetl profil</a>
                <button class="btn btn-secondary">Zapisz</button>
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