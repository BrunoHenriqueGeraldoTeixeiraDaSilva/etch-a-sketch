//SELECTING ELEMENTS
const container = document.getElementById("container");
const submit = document.getElementById("submit-btn");
const input = document.getElementById("input")
const prompt = document.getElementById("prompt");
const reset = document.getElementById("reset-btn");
const raibow = document.getElementById("raibow-button");


//CREATING ELEMENTS
  

//GRID SIZE
const gridSize = 16;

//creating the grid
function createGrid(size){

    if(size != null){
        container.innerHTML = '';
    }

    const containerSize = 650; // Total grid area (adjust this to your preference)
    const squareSize = containerSize / size; // Each square gets smaller with more squares
    
    container.style.width = containerSize + 'px';
    container.style.height = containerSize + 'px';
    
    for(let i = 0; i < size * size ; i++){
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        // Set each square's size dynamically
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        
        container.appendChild(square);

        square.addEventListener("mouseover", () =>{
            square.classList.add("background-color");
        })
    }
} 


function getUserInput(){
    submit.addEventListener("click", () => {
        if(input.value > 100 || input.value <= 0 || isNaN(input.value)){
             let warning = document.createElement("div");
             warning.classList.add("warning");
             warning.innerHTML = ("* Please input a number 1-100");
             prompt.appendChild(warning);
             return;
        } else{
            const oldWarning = document.querySelector(".warning");
            if(oldWarning){
                oldWarning.remove();
            }
            let userValue = parseInt(input.value)
            createGrid(userValue);
            console.log(userValue);
            return userValue;
        }
    })
}

reset.addEventListener("click", resetGrid);

function resetGrid(){
    const squares = document.querySelectorAll(".grid-square");
    for (const square of squares){
        square.style.backgroundColor = "black";
    }
    createGrid(16);
}

createGrid(16);
getUserInput();
