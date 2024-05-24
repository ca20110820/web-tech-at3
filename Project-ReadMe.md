# 24S1 Web Technologies - AT3 Final Project

## Introduction

This project is a part of my cluster on Web Technologies at NMTAFE, aimed at creating a personal portfolio static
website. The website serves as a showcase of my skills, projects, and experiences in the field of web development.

The website is deployed using GitHub Pages, making it easily accessible to anyone with an internet connection. Visitors
can view the site by simply navigating to the GitHub Pages URL https://ca20110820.github.io/web-tech-at3/.

## Colour Scheme

| Name          | RGB           | HEX     |
|---------------|---------------|---------|
| black         | 0, 0, 0       | #000000 |
| white         | 255, 255, 255 | #FFFFFF |
| Heliotrope    | 180, 81, 251  | #b451fb |
| Blue          | 31, 32, 255   | #1f20ff |
| Shocking-Pink | 255, 40, 215  | #ff28d7 |
| Seagull       | 0, 147, 204   | #0093cc |

Used https://uicolors.app/create to generate the following color configuration
for `tailwind.config.js`:

<details>
  <summary><b>Color Configuration</b></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [...],
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
    plugins: [...],
}
```

</details>
