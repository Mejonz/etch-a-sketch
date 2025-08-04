
const container = document.querySelector("#container");
let num = 16;

function createGrid() {
    let grid = num * num;
    for (let i = 0; i < grid; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("box");
    };
};

createGrid();


//let boxes = document.querySelectorAll(".box");

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

let opaqueness = 0;
function makeOpaque() { 
    let y = 0.1;
    opaqueness += y;
    return opaqueness;
};
//console.log(makeOpaque());

//console.log(randomColor());

function mouseHover() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = randomColor();
            e.target.style.opacity = makeOpaque();
        });
    });
};

mouseHover();

/*boxes.forEach(box => {
    box.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "grey";
    });
});*/

const resetButton = document.querySelector("#btn");

function removeGrid() {
    document.getElementById("container").innerHTML = "";
}

resetButton.addEventListener("click", () => {
    removeGrid();
    userInput = prompt("Please enter a number between 1 and 100:");
    if (userInput >= 1 && userInput <= 100) {
        num = userInput;
        createGrid();
        mouseHover();
    }
    else {alert("Invalid input! Please enter a number between 1 and 100")};
});

    







