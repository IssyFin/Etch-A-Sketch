
let length = 10;
// const rowCount = 10;
// const colCount = 10;

const body = document.querySelector('body'); //Here we find the body from the html file and create in memory
const button = document.createElement('button');
button.classList.add('button');
button.textContent = "Resize Grid";
body.appendChild(button);
button.addEventListener('click',()=> resetGrid());
const rowArray = []; //Here we create a space for our rows to live
// const tileArray = [card,card2];

for(i=0;i<length;i++){
    let newRow = document.createElement('row'); //here we create a row
    rowArray[i] = newRow; //we put our new row in our array of rows
    rowArray[i].classList.add('row'); //we give our row the class row from our css file
    let tileArray = [] //here we create a space for our tiles to live 
    body.appendChild(rowArray[i]); //here we pur our row in the body, effectively making it visible and part of the DOM tree
    for (j=0;j<length;j++){
        let newTile = document.createElement('card');
        tileArray[j] = newTile;
        tileArray[j].classList.add('card');
        tileArray[j].addEventListener('mouseenter',()=>event.target.classList.add('flipped'));
        rowArray[i].appendChild(tileArray[j]);
    }
}

function resetGrid(){ //this function resets the grid to a user-defined tile count length
    let tempLength = prompt("Please enter the desired grid length (max is 100)",16);
    if (tempLength>100){alert("Length entered is over 100. Please try again with a valid grid size");}
    else{
        for(i=0;i<length;i++){
            body.removeChild(rowArray[i]);
        }  
    }
    length = tempLength;
    for(i=0;i<tempLength;i++){
        let newRow = document.createElement('row'); //here we create a row
        rowArray[i] = newRow; //we put our new row in our array of rows
        rowArray[i].classList.add('row'); //we give our row the class row from our css file
        let tileArray = [] //here we create a space for our tiles to live 
        body.appendChild(rowArray[i]); //here we pur our row in the body, effectively making it visible and part of the DOM tree
        for (j=0;j<length;j++){
            let newTile = document.createElement('card');
            tileArray[j] = newTile;
            tileArray[j].classList.add('card');
            tileArray[j].addEventListener('mouseenter',()=>event.target.classList.add('flipped'));
            rowArray[i].appendChild(tileArray[j]);
    }
    }
}


