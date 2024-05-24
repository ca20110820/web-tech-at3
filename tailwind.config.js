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
                },
                'blue': {
                    '50': '#eaf1ff',
                    '100': '#d8e5ff',
                    '200': '#b9ceff',
                    '300': '#8fadff',
                    '400': '#637eff',
                    '500': '#4050ff',
                    '600': '#1f20ff',
                    '700': '#1411ee',
                    '800': '#1313c0',
                    '900': '#191c96',
                    '950': '#100f57',
                },
                'shocking-pink': {
                    '50': '#fff0fc',
                    '100': '#ffe3fc',
                    '200': '#ffc6f9',
                    '300': '#ff98f3',
                    '400': '#ff59e7',
                    '500': '#ff28d7',
                    '600': '#fe06bc',
                    '700': '#de0098',
                    '800': '#b7007d',
                    '900': '#98036a',
                    '950': '#5e003c',
                },
                'seagull': {
                    '50': '#f0faff',
                    '100': '#dff4ff',
                    '200': '#b8ebff',
                    '300': '#61d7ff',
                    '400': '#33cdfd',
                    '500': '#09b7ee',
                    '600': '#0093cc',
                    '700': '#0075a5',
                    '800': '#046388',
                    '900': '#0a5270',
                    '950': '#06344b',
                },
            }
        },
    },
    plugins: [
        require("tw-elements/plugin.cjs")
    ],
}
