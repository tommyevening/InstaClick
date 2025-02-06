// scripts/config/config.js
export const rangeConfigs = [
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