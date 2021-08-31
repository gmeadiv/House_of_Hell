'use strict'

let lives = 5;
const rockPaperScissorsElem = document.getElementById('rockPaperScissors');

const rockElem = document.getElementById('rock');
const paperElem = document.getElementById('paper');
const scissorsElem = document.getElementById('scissors');


rockPaperScissorsElem.addEventListener('click', rockPaperScissorsHandler);
function rockPaperScissorsHandler(event){
  if(lives === 0){
    rockPaperScissorsElem.removeEventListener('click', rockPaperScissorsHandler);
    alert('5 chances gone');
    //insert a link to jump to the game over you lose page
  }
  while(lives > 0){
    if(event.target === rockElem){
        console.log('dead rock');
        lives--;
        break;
      }else if(event.target === scissorsElem){
        console.log('dead scissr');
        lives--;
        break;
      } else if(event.target === paperElem){
        console.log('alive');
        rockPaperScissorsElem.removeEventListener('click', rockPaperScissorsHandler);
        break;
      }
    }
  }