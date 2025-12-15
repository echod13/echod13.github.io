let d = document.createElement('div');
const bingoElements = [
"Rammt seinen Bauch jemanden in den Rücken ",
"Sagt irgendetwas was totenstille auslöst",
"Holt nichts zu trinken trotz mehrfacher Aufforderung",
"Wünscht nicht frohe Weihnachten",
"Schlägt jemandem auf den Arm ",
"Spricht mit sich selbst ",
"Schmatzt und schlingt alles in sich rein.",
"Nimmt direkt erstmal mehrere Stücke kuchen auf seinen teller",
"Nimmt riesen Haufen an Sahne",
"Beleidigt Joel grundlos als dumm",
"Macht Joels Geschenk runter",
"Sagt Letizia und/oder Leonie dass sie sowieso von nix ne Ahnung haben",
"Rotzt rum und zieht die Nase hoch",
"Putzt sich die Nase mit einem zerfledderten Tempo",
"Tritt jemanden unterm Tisch weil er seine Quadratlatschen aggressiv ausstreckt",
"Reibt seine Füße zusammen (Socken reiben)",
"Legt die Füße auf den Wohnzimmertisch (Bonus wenn Oma ihn anmeckert)"
];
let clickedStates;
const importButon = document.getElementById('import').addEventListener('click', () => importBoard());
const startButon = document.getElementById('new').addEventListener('click', () => newBoard());

function importBoard(){
      const input = document.getElementById("inputField");
    const value = input.value
    if(value){
        createBoard(value.split(","))
    }
}
function newBoard(){

shuffleArray(bingoElements);
bingoElements.splice(16);
navigator.clipboard.writeText(bingoElements);

createBoard(bingoElements);

}

function createBoard(elements){
const gridSize = 4;
clickedStates = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
const board = document.getElementById('board');
if(board.childElementCount>10) return;

elements.forEach((text, index) => { 
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    const button = document.createElement('button');
    button.textContent = text;

   
    button.addEventListener('click', () => {
        if (!clickedStates[row][col]) {
            clickedStates[row][col] = true; 
            button.classList.add('disabled');
            button.disabled = true;

            
            if (checkWinCondition(row, col)) {
                alert("Bingo! !");
            }
        }
    });

    board.appendChild(button);
});
}
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function checkWinCondition(row, col) {
   
    if (clickedStates[row].every(cell => cell)) {
        return true;
    }

    
    if (clickedStates.every(row => row[col])) {
        return true;
    }

    
    if (row === col && clickedStates.every((row, index) => row[index])) {
        return true;
    }

   
    if (row + col === gridSize - 1 && clickedStates.every((row, index) => row[gridSize - 1 - index])) {
        return true;
    }

    return false;
}