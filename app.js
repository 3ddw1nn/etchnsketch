const container = document.getElementById("container");

// This variable will define the size of the grid
let n = 16;

// This function will create and append rows as divs with a class of "gridRow"
// inside the #container by using a loop
function makeRows() {
    for (let i = 0; i < n; i++) {
        let row = document.createElement("div");
        row.classList.add("gridRow");
        container.append(row);
    };
};
makeRows();

//This will select all of the newly created rows with a class of "gridRow"
// const gridRows = document.querySelectorAll(".gridRow")

//This function will create and append columns inside each row with a class
//of "gridColumn" by using a loop
function makeColumns() {
    const gridRows = document.querySelectorAll(".gridRow")
    gridRows.forEach(forEachRow => {
    for(let i = 0; i < n; i++) {
        let newColumn = document.createElement("div");
        newColumn.classList.add("gridColumn");
        forEachRow.append(newColumn);
    };}    
);};
makeColumns();
hoverColor();
//This will select all grid columns

//this will seleach grid cell and run a hover function
    function hoverColor(){
        const gridCell = document.querySelectorAll(".gridColumn");
        gridCell.forEach(cell => { 
            cell.addEventListener("mouseenter", e => {
                cell.setAttribute("style", "background-color:black;")
            });
        }
     )};


//This is will allow the user to set the grid size 
//after clicking the Grid Size button

function setGridSize() {
    n = prompt("Set your Grid Size", "")
    if (n < 0) {    
      alert ('Please enter a number higher than 1');
    } else if (n > 100) {
      alert('Please enter a number less than 100');
    } else {
        removeGrid();
        makeRows();
        makeColumns();
        hoverColor();
    }
}


//This function will remove Rows and Columns
function removeGrid(){
    let defaultGrid = document.getElementById('container');
    while ( defaultGrid.firstChild ) {
        defaultGrid.removeChild( defaultGrid.firstChild );
    }
}
let resetGame = document.getElementById("reset").addEventListener("click", reset);
function reset(){
    let resetGrid = document.getElementById('container');
    while ( resetGrid.firstChild ) {
        resetGrid.removeChild( resetGrid.firstChild );
    } 
    makeRows();
    makeColumns();
    hoverColor();  
}
console.log(container);
console.log(hoverColor);


