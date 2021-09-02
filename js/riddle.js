'use strict'

function riddle1(){
  const answer1 = document.getElementById('answer1');
  let answer1Lowercase = answer1.toLowerCase();
  if(answer1Lowercase.search("coffin") === -1){
    alert('you got it wrong')
    lives--;
    removeHeart()
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      youDied();
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

  const answer2 = document.getElementById('answer2');
  let answer2Lowercase = answer2.toLowerCase();
  if(answer2Lowercase.search("living room" || "livingroom") === -1){
    alert('you got it wrong')
    lives--;
    removeHeart()
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      youDied();
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
  const answer3 = document.getElementById('answer3');
  let answer3Lowercase = answer3.toLowerCase();
  if(answer3Lowercase.search("skull") === -1){
    console.log('you got it wrong')
    lives--;
    removeHeart()
    console.log(lives)
    //send to end of game page
    if(lives === 0){
      youDied();
      //insert a link to jump to the game over you lose page
    }
    else{
    riddle3();
    }
  }
  else{
    console.log('you got it right')
  }
}

riddle1();
riddle2();
riddle3();
viewPageButton(victory);
