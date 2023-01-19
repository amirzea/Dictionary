let words = [];
let numberWords = 0;

function saveWord() {
    words[numberWords] = document.getElementById("userInput").value;
    ++numberWords;
}

function searchWord() {
    clearWordInfo("result");  
    let wordToSearch = document.getElementById("wordSearch").value;
    if (words.indexOf(wordToSearch) > -1) {
        document.getElementById("result").innerHTML += `
        <p id="wordInfo">Already added</p>`;
    } else {
        document.getElementById("result").innerHTML += `
        <p id="wordInfo">Not found</p>`;
    }
}

function clearWordInfo(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
