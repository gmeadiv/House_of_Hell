'use strict'
//let lives = 5;
const rockPaperScissorsElem = document.getElementById('rockPaperScissors');

const rockElem = document.getElementById('rock');
const paperElem = document.getElementById('paper');
const scissorsElem = document.getElementById('scissors');

rockPaperScissorsElem.addEventListener('click', rockPaperScissorsHandler);
function viewPageButton(room){
  const room2ButtonElem = document.getElementById('toRoom2');
  const room3ButtonElem = document.getElementById('toRoom3');
  if(room === 2){
    room2ButtonElem.classList.toggle('hidden');
  }
  else if(room === 3){
    room3ButtonElem.classList.toggle('hidden');
  }
}
function rockPaperScissorsHandler(event){
  while(lives > 0){
    if(event.target === rockElem){
        console.log('dead rock');
        lives--;
        removeHeart()
        break;
      }else if(event.target === scissorsElem){
        console.log('dead scissr');
        lives--;
        removeHeart()
        break;
      } else if(event.target === paperElem){
        console.log('alive');
        viewPageButton(3);
        rockPaperScissorsElem.removeEventListener('click', rockPaperScissorsHandler);
        break;
      }
    }
    if(lives === 0){
      rockPaperScissorsElem.removeEventListener('click', rockPaperScissorsHandler);
      youDied();
      //insert a link to jump to the game over you lose page
    }
  }