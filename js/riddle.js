'use strict'

const form1Elem = document.getElementById('form1');

const riddle1Elem = document.getElementById('riddle1')
  const riddle2Elem = document.getElementById('riddle2')
  const riddle3Elem = document.getElementById('riddle3')

getUserName();

function handleSubmit(event) {

  event.preventDefault();
  if(event.target.riddleone.value){
  let riddleone = event.target.riddleone.value;
  riddleone = riddleone.toLowerCase();
  if(riddleone === 'coffin'){
    console.log('you got it right riddle 1');
    riddle1Elem.remove();
    riddle2Elem.classList.toggle('hidden');
  }else{
    console.log('wrrrrrong! Riddle 1 ');
    lives--;
    removeHeart();
  }
  }

//   if(event.target.riddletwo.value){
//   let riddletwo = event.target.riddletwo.value;
//   riddletwo = riddletwo.toLowerCase();
//   if (riddletwo === 'living room'|| riddletwo === 'livingroom'){
//     console.log('you got it right riddle 2');
//     riddle2Elem.remove();
//     riddle3Elem.classList.toggle('hidden');
//   }else{
//     console.log('wrrrrrong! Riddle 2');
//     lives--;
//     removeHeart();
//   }
// }

// if(event.target.riddlethree.value){
//     let riddlethree = event.target.riddlethree.value;
//     riddlethree = riddlethree.toLowerCase();
//     if (riddlethree === 'skull'){
//       console.log('you got it right riddle 3');
//       riddle3Elem.remove();
//       victory();
//     }
//     else{
//       console.log('wrrrrrong! Riddle 3');
//       lives--;
//       removeHeart();
//     }
//   }
//   if(lives === 0){
//     youDied();
//     form1Elem.removeEventListener('submit', handleSubmit)
//   }
}
function handleSubmit2(event){
  if(event.target.riddletwo.value){
    let riddletwo = event.target.riddletwo.value;
    riddletwo = riddletwo.toLowerCase();
    if (riddletwo === 'living room'|| riddletwo === 'livingroom'){
      console.log('you got it right riddle 2');
      riddle2Elem.remove();
      riddle3Elem.classList.toggle('hidden');
    }else{
      console.log('wrrrrrong! Riddle 2');
      lives--;
      removeHeart();
    }
  }
}
function handleSubmit3(event){
  if(event.target.riddlethree.value){
    let riddlethree = event.target.riddlethree.value;
    riddlethree = riddlethree.toLowerCase();
    if (riddlethree === 'skull'){
      console.log('you got it right riddle 3');
      riddle3Elem.remove();
      victory();
    }
    else{
      console.log('wrrrrrong! Riddle 3');
      lives--;
      removeHeart();
    }
  }
  if(lives === 0){
    youDied();
    form1Elem.removeEventListener('submit', handleSubmit)
  }
}

form1Elem.addEventListener('submit', handleSubmit);
form1Elem.addEventListener('submit', handleSubmit2);
form1Elem.addEventListener('submit', handleSubmit3);