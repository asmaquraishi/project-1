
var clicks = 0;
var board = [
    '', '', '',
    '', '', '',
    '', '', ''
]

var countX = 0;
var countO = 0;
var endGame = false;
var oneplayerAuto = false;
// let countScore = 0;
var player = "";

function userclick(event) {


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

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
       
        //displayWinner(player);
        //count++;
    }

    else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+ player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }
        
        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
        //displayWinner(player);
        //count++;
        
    }
    else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
        endGame = true;
        $('h3').text("The Winner is player: "+player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
        
        //displayWinner(player);
        //count++;
        
    }
    else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
       
        //displayWinner(player);
        //count++;
        
    }
    else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
       
        //displayWinner(player);
        //count++;
        
    }
    else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
       
        //displayWinner(player);
        //count++;
        
    }
    else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+player)
         if(player === 'X'){
             countX++;
         }else{
            
                 countO++;
             
         }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
        //displayWinner(player);
        //count++;
        
    }
    else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
        endGame = true;
        $('h3').text("The Winner is Player: "+ player)
        if(player === 'X'){
            countX++;
        }else{
           
                countO++;
            
        }

        $('.scoreO').text("Player O score is: "+(countO))
        $('.scoreX').text("Player X score is: "+(countX))
        
        //displayWinner(player);
        //count++;
        
    }
    else {

        $('h3').text("No winner yet!")
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








/*
function displayWinner(player){
    if (player === 'X'){
        console.log("Player X");

        $('.scoreX').text("Player X score is "+(count+1) )
        $('.scoreO').text("Player O score is "+count)
    }else{
        console.log("Player not X");
        
        $('.scoreO').text("Player O score is "+(count+1))
        $('.scoreX').text("Player X score is "+count) 
    }
}*/



//function onePlayer(){
//oneplayerAuto = true;
//}
  //  $('.onePlayer').on('click', onePlayer)



/*
    let countScore = {
X :'countXwins',
O : 'countOwins'
};

countScore['X'].countXwins = parseInt(localStorage.getItem("countO")) || 0;
countScore['O'].countOwins = parseInt(localStorage.getItem("countX")) || 0;

   function countScoreFunction(){
if (player=== 'X'){

    localStorage.setItem("countX", parseInt(++countScore['X'].countXwins));
}else{

  
    localStorage.setItem("countO", parseInt(++countScore['O'].countOwins));  
}
$('.scoreX').text((countScore['X'].countXwins));
$('.scoreO').text(countScore['O']);
   }*/

   // if (typeof(Storage) !== "undefined") {

   //localStorage.setItem('score', count);
//localStorage.getItem('score'+1)
//$('.countScore').text("Score is " + localStorage.getItem('score'))
      //  if (localStorage.count) {
      //    localStorage.count = Number(localStorage.count)+1;
      //  } else {
     //     localStorage.count = 1;
   //     }
  //  $('.countScore').text("Score is " + count)
 //   }
//count++;
