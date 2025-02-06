// scripts/sidebar/rangeValueUpdater.js
document.addEventListener('DOMContentLoaded', () => {
    // Pobieranie elementów
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const followersRange = document.getElementById('followers');
    const followersValue = document.getElementById('followers-value');
    const ratingRange = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');

    // Funkcja aktualizująca wartość suwaka
    function updateRangeValue(range, display, unit = '') {
        range.addEventListener('input', () => {
            if (range.id === 'price-range') {
                display.textContent = `${range.value} PLN`;
            } else if (range.id === 'followers') {
                display.textContent = `${range.value.toLocaleString()} obserwujących`;
            } else if (range.id === 'rating') {
                display.textContent = `${range.value} / 5`;
            }
        });
    }

    // Aktualizacja wartości dla każdego suwaka
    updateRangeValue(priceRange, priceValue, 'PLN');
    updateRangeValue(followersRange, followersValue, 'obserwujących');
    updateRangeValue(ratingRange, ratingValue, '/ 5');
});