// userManager.js
class UserManager {
    static sampleUsers = [
        {
            id: 1,
            username: 'Anna Kowalska',
            bio: '✏️ Copywriter | 📱 Content Manager | ✍️ 5 lat doświadczenia',
            avatar: 'assets/OIP.jpg',
            cover: 'assets/OIP.jpg',
            followers: '2.3k',
            posts: '800',
            rating: '4.9',
            category: 'writing'
        },
        {
            id: 2,
            username: 'Piotr Nowak',
            bio: '💻 Full Stack Developer | 🚀 React & Node.js | 🔧 100+ projektów',
            avatar: 'assets/OIP (1).jpg',
            cover: 'assets/OIP (1).jpg',
            followers: '1.8k',
            posts: '600',
            rating: '4.7',
            category: 'development'
        },
        {
            id: 3,
            username: 'Adam Marciniak',
            bio: '🎨 Grafik | 🖌️ UI/UX Designer | 🎯 200+ realizacji',
            avatar: 'assets/OIP (2).jpg',
            cover: 'assets/OIP (2).jpg',
            followers: '3.1k',
            posts: '1.2k',
            rating: '4.8',
            category: 'design'
        },
        {
            id: 4,
            username: 'Anna Lewandowska',
            bio: '📸 Fotograf produktowy | 🎥 Videograf | 🎞️ 300+ sesji',
            avatar: 'assets/OIP (3).jpg',
            cover: 'assets/OIP (3).jpg',
            followers: '2.5k',
            posts: '700',
            rating: '4.6',
            category: 'photography'
        },
        {
            id: 5,
            username: 'Karol Dąbrowski',
            bio: '📊 Digital Marketing | 💡 SEO Expert | 📈 50+ kampanii',
            avatar: 'assets/OIP (4).jpg',
            cover: 'assets/OIP (4).jpg',
            followers: '1.9k',
            posts: '500',
            rating: '4.7',
            category: 'marketing'
        },
        {
            id: 6,
            username: 'Michał Zieliński',
            bio: '🎬 Motion Designer | 🎨 3D Artist | 🎯 150+ animacji',
            avatar: 'assets/OIP (5).jpg',
            cover: 'assets/OIP (5).jpg',
            followers: '2.7k',
            posts: '900',
            rating: '4.8',
            category: 'animation'
        },
        {
            id: 7,
            username: 'Aleksandra Szymańska',
            bio: '📱 Social Media Manager | 📊 Analityk | 💼 30+ marek',
            avatar: 'assets/OIP (6).jpg',
            cover: 'assets/OIP (6).jpg',
            followers: '3.5k',
            posts: '1.5k',
            rating: '4.9',
            category: 'social-media'
        },
        {
            id: 8,
            username: 'Kasia Wojciechowska',
            bio: '🔊 Sound Designer | 🎵 Kompozytor | 🎼 80+ projektów',
            avatar: 'assets/OIP (7).jpg',
            cover: 'assets/OIP (7).jpg',
            followers: '2.1k',
            posts: '750',
            rating: '4.6',
            category: 'audio'
        },
        {
            id: 9,
            username: 'Magdalena Jankowska',
            bio: '✍️ Tłumacz | 🌍 EN/DE/PL | 📚 1000+ tłumaczeń',
            avatar: 'assets/OIP (8).jpg',
            cover: 'assets/OIP (8).jpg',
            followers: '1.6k',
            posts: '400',
            rating: '4.5',
            category: 'translation'
        },
        {
            id: 10,
            username: 'Adam Kaczmarek',
            bio: '📱 Mobile Developer | 📲 iOS & Android | 🚀 40+ aplikacji',
            avatar: 'assets/OIP (9).jpg',
            cover: 'assets/OIP (9).jpg',
            followers: '2.4k',
            posts: '850',
            rating: '4.7',
            category: 'mobile-dev'
        },
        {
            id: 11,
            username: 'Natalia Pawlak',
            bio: '📝 Content Writer | 📰 SEO Copywriter | ✍️ 500+ artykułów',
            avatar: 'assets/OIP (10).jpg',
            cover: 'assets/OIP (10).jpg',
            followers: '1.7k',
            posts: '600',
            rating: '4.6',
            category: 'content'
        },
        {
            id: 12,
            username: 'Maria Wójcik',
            bio: '🎨 Ilustrator | ✏️ Digital Artist | 🖼️ 200+ ilustracji',
            avatar: 'assets/OIP (11).jpg',
            cover: 'assets/OIP (11).jpg',
            followers: '2.9k',
            posts: '1.1k',
            rating: '4.8',
            category: 'illustration'
        },
        {
            id: 13,
            username: 'Michał Mazur',
            bio: '📊 Data Analyst | 📈 Business Intelligence | 💹 60+ raportów',
            avatar: 'assets/OIP (12).jpg',
            cover: 'assets/OIP (12).jpg',
            followers: '1.5k',
            posts: '300',
            rating: '4.5',
            category: 'data'
        },
        {
            id: 14,
            username: 'Magdalena Sikora',
            bio: '🔧 DevOps Engineer | ☁️ Cloud Expert | 🚀 70+ wdrożeń',
            avatar: 'assets/OIP (13).jpg',
            cover: 'assets/OIP (13).jpg',
            followers: '2.2k',
            posts: '700',
            rating: '4.7',
            category: 'devops'
        },
        {
            id: 15,
            username: 'Katarzyna Witkowska',
            bio: '📋 Project Manager | 🎯 Scrum Master | 📊 40+ projektów',
            avatar: 'assets/OIP (14).jpg',
            cover: 'assets/OIP (14).jpg',
            followers: '1.8k',
            posts: '500',
            rating: '4.6',
            category: 'management'
        },
        {
            id: 16,
            username: 'Paweł Grabowski',
            bio: '🔒 Security Expert | 🛡️ Pentester | 🔐 100+ audytów',
            avatar: 'assets/OIP (15).jpg',
            cover: 'assets/OIP (15).jpg',
            followers: '1.9k',
            posts: '400',
            rating: '4.5',
            category: 'security'
        },
        {
            id: 17,
            username: 'Agnieszka Rutkowska',
            bio: '📱 UX Researcher | 🎯 Product Designer | 💡 45+ badań',
            avatar: 'assets/OIP (16).jpg',
            cover: 'assets/OIP (16).jpg',
            followers: '2.6k',
            posts: '900',
            rating: '4.8',
            category: 'ux'
        },
        {
            id: 18,
            username: 'Ania Adamczyk',
            bio: '🎥 Video Editor | 🎬 Motion Graphics | 🎞️ 250+ produkcji',
            avatar: 'assets/OIP (17).jpg',
            cover: 'assets/OIP (17).jpg',
            followers: '2.0k',
            posts: '600',
            rating: '4.7',
            category: 'video'
        },
        {
            id: 19,
            username: 'Monika Szewczyk',
            bio: '📊 Digital Analyst | 📈 Google Ads Expert | 💼 90+ kampanii',
            avatar: 'assets/OIP (18).jpg',
            cover: 'assets/OIP (18).jpg',
            followers: '2.3k',
            posts: '700',
            rating: '4.8',
            category: 'analytics'
        },
        {
            id: 20,
            username: 'Kamil Walczak',
            bio: '🌐 Backend Developer | 💾 Database Expert | 🔧 120+ systemów',
            avatar: 'assets/OIP (19).jpg',
            cover: 'assets/OIP (19).jpg',
            followers: '3.0k',
            posts: '1.0k',
            rating: '4.9',
            category: 'backend'
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
                    <button class="btn btn-primary">Wyświetl profil</button>
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