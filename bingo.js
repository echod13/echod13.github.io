let d = document.createElement('div');
const bingoElements = [
    "remigration", "cringe videogame comparision", "admitting tsla helps germany", "mars",
    "wall, border, fence", "TWITTER", "sigma boy", "woke",
    "interesting concerning, looking into it", "not  being right wing", "free speech", "mainstream media",
    "AI", "elite", "racism", "islamization", "DODGE (any)", "unions", "hatin unions", "Russia", "russia is an ally", "Scholz is a fool", "weidel brown nosing Musk", "adrian Dittmann", "hitler salute","Putin","The Green Party /die Grünen","When you say.... That makes u a Nazi here in Germany",
    "Germany needs a strong hand","The German Mark","Tesla is great","We need less electric mobility","The Climate Change isn't human made... Not even real","We even have foreigns in our Party","Alice Weidel verplappert sich mit Steuern und dem Fakt, dass sie in der Schweiz lebt","Der Holocaust wird relativiert und/oder geleugnet",
    "COVID19 wird relativiert und/oder geleugnet", "Weidel nciht queer"

];

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const gridSize = 4;
const clickedStates = Array.from({ length: gridSize }, () => Array(gridSize).fill(false));
const board = document.getElementById('board');


shuffleArray(bingoElements);
bingoElements.splice(16);

bingoElements.forEach((text, index) => { 
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
