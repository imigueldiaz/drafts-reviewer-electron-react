// window.onload = function() {
//     // This replaces the entire document with the translation
//     let template = window.electron.handleBars.compile(
//         document.documentElement.innerHTML
//     );
//     document.documentElement.innerHTML = template();
// };

async function fileSelected(e) {
    let loadedFile = e.target.files[0];

    if (loadedFile === undefined) return;

    const loadedFilePath = loadedFile.path;

    let data = await readDocxFile(loadedFilePath);
    document.getElementById("pruebaMark").innerHTML = data;
}

async function readDocxFile(loadedFilePath) {
    return await window.electron.ipcRenderer.invoke("read-file", loadedFilePath);
}

document.getElementById("fileLoader").addEventListener("change", fileSelected);