class Game{
    constructor(){
        this.currentPlayer="X";
        this.board = new Array(9).fill(null);
    }
    // box ClickedMethod
    //some One is winning
    // end game
    // change the player
    // restart method
    boxClicked(e){
        //console.log(e.target.id);
        // check if that box is already filled
        // if that place is empty put X|O
        // update the ui
        //check if the player wins
        // check draw
        //  change player
        const id = e.target.id;
        if(!this.board[id]){
            this.board[id]= this.currentPlayer;
           // console.log(this.board);
           e.target.innerText = this.currentPlayer;
           if(this.isWinning){
               //end the game
               // return
           }
           else if(!this.board.some((item)=> item===null)){
               //end the game if it draw and this will only happen when the place will be filled
               // return
           }
           this.changePlayer;
        }
    }
    changePlayer(){
        
    }
}
// creating an instance so that this class give us a object
const game = new Game();

function makeMove(e){
    game.boxClicked(e);
}
const boxes = document.querySelectorAll('.box');
boxes.forEach((box)=> box.addEventListener('click',makeMove));