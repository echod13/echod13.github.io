let d = document.createElement('div');
bingoElements = [
    "Griffyndors werden gebasht", "Hufflepuffs sind Statisten ", "Pfosten ", "Mindestens 2 Spieler sind nicht aufmerksam",
    "Hufflepuffs Pilze", "Snacks werden gedealt","Jemand kommt zu spät","Benita plan random events","Dumme entscheidung der Gruppe","Ein guter Tipp von Dana wird ingoriert","Johannes verkauft die Gruppe als dumm",
    "Sera zündet was an", "Dana muss Lore googeln", "Ein neuer Npc dessen Name eine Anspielung ist","Maincharacter","Brauchen zulange an einer Tür","Tom ist ein Edgelord (Will mysteriös sein)", "Strafarbeit/Punktabzug","Es wurde eine 20 gewürfelt",
    "Es wurde eine 1 gewürfelt","jemand muss früher gehen", "Universum stirbt","sidecharacter bash"
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
