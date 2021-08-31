'use strict'

function riddle1(){

  const answer = prompt('The person who built it sold it. The person who bought it never used it. The person who used it never saw it. What is it?');
  let answerLowercase = answer.toLowerCase();
  if(answerLowercase.search("coffin") === -1){
    alert('you got it wrong')
    lives--;
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      alert('you died')
      //insert a link to jump to the game over you lose page
    }
    else{
    riddle1();
    }
  }
  else{
    alert('you got it right')
  }
}
function riddle2(){

  const answer = prompt('What room do ghosts avoid?');
  let answerLowercase = answer.toLowerCase();
  if(answerLowercase.search("living room" || "livingroom") === -1){
    alert('you got it wrong')
    lives--;
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      alert('you died')
      //insert a link to jump to the game over you lose page
    }
    else{
    riddle2();
    }
  }
  else{
    alert('you got it right')
  }
}
function riddle3(){

  const answer = prompt('I don\'t have eyes, but once I did see. Once I had thoughts, but now I\'m white and empty.');
  let answerLowercase = answer.toLowerCase();
  if(answerLowercase.search("skull") === -1){
    alert('you got it wrong')
    lives--;
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      alert('you died')
      //insert a link to jump to the game over you lose page
    }
    else{
    riddle3();
    }
  }
  else{
    alert('you got it right')
  }
}

riddle1();
riddle2();
riddle3();
