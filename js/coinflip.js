'use strict'
const headsOrTailsElem = document.getElementById('headsOrTails');
const headsElem = document.getElementById('heads');
const tailsElem = document.getElementById('tails');


function headsOrTails(){
  return Math.floor(Math.random() * (3 - 1) + 1);
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
    if(event.target === headsElem){
      if(tossResult === 1){
        console.log('you got it right')
        headsOrTailsElem.removeEventListener('click', headsOrTailsHandler)
        viewPageButton(2);
        break;
      }
      else if(tossResult === 2)
      {
        console.log('you got it wrong it was tails')
        lives--;
        removeHeart();
        break;
      }
    }
    if (event.target === tailsElem){
      if(tossResult === 2){
      console.log('you got it right')
      headsOrTailsElem.removeEventListener('click', headsOrTailsHandler)
      viewPageButton(2);
      break;
      }
      else if(tossResult === 1){
        console.log('you got it wrong it was heads')
        lives--;
        removeHeart();
        break;
      }
    }
    }
}