// Select buttons
const upperCaseButton = document.querySelector('#upper-case');
const lowerCaseButton = document.querySelector('#lower-case');
const properCaseButton = document.querySelector('#proper-case');
const sentenceCaseButton = document.querySelector('#sentence-case');
const saveTextFile = document.querySelector('#save-text-file');


upperCaseButton.addEventListener('click', () => {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value = text.toUpperCase();
    }
)

lowerCaseButton.addEventListener('click', () => {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value = text.toLowerCase();
    }
)

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

properCaseButton.addEventListener('click', () => {
        let text = document.querySelector("textarea").value;
        document.querySelector("textarea").value = toTitleCase(text);
    }
)

sentenceCaseButton.addEventListener("click", function sentenceCase() {
    let sentenceCase = document.querySelector("textarea").value.toLowerCase();
    let string = sentenceCase.split('. ')
    for (let i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
    }
    sentenceCase = string.join('. ')
    document.querySelector("textarea").value = sentenceCase;
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.

saveTextFile.addEventListener('click', () => {
    let text = document.querySelector("textarea").value;
    download("text.txt", text);
})