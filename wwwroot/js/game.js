const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        );
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("taken");
    });
    currentPlayer = "X";
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "") return;
        cell.textContent = currentPlayer;
        cell.classList.add("taken");

        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
            resetBoard();
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});
