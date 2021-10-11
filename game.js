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
               this.endGame();
               return;
           }
           else if(!this.board.some((item)=> item===null)){
               //end the game if it draw and this will only happen when the place will be filled
               // return
               this.endGame("draw");
                return;
           }
           //console.log("h");
           this.changePlayer();
        }
    }
    endGame(result){
        //change the Play to win or draw
        //remove the event listner
        play.innerText = result ===  "draw"?"Draw" :this.currentPlayer +" wins";
        boxes.forEach((box)=> removeEventListener("click",makeMove));
    }
    changePlayer(){
        this.currentPlayer = this.currentPlayer === "X"?"O":"X";
        play.innerText = this.currentPlayer + " turn"
    }
    isWinning(){
        if(this.currentPlayer== this.board[0] && this.board[0]==this.board[1] && this.board[1]==this.board[2]){
            return true;
        }
        if(this.currentPlayer== this.board[3] && this.board[3]==this.board[4] && this.board[4]==this.board[5]){
            return true;
        }
        if(this.currentPlayer== this.board[6] && this.board[6]==this.board[7] && this.board[7]==this.board[8]){
            return true;
        }
        if(this.currentPlayer== this.board[0] && this.board[0]==this.board[3] && this.board[3]==this.board[6]){
            return true;
        }
        if(this.currentPlayer== this.board[1] && this.board[1]==this.board[4] && this.board[4]==this.board[7]){
            return true;
        }
        if(this.currentPlayer== this.board[2] && this.board[2]==this.board[5] && this.board[5]==this.board[8]){
            return true;
        }
        if(this.currentPlayer== this.board[0] && this.board[0]==this.board[4] && this.board[4]==this.board[8]){
            return true;
        }
        if(this.currentPlayer== this.board[2] && this.board[2]==this.board[4] && this.board[4]==this.board[6]){
            return true;
        }
        return false;
    }
        restartGame(){
            //change the current player
            // fill null
            //update ui to empty
            // text change to play Game
            //add event listener
            this.currentPlayer= "X";
            this.board.fill(null);
            boxes.forEach((box)=>box.innerText="");
            play.innerText = "Play Game";
            boxes.forEach((box)=>box.addEventListener('click',makeMove));
        }
}
// creating an instance so that this class give us a object
const game = new Game();

function makeMove(e){
    game.boxClicked(e);
}
function restartGame(){
    game.restartGame();
}
const restart = document.getElementById("restart");
restart.addEventListener('click',restartGame);
const boxes = document.querySelectorAll('.box');
boxes.forEach((box)=> box.addEventListener('click', makeMove));