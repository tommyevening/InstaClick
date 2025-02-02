// uiManager.js
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
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn')) {
            const action = e.target.textContent.toLowerCase();
            
            if (action === 'obserwuj') {
                UIManager.updatePoints(100);
                UIManager.showToast('Rozpoczęto obserwowanie użytkownika! +100 punktów');
                e.target.style.backgroundColor = '#2ecc71';
                e.target.textContent = 'Obserwujesz';
            } else if (action === 'polub') {
                UIManager.updatePoints(50);
                UIManager.showToast('Polubiono profil! +50 punktów');
                e.target.style.backgroundColor = '#e74c3c';
                e.target.style.color = 'white';
                e.target.textContent = 'Polubiono';
            }
        }
    });
});