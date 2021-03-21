const prompt = require('prompt-sync')();
 

 let board = [' ',' ',' ',' ',' ',' ',' ',' ',' ']
 let gameOver = false
 
 const printBoard = (board) => {
     console.log('                |                |                \n')
     console.log('        '+board[0]+'       |        '+board[1]+'       |        '+board[2]+'       \n')
     console.log('                |                |                \n')
     console.log('----------------|----------------|----------------\n')
     console.log('                |                |                \n')
     console.log('        '+board[3]+'       |        '+board[4]+'       |        '+board[5]+'       \n')
     console.log('                |                |                \n')
     console.log('----------------|----------------|----------------\n')
     console.log('                |                |                \n')
     console.log('        '+board[6]+'       |        '+board[7]+'       |        '+board[8]+'       \n')
     console.log('                |                |                \n')
 }


 const checkWin = (square) => {
      //console.log(square,pl)
      let val = 2;

        if (square[0] == square[1]  && square[1] == square[2] && square[0] == 'o')
            val = 1
        else if (square[3] == square[4] && square[4] == square[5] && square[3] == 'o')
            val =  1;
        else if (square[6] == square[7] && square[7] == square[8] && square[6] == 'o')
            val= 1;
        else if (square[0] == square[3] && square[3] == square[6] && square[0] == 'o')
            val= 1;
        else if (square[1] == square[4] && square[4] == square[7] && square[1] == 'o')
            val= 1;
        else if (square[2] == square[5] && square[5] == square[8] && square[2] == 'o')
            val= 1;
        else if (square[0] == square[4] && square[4] == square[8] && square[0] == 'o')
            val= 1;
        else if (square[2] == square[4] && square[4] == square[6] && square[2] == 'o')
            val= 1;
        else if (square[0] == square[1] && square[1] == square[2] && square[0] == 'x')
            val = -1
        else if (square[3] == square[4] && square[4] == square[5] && square[3] == 'x')
            val =  -1;
        else if (square[6] == square[7] && square[7] == square[8] && square[6] == 'x')
            val= -1;
        else if (square[0] == square[3] && square[3] == square[6] && square[0] == 'x')
            val= -1;
        else if (square[1] == square[4] && square[4] == square[7] && square[1] == 'x')
            val= -1;
        else if (square[2] == square[5] && square[5] == square[8] && square[2] == 'x')
            val= -1;
        else if (square[0] == square[4] && square[4] == square[8] && square[0] == 'x')
            val= -1;
        else if (square[2] == square[4] && square[4] == square[6] && square[2] == 'x')
            val= -1;
        else if(!square.includes(' '))
            val = 0; 

        
        return val
    
    
 }

 const bestMove = () => {
 
    let bestScore = -Infinity
    let bestMove 
    for(let i = 0 ; i<9;++i) {
        if(board[i] ==  ' '){
            board[i] = 'o'
            let score = minimax(board,0,false)
            board[i] = ' ' 
            if(score > bestScore) {
                bestScore  = score
                bestMove = i
                console.log(bestMove)
            }
            
        }

    } board[bestMove] = 'o'
}


const minimax = (board,depth,isMax) => {

   let result = checkWin(board)
   if(result !== 2) {
       return result
   }

   if(isMax) {
       let bestScore = -Infinity
       for(let i = 0;i<9;++i) {
          if(board[i] == ' '){
              board[i] = 'o'
              let score = minimax(board,depth+1,false)
              board[i] = ' '
              bestScore = Math.max(score,bestScore)
          }
       } return bestScore;
   } else {
       let bestScore = Infinity
       for(let i = 0;i<9;++i) {
          if(board[i] == ' '){
              board[i] = 'x'
              let score = minimax(board,depth+1,true)
              board[i] = ' '
              bestScore = Math.min(score,bestScore)
          }
       } return bestScore; 
   }
} 



 while(!gameOver){
     printBoard(board)
  
     let location = prompt('Where do you want to mark ?');
  
     location = parseInt(location) 
     if(board[location] == ' '){
  
     board[location] = 'x'

  
     if(checkWin(board) == 1){
        console.log('**************YOU WON!!!!!!*************\n\n')
        printBoard(board)
        gameOver = true
     }
     
     else {
        bestMove(); 
        if(checkWin(board,'o') == 1){

        console.log('COMP WON!!')
        printBoard(board)
        gameOver = true
    
        }
    }
     
    } else {
        console.log('The position is already taken')
    }

    if(checkWin(board) == 0){
        console.log('Its a draw')
        gameOver = true
    }     
     
 }


