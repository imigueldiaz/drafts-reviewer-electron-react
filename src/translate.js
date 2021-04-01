window.onload = function(event) {
    // This replaces the entire document with the translation
    let template = window.electron.handleBars.compile(
        document.documentElement.innerHTML
    );
    document.documentElement.innerHTML = template();
};