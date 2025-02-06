// scripts/sidebar/sidebar.js

class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.toggleBtn = document.getElementById('toggleBtn');
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.toggleBtn.addEventListener('click', () => {
            this.sidebar.classList.toggle('expanded');
        });
    }
}

// Inicjalizacja po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
    new SidebarManager();
});