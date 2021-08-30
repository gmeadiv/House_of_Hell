'use strict'
let lives = 5;
const headsOrTailsElem = document.getElementById('headsOrTails');
const headsElem = document.getElementById('heads');
const tailsElem = document.getElementById('tails');
const rockElem = document.getElementById('rock')


function Player(name, level){
  this.name = name;
  this.level;
}

Player.playerArray = [];

function storePlayers(){
  const stringPlayers = JSON.stringify(Player.playerArray);
  localStorage.setPlayers('players', storePlayers);
}

function headsOrTails(){
  return Math.floor(Math.random() * (3 - 1) + 1);
  // if(max === 0 ){

  // }
  // else if(max === 1){

  // }
}
headsOrTailsElem.addEventListener('click', headsOrTailsHandler);
function headsOrTailsHandler(event){
  if(lives === 0){
    headsOrTailsElem.removeEventListener('click', headsOrTailsHandler)
    alert('you died')
    //insert a link to jump to the game over you lose page
  }
  while(lives > 0){
  const tossResult = headsOrTails()
  //headsOrTailsElem.addEventListener('click', headsOrTailsHandler);
  // console.log(event.target)
  // console.log(tossResult)
    if(event.target === headsElem){
      if(tossResult === 1){
        console.log('you got it right')
        headsOrTailsElem.removeEventListener('click', headsOrTailsHandler)
        break;
      }
      else if(tossResult === 2)
      {
        console.log('you got it wrong it was tails')
        lives--;
        break;
      }
    }
    if (event.target === tailsElem){
      if(tossResult === 2){
      console.log('you got it right')
      headsOrTailsElem.removeEventListener('click', headsOrTailsHandler)
      break;
      }
      else if(tossResult === 1){
        console.log('you got it wrong it was heads')
        lives--;
        break;
      }
    }
    }
}