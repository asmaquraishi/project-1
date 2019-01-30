
var clicks = 0;
var board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

var countX = 0;
var countO = 0;
var endGame = false;
var player = "";

function userclick(event) {

    if ($(event.target).text() === '') {

        if (clicks == 0 && endGame == false ) {
            // first click
            $(event.target).text('X')
            player = $(event.target).text();
            board[event.target.id] = player
        }


        else if (clicks == 1 && endGame == false) {
            $(event.target).text('O')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 2 && endGame == false) {
            $(event.target).text('X')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 3 && endGame == false) {
            $(event.target).text('O')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 4 && endGame == false) {
            $(event.target).text('X')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 5 && endGame == false) {
            $(event.target).text('O')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 6 && endGame == false) {
            $(event.target).text('X')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 7 && endGame == false) {
            $(event.target).text('O')
        player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 8 && endGame == false) {
            $(event.target).text('X')
            player = $(event.target).text();
            board[event.target.id] = player
        
        }
        else if (clicks == 9 && endGame == false) {
            $(event.target).text('O')
            player = $(event.target).text();
            board[event.target.id] = player
            
        }

        ++clicks;
        // if top row win
        if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    
          endGame = true;

            $('h3').text("The Winner is Player: "+ player);
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
        
            
        }

        else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+ player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }
            
            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
            
            
        }
        else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
            endGame = true;
            $('h3').text("The Winner is player: "+player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
            
           
            
        }
        else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
        
            
        }
        else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
        
            
            
        }
        else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
        
        }
        else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+player)
            if(player === 'X'){
                countX++;
            }else{
                
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
            
            
        }
        else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
            endGame = true;
            $('h3').text("The Winner is Player: "+ player)
            if(player === 'X'){
                countX++;
            }else{
            
                    countO++;
                
            }

            $('.scoreO').text("Player O score: "+(countO))
            $('.scoreX').text("Player X score: "+(countX))
            
            
            
        }
        else {

            $('h3').text("No winner yet!")
        }
    }
  
}


$('.button').on('click', userclick)

function newGame() {
    
  for (var i=0; i<=8; i++){
      $('#'+i).text("");
  }
board = [
    '', '', '',
    '', '', '',
    '', '', ''
];
 clicks = 0;
endGame = false;
player = "";
}
$('.newGame').on('click', newGame)

