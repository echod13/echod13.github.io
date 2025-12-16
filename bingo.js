let d = document.createElement('div');
const dndElements = [
    "Griffyndors werden gebasht", "Hufflepuffs sind Statisten ", "Pfosten ", "Mindestens 2 Spieler sind nicht aufmerksam",
    "Hufflepuffs Pilze", "Snacks werden gedealt","Jemand kommt zu spät","Benita plan random events","Dumme entscheidung der Gruppe","Ein guter Tipp von Meister/in wird ingoriert","Johannes verkauft die Gruppe als dumm",
    "Sera zündet was an", "Dana muss Lore googeln", "Ein neuer Npc dessen Name eine Anspielung ist","Maincharacter","Brauchen zulange an einer Tür","Tom ist ein Edgelord (Will mysteriös sein)", "Strafarbeit/Punktabzug","Es wurde eine 20 gewürfelt",
    "Es wurde eine 1 gewürfelt","Ein NPC Zitat ist eine Anspielung","jemand muss früher gehen", "Universum stirbt","sidecharacter bash"

];
const juergenElements = [
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
const importButon = document.getElementById('import').addEventListener('click', () => getContext(1));
const startButon = document.getElementById('new').addEventListener('click', () => getContext(2));
function getGridsize(){
    if(window.location.contains('juergen')){return 3}else return 4;
}
function getContext(param){
    if(param === 1){
        createBoard(importBoard(), getGridsize());
    } else if (param === 2){
        createBoard(newBoard(), getGridsize());
    } else {
        return [];
    }
}
function importBoard(){
      const input = document.getElementById("inputField");
    const value = input.value
    if(value){
        createBoard( bingoElements = value.split(","), getGridsize());
    }
}
function newBoard(arrayParam, gridSizeParam){
const bingoElements = [];
bingoElements = shuffleArray(arrayParam);
bingoElements.splice(gridSizeParam**2);
navigator.clipboard.writeText(bingoElements);

createBoard(bingoElements, gridSizeParam);

}

function createBoard(elements, gridSize){
clickedStates = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
const board = document.getElementById('board');
if(board.childElementCount>gridSize) return;

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
