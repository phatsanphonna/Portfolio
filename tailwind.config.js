module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screen: {
            'tablet': '640px',
            'laptop': '1024px',
            'desktop': '1280px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
