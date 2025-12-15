const dataArray = [];
let presidentReports = ''
let presidentGave = ''
let chancellorReports = ''
let result = ''
let isConflict = ''
const inputField = document.getElementById('inputField');
const appendButton = document.getElementById('appendButton');
const startButton = document.getElementById('startButton');
const arrayDisplay = document.getElementById('arrayDisplay');
const presidentMenu = document.getElementById('presidentMenu');
const chancellorMenu = document.getElementById('chancellorMenu');
const NoAnswerp = document.getElementById('NoAnswerp').addEventListener('click', () => presidentReports = 'Schweigen');
const draw3red = document.getElementById('draw3red').addEventListener('click', () => presidentReports = '3 rote Karten und 0 blaue Karte');
const draw2red = document.getElementById('draw2red').addEventListener('click', () => presidentReports = '2 rote Karten und 1 blaue Karte');
const draw1red = document.getElementById('draw1red').addEventListener('click', () => presidentReports = '1 rote Karte und 2 blaue Karten');
const draw0red = document.getElementById('draw0red').addEventListener('click', () => presidentReports = '0 rote Karten und 3 blaue Karten');
const gave2red = document.getElementById('gave2red').addEventListener('click', () => presidentGave = '2 rote Karten und 0 blaue Karte');
const gave1red = document.getElementById('gave1red').addEventListener('click', () => presidentGave = '1 rote Karte und 1 blaue Karte');
const gave0red = document.getElementById('gave0red').addEventListener('click', () => presidentGave = '0 rote Karte und 2 blaue Karten');
const NoAnswerc = document.getElementById('NoAnswerc').addEventListener('click', () => chancellorReports = 'Schweigen');
const recieved2red = document.getElementById('recieved2red').addEventListener('click', () => chancellorReports = '2 rote Karten und 0 blaue Karten');
const recieved1red = document.getElementById('recieved1red').addEventListener('click', () => chancellorReports = '1 rote Karte und 1 blaue Karte');
const recieved0red = document.getElementById('recieved0red').addEventListener('click', () => chancellorReports = '0 rote Karte und 2 blaue Karten');
const conflict = document.getElementById('conflict').addEventListener('click', () => isConflict = ' ein Konflikt');
const noConflict = document.getElementById('noConflict').addEventListener('click', () => isConflict = 'kein Konflikt');
const redCard = document.getElementById('redCard').addEventListener('click', () => result = ' rote');
const blueCard = document.getElementById('blueCard').addEventListener('click', () => result = ' blaue');
const outputContent = document.getElementById('outputContent');
const eintragen = document.getElementById('eintragen').addEventListener('click', () => {
    const president = presidentMenu.value;
    const chancellor = chancellorMenu.value;
    const paragraph = document.createElement('p');
    paragraph.textContent = `Der Präsident ${president} meldet, dass ${presidentReports} gezogen wurden. Davon hat er ${presidentGave} an den Kanzler ${chancellor} weitergegeben. Der Kanzler berichtet ${chancellorReports} bekommen zu haben und hat eine ${result} Karte gespielt. Zwischen den Aussagen des Presidenten und Kanzlers liegt ${isConflict} vor!`;
    if (isConflict.trim() === 'ein Konflikt') {
        paragraph.style.color = 'red'; 
    } else if (isConflict.trim() === 'kein Konflikt') {
        paragraph.style.color = 'green'; 
    }
    outputContent.appendChild(paragraph);
});;
appendButton.addEventListener('click', () => {
    const inputValue = inputField.value.trim();
    if (inputValue && !dataArray.includes(inputValue)) {
        dataArray.push(inputValue);
        inputField.value = '';
        updateArrayDisplay();
    } else {
        alert('Please enter some text before adding.');
    }
});
startButton.addEventListener('click', () => {
    updateDropdownMenus();
    alert("Game Start APATAPATE");
});

function updateDropdownMenus() {
    presidentMenu.innerHTML = '<option value="" disabled selected>Select an item</option>';
    chancellorMenu.innerHTML = '<option value="" disabled selected>Select an item</option>';
    dataArray.forEach((item) => {
        const presidentOption = document.createElement('option');
        presidentOption.value = item;
        presidentOption.textContent = item;
        presidentMenu.appendChild(presidentOption);
        const chancellorOption = document.createElement('option');
        chancellorOption.value = item;
        chancellorOption.textContent = item;
        chancellorMenu.appendChild(chancellorOption);
    });
}

function updateArrayDisplay() {
    arrayDisplay.innerHTML = '';
    dataArray.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item}`;
        arrayDisplay.appendChild(listItem);
    });
}