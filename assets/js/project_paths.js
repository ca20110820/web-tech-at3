function getRelativeRoot() {
    // Get the current file path of a html file
    let currentFilePath = document.location.pathname;  // Need to use the document that's using the template

    // Extract the directory path from the URL
    let pathArray = currentFilePath.split("/").filter(x => x !== '');
    pathArray = pathArray.filter(p => !p.includes('.html'));  // Remove the file name

    let directoryPath = pathArray.join("/");  // Possible to have no elements

    // Calculate the relative path to the root
    let pathSegments = directoryPath.split("/");
    let relativeRoot = "";

    if (pathArray.length === 1) {
        relativeRoot += "./"
    } else {
        for (let i = 0; i < pathSegments.length - 1; i++) {
            relativeRoot += "../"
        }
    }

    return relativeRoot;
}

export {
    getRelativeRoot
};
