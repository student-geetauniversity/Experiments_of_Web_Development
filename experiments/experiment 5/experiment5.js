function createBoard(){
   var boardsize = document.getElementById('boardsize').value;
   var displayBoard = document.getElementById('displayBoard');
   displayBoard.style.width = `${boardsize*100}px`;
   displayBoard.style.height = `${boardsize*100}px`;
   displayBoard.innerHTML = '';
   var row,col;
   for(row=0;row<boardsize;row++){
    for(col=0;col<boardsize;col++){
        var boxItem = document.createElement('div');
        boxItem.className = 'box';
        if((row+col)%2===0){
            boxItem.classList.add('white');
            boxItem.innerText = '*';
        }else{
            boxItem.classList.add('black');
            boxItem.innerText = '#';
        }
        displayBoard.appendChild(boxItem);
    }
   }
}