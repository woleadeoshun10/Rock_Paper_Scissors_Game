function buttonClick(playerpick){
  let player1, player2, player3;

  if(playerpick === "Rock") player1 = 1;
  if(playerpick === "Paper") player2 = 2;
  if(playerpick === "Scissors") player3 = 3;

  let computerPick = Math.floor(Math.random() * 3) + 1;

  if(computerPick === player1 || computerPick === player2 || computerPick === player3){
    alert("Computer picked " + playerpick + ", Its a tie!")
  } else if(player1 && computerPick === 3){
    alert("Computer picked Scissors, You win!");
  } else if(player2 && computerPick === 1){
    alert("Computer picked Rock, You win!");
  } else if(player3 && computerPick === 2){
    alert("Computer picked Paper, You win!");
  } else if(player1 && computerPick === 2){
    alert("Computer picked Paper, You lose!");
  }else if(player2 && computerPick === 3){
    alert("Computer picked Scissors, You lose!");
  }else if(player3 && computerPick === 1){
    alert("Computer picked Rock, You lose!");
  }
  

}
