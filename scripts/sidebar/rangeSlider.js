// scripts/sidebar/rangeSlider.js
import { rangeConfigs } from '../config/config.js';

class RangeSlider {
    constructor(config) {
        this.minInput = document.getElementById(config.minId);
        this.maxInput = document.getElementById(config.maxId);
        this.display = document.getElementById(config.displayId);
        this.step = config.step;
        this.format = config.format;
        this.initializeEventListeners();
    }

    updateRange = () => {
        const min = parseFloat(this.minInput.value);
        const max = parseFloat(this.maxInput.value);
        
        if (min >= max) {
            this.minInput.value = max - this.step;
        }
        if (max <= min) {
            this.maxInput.value = min + this.step;
        }
        
        this.display.textContent = `${this.format(this.minInput.value)} - ${this.format(this.maxInput.value)}`;
    }

    initializeEventListeners() {
        this.minInput.addEventListener('input', this.updateRange);
        this.maxInput.addEventListener('input', this.updateRange);
        // Inicjalna aktualizacja wyświetlania
        this.updateRange();
    }
}

// Eksportuj klasę
export { RangeSlider };