let words = [];
let numberWords = 0;

function saveWord() {
    words[numberWords] = document.getElementById("userInput").value;
    ++numberWords;
}

function searchWord() {
    let wordToSearch = document.getElementById("wordSearch").value;
    if (words.indexOf(wordToSearch) > -1) {
        document.getElementById("result").innerHTML += `
        <p>Already added</p>`;
    } else {
        document.getElementById("result").innerHTML += `
        <p>Not found</p>`;
    }
}