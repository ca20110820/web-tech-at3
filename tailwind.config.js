/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './*.html',
        './templates/**/*.{html,js}',
        "./src/**/*.{html,js}",
        "./assets/js/**/*.js",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'heliotrope': {
                    '50': '#fbf5ff',
                    '100': '#f5e7ff',
                    '200': '#ecd4ff',
                    '300': '#ddb2ff',
                    '400': '#c77dff',
                    '500': '#b451fb',
                    '600': '#a02eef',
                    '700': '#8a1ed2',
                    '800': '#751eab',
                    '900': '#60198a',
                    '950': '#420566',
                }
            }
        },
    },
    plugins: [
        require("tw-elements/plugin.cjs")
    ],
}
