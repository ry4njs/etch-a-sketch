const MAX_SIZE = 100;
const CONTAINER_SIZE = 960;
const container = document.querySelector(".container");

function createGrid(numSquaresPerSide) {
    container.innerHTML = "";
    const squareSize = CONTAINER_SIZE / numSquaresPerSide;

    for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    
        square.addEventListener("mouseenter", ()=> {
            square.style.backgroundColor = "#333"
        });
    
        container.appendChild(square);
    }
}

createGrid(16);

const button = document.querySelector(".grid-button");
button.addEventListener("click", ()=> {
    let size = parseInt(prompt("Enter number of squares per side (max 100):"));
    if (isNaN(size) || size < 1 || size > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});
