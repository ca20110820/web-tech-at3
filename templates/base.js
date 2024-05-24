customElements.define(
    "base-header-footer",
    class extends HTMLElement {
        constructor() {
            super();

            /* Custom HTML Attributes */
            // ...

            // Get the current URL
            // Need to use the document that's using the template
            let currentUrl = document.location.pathname;

            // Extract the directory path from the URL
            let pathArray = currentUrl.split("/").filter(x => x !== '');
            pathArray.pop(); // Remove the file name
            let directoryPath = pathArray.join("/");

            // Calculate the relative path to the root
            let pathSegments = directoryPath.split("/");
            let relativeRoot = "";

            if (pathArray.length === 0) {
                relativeRoot += "./"
            }
            else {
                for (let i = 0; i < pathSegments.length - 1; i++) {
                    relativeRoot += "../"
                }
            }

            let rootDir = relativeRoot;

            fetch(`${rootDir}templates/base.html`)
                .then(async response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch');
                    }
                    return await response.text();
                })
                .then(htmlString => {
                    const parser = new DOMParser();
                    const dom = parser.parseFromString(htmlString, 'text/html');

                    let template = dom.getElementById("template-base");
                    if (!template) {
                        throw new Error('Template not found');
                    }
                    let templateContent = template.content;

                    const shadowRoot = this.attachShadow({mode: "open"});
                    shadowRoot.appendChild(templateContent.cloneNode(true));

                    // Get current year for footer
                    shadowRoot.querySelector('#year').textContent = (new Date().getFullYear()).toString();

                    // Bind click event to the menu-toggle
                    shadowRoot.querySelector('#menu-toggle').addEventListener('click', () => {
                        this.showHamburgerItems();
                    });

                    // Set the paths for hrefs with class="class-path"
                    shadowRoot.querySelectorAll('.class-path').forEach(elem => {
                        let hrefValue = elem.getAttribute('href');
                        elem.setAttribute('href', rootDir + hrefValue);
                    });

                    // Add Site Style with Relative Path
                    let style = shadowRoot.querySelector('style');
                    style.innerText = `@import url('${rootDir}assets/css/site.css');`;

                })
                .catch(error => {
                    console.error('Error fetching or parsing base.html template:', error);
                });
        }

        /* Show the hamburger menu */
        showHamburgerItems() {
            this.shadowRoot.querySelector('#header-nav').classList.toggle('hidden');
        }
    },
);