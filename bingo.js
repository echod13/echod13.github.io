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
"Legt die Füße auf den Wohnzimmertisch (Bonus wenn Oma ihn anmeckert)",
"Weißt du was du für den Baum sonst hättest bezahlen müssen/ Was sowas kostet!"
];
let clickedStates;
const importButon = document.getElementById('import').addEventListener('click', () => getContext(1));
const startButon = document.getElementById('new').addEventListener('click', () => getContext(2));
function getbingoElements(locString){
    if(locString.includes('juergen')){
        return juergenElements;
    } else {
        return dndElements;
    }
}
function getGridsize(locString){
    if(locString.includes('juergen')){return 3}else return 4;
}
function getContext(param){
    let loc = window.location.href;
    let gridNumber = getGridsize(loc);
    if(param === 1){
        createBoard(importBoard(), gridNumber);
    } else if (param === 2){
        createBoard(newBoard(getbingoElements(loc),gridNumber),gridNumber);
    } else {
        return [];
    }
}
function importBoard(){
      const input = document.getElementById("inputField");
    const value = input.value
    if(value){
        return value.split(",");
    }
}
function newBoard(arrayParam, gridSizeParam){
let bingoElements = [];
bingoElements = shuffleArray(arrayParam);
bingoElements.splice(gridSizeParam**2);
navigator.clipboard.writeText(bingoElements);

return bingoElements;

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

            
            if (checkWinCondition(row, col,gridSize)) {
                confettiBurst();
                setTimeout(() => alert("Bingo! 🎉"), 200);
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
    return array;
}

function checkWinCondition(row, col, gridSize) {
   
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
function confettiBurst() {
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
