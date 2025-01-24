// Initialize the array
const dataArray = [];
let presidentReports=''
let presidentGave=''
let chancellorReports=''
let result=''
let isConflict=''

// Select elements
const inputField = document.getElementById('inputField');
const appendButton = document.getElementById('appendButton');
const startButton = document.getElementById('startButton');
const arrayDisplay = document.getElementById('arrayDisplay');
const presidentMenu = document.getElementById('presidentMenu');
const chancellorMenu = document.getElementById('chancellorMenu');
const NoAnswerp = document.getElementById('NoAnswerp').addEventListener('click', () => presidentReports='Schweigen');
const draw3red = document.getElementById('draw3red').addEventListener('click', () => presidentReports='3 faschistische Karten und 0 liberale Karten');
const draw2red = document.getElementById('draw2red').addEventListener('click', () => presidentReports='2 faschistische Karten und 1 liberale Karten');
const draw1red = document.getElementById('draw1red').addEventListener('click', () => presidentReports='1 faschistische Karten und 2 liberale Karten');
const draw0red = document.getElementById('draw0red').addEventListener('click', () => presidentReports='0 faschistische Karten und 3 liberale Karten');
const gave2red = document.getElementById('gave2red').addEventListener('click', () => presidentGave='2 faschistische Karten und 0 liberale Karten');
const gave1red = document.getElementById('gave1red').addEventListener('click', () => presidentGave='1 faschistische Karten und 1 liberale Karten');
const gave0red = document.getElementById('gave0red').addEventListener('click', () => presidentGave='0 faschistische Karten und 2 liberale Karten');
const NoAnswerc = document.getElementById('NoAnswerc').addEventListener('click', () => chancellorReports='Schweigen');
const recieved2red = document.getElementById('recieved2red').addEventListener('click', () => chancellorReports='2 faschistische Karten und 0 liberale Karten');
const recieved1red = document.getElementById('recieved1red').addEventListener('click', () => chancellorReports='1 faschistische Karten und 1 liberale Karten');
const recieved0red = document.getElementById('recieved0red').addEventListener('click', () => chancellorReports='0 faschistische Karten und 2 liberale Karten');
const conflict = document.getElementById('conflict').addEventListener('click', () => isConflict=' ein Konflikt');
const noConflict = document.getElementById('noConflict').addEventListener('click', () => isConflict=' kein Konflikt');
const redCard = document.getElementById('redCard').addEventListener('click', () => result=' faschistische');
const blueCard = document.getElementById('blueCard').addEventListener('click', () => result=' liberale');
const outputContent = document.getElementById('outputContent');
const eintragen = document.getElementById('eintragen').addEventListener('click', () => {
    const president = presidentMenu.value;
    const chancellor = chancellorMenu.value;
    const paragraph = document.createElement('p');
    paragraph.textContent = `Der Präsident ${president} meldet, dass ${presidentReports} gezogen wurden. Davon hat er ${presidentGave} an den Kanzler ${chancellor} weitergegeben. Der Kanzler berichtet ${chancellorReports} bekommen zu haben und hat eine ${result} Karte gespielt. Zwischen den Aussagen des Presidenten und Kanzlers liegt ${isConflict} vor!`;
    if (isConflict === 'ein Konflikt') {
        paragraph.style.color = 'red'; // Red for conflict
      } else  {
        paragraph.style.color = 'green'; // Green for no conflict
      }
    outputContent.appendChild(paragraph);


});;

// Add event listener to the button
appendButton.addEventListener('click', () => {
  const inputValue = inputField.value.trim(); // Get the trimmed input value

  if (inputValue && !dataArray.includes(inputValue)) {
    // Append the value to the array
    dataArray.push(inputValue);

    // Clear the input field
    inputField.value = '';

    // Update the displayed array
    updateArrayDisplay();
  } else {
    alert('Please enter some text before adding.');
  }
});
startButton.addEventListener('click', () => {
    // Update the dropdown menu with current array contents
    updateDropdownMenus();
    alert("Game Start APATAPATE");
  });
  function updateDropdownMenus() {
    // Clear the current dropdown menus
    presidentMenu.innerHTML = '<option value="" disabled selected>Select an item</option>';
    chancellorMenu.innerHTML = '<option value="" disabled selected>Select an item</option>';
  
    // Add each element in the array as a dropdown option
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
// Function to update the array display
function updateArrayDisplay() {
  // Clear the current list
  arrayDisplay.innerHTML = '';

  // Add each element in the array to the list
  dataArray.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item}`;
    arrayDisplay.appendChild(listItem);
  });
}