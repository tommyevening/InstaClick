class UserManager {
    static sampleUsers = [
        {
            id: 1,
            username: 'Julia Kowalska',
            bio: '💻 Full-stack Developer | 🚀 React & Node.js | ✨ 5 lat doświadczenia',
            avatar: 'assets/OIP.jpg',
            cover: 'assets/OIP.jpg',
            followers: '15K',
            posts: '120',
            rating: '4.9',
            category: 'development',
            gender: 'female'
        },
        {
            id: 2,
            username: 'Karol Nowak',
            bio: '🎨 UI/UX Designer | 🚀 Figma Expert | 💪 100+ Projektów',
            avatar: 'assets/friz.jpg',
            cover: 'assets/friz.jpg',
            followers: '22K',
            posts: '89',
            rating: '4.7',
            category: 'design',
            gender: 'male'
        },
        {
            id: 3,
            username: 'Marcin Wójcik',
            bio: '📱 Mobile Developer | 🎮 iOS & Android | 🎯 Flutter Expert',
            avatar: 'assets/dubiel.png',
            cover: 'assets/dubiel.png',
            followers: '18K',
            posts: '95',
            rating: '4.8',
            category: 'development',
            gender: 'male'
        },
        {
            id: 4,
            username: 'Weronika Zając',
            bio: '🎨 Digital Artist | 🎵 3D Modeling | ⭐️ Blender Pro',
            avatar: 'assets/wersow.jpg',
            cover: 'assets/wersow.jpg',
            followers: '12K',
            posts: '78',
            rating: '4.6',
            category: 'design',
            gender: 'female'
        },
        {
            id: 5,
            username: 'Kacper Mazur',
            bio: '📊 Data Scientist | 💻 Python & ML | 🎥 AI Solutions',
            avatar: 'assets/kacper.jpg',
            cover: 'assets/kacper.jpg',
            followers: '25K',
            posts: '150',
            rating: '4.7',
            category: 'data',
            gender: 'male'
        },
        {
            id: 6,
            username: 'Mikołaj Adamski',
            bio: '🔒 Cybersecurity Expert | 🛡️ Pentester | 💡 Security Audits',
            avatar: 'assets/OIP (5).jpg',
            cover: 'assets/OIP (5).jpg',
            followers: '10K',
            posts: '45',
            rating: '4.8',
            category: 'security',
            gender: 'male'
        },
        {
            id: 7,
            username: 'Natalia Wiśniewska',
            bio: '📝 Content Writer | ✍️ SEO Expert | 💼 B2B Marketing',
            avatar: 'assets/OIP (6).jpg',
            cover: 'assets/OIP (6).jpg',
            followers: '8K',
            posts: '210',
            rating: '4.9',
            category: 'writing',
            gender: 'female'
        },
        {
            id: 8,
            username: 'Krzysztof Lewandowski',
            bio: '🎥 Motion Designer | 🎬 After Effects | 📚 3D Animation',
            avatar: 'assets/OIP (7).jpg',
            cover: 'assets/OIP (7).jpg',
            followers: '19K',
            posts: '67',
            rating: '4.6',
            category: 'animation',
            gender: 'male'
        },
        {
            id: 9,
            username: 'Marta Dąbrowska',
            bio: '📈 Digital Marketing | 🎯 PPC Expert | 🌟 Google Ads',
            avatar: 'assets/OIP (8).jpg',
            cover: 'assets/OIP (8).jpg',
            followers: '14K',
            posts: '180',
            rating: '4.5',
            category: 'marketing',
            gender: 'female'
        },
        {
            id: 10,
            username: 'Wojtek Szymański',
            bio: '🔧 DevOps Engineer | 🚀 AWS Certified | 💪 CI/CD Expert',
            avatar: 'assets/OIP (9).jpg',
            cover: 'assets/OIP (9).jpg',
            followers: '16K',
            posts: '85',
            rating: '4.7',
            category: 'devops',
            gender: 'male'
        },
        {
            id: 11,
            username: 'Angelika Jabłońska',
            bio: '🎨 Brand Designer | 💄 Logo Design | 🎥 Visual Identity',
            avatar: 'assets/OIP (10).jpg',
            cover: 'assets/OIP (10).jpg',
            followers: '21K',
            posts: '160',
            rating: '4.6',
            category: 'design',
            gender: 'female'
        },
        {
            id: 12,
            username: 'Katarzyna Michalak',
            bio: '🌐 Frontend Developer | ✏️ Vue.js | 🎨 CSS Ninja',
            avatar: 'assets/OIP (11).jpg',
            cover: 'assets/OIP (11).jpg',
            followers: '13K',
            posts: '110',
            rating: '4.8',
            category: 'development',
            gender: 'female'
        },
        {
            id: 13,
            username: 'Maciej Kaczmarek',
            bio: '📱 App Developer | 🎭 React Native | 🎤 Tech Lead',
            avatar: 'assets/OIP (12).jpg',
            cover: 'assets/OIP (12).jpg',
            followers: '17K',
            posts: '92',
            rating: '4.5',
            category: 'development',
            gender: 'male'
        },
        {
            id: 14,
            username: 'Sylwia Nowakowska',
            bio: '🎵 Sound Designer | 🎥 Audio Engineer | 👶 Podcast Editor',
            avatar: 'assets/OIP (13).jpg',
            cover: 'assets/OIP (13).jpg',
            followers: '9K',
            posts: '70',
            rating: '4.7',
            category: 'audio',
            gender: 'female'
        },
        {
            id: 15,
            username: 'Karolina Witkowska',
            bio: '📊 Business Analyst | 👗 Agile Coach | 💄 Scrum Master',
            avatar: 'assets/OIP (14).jpg',
            cover: 'assets/OIP (14).jpg',
            followers: '11K',
            posts: '88',
            rating: '4.6',
            category: 'business',
            gender: 'female'
        },
        {
            id: 16,
            username: 'Piotr Zieliński',
            bio: '🎮 Game Developer | 🎯 Unity 3D | 🎥 C# Expert',
            avatar: 'assets/OIP (15).jpg',
            cover: 'assets/OIP (15).jpg',
            followers: '20K',
            posts: '75',
            rating: '4.5',
            category: 'gaming',
            gender: 'male'
        },
        {
            id: 17,
            username: 'Agnieszka Pawlak',
            bio: '💄 UX Researcher | 🎵 User Testing | ⭐️ Product Design',
            avatar: 'assets/OIP (16).jpg',
            cover: 'assets/OIP (16).jpg',
            followers: '12K',
            posts: '95',
            rating: '4.8',
            category: 'research',
            gender: 'female'
        },
        {
            id: 18,
            username: 'Stefan Wójcicki',
            bio: '🎮 Backend Developer | 🎥 Python | 🎯 Django Expert',
            avatar: 'assets/OIP (17).jpg',
            cover: 'assets/OIP (17).jpg',
            followers: '15K',
            posts: '120',
            rating: '4.7',
            category: 'development',
            gender: 'male'
        },
        {
            id: 19,
            username: 'Monika Kamińska',
            bio: '🥗 Technical Writer | 💪 API Documentation | 🥑 Knowledge Base',
            avatar: 'assets/OIP (18).jpg',
            cover: 'assets/OIP (18).jpg',
            followers: '7K',
            posts: '140',
            rating: '4.8',
            category: 'writing',
            gender: 'female'
        },
        {
            id: 20,
            username: 'Kamil Górski',
            bio: '🎮 Blockchain Dev | 🎥 Smart Contracts | 🚀 Web3',
            avatar: 'assets/OIP (19).jpg',
            cover: 'assets/OIP (19).jpg',
            followers: '23K',
            posts: '65',
            rating: '4.9',
            category: 'blockchain',
            gender: 'male'
        }
    ];

    static createUserCard(user) {
        return `
            <div class="user-card ${user.gender}" data-aos="fade-up">
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
                            <div class="stat-label">Projektów</div>
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