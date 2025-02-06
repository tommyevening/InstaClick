// scripts/sidebar/rangeSliderManager.js
document.addEventListener('DOMContentLoaded', () => {
    const ranges = [
        {
            minId: 'price-min',
            maxId: 'price-max',
            displayId: 'price-range-display',
            step: 10,
            format: (value) => `${value} PLN/h`
        },
        {
            minId: 'rating-min',
            maxId: 'rating-max',
            displayId: 'rating-range-display',
            step: 0.1,
            format: (value) => Number(value).toFixed(1)
        }
    ];

    ranges.forEach(range => {
        const minInput = document.getElementById(range.minId);
        const maxInput = document.getElementById(range.maxId);
        const display = document.getElementById(range.displayId);

        function updateRange() {
            const min = parseFloat(minInput.value);
            const max = parseFloat(maxInput.value);
            if (min >= max) minInput.value = max - range.step;
            if (max <= min) maxInput.value = min + range.step;
            display.textContent = `${range.format(minInput.value)} - ${range.format(maxInput.value)}`;
        }

        minInput.addEventListener('input', updateRange);
        maxInput.addEventListener('input', updateRange);
        updateRange();
    });
});