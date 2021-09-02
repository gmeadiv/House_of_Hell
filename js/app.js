'use strict'
let lives = 5;


function removeHeart(){
  const firstHeartElem = document.getElementById('firstHeart')
  const secondHeartElem = document.getElementById('secondHeart')
  const thirdHeartElem = document.getElementById('thirdHeart')
  const fourthHeartElem = document.getElementById('fourthHeart')
  const fifthHeartElem = document.getElementById('fifthHeart')
  if(lives === 4){
    fifthHeartElem.remove();
  }
  else if(lives === 3){
    fourthHeartElem.remove();
  }
  else if(lives === 2){
    thirdHeartElem.remove();
  }
  else if(lives === 1){
    secondHeartElem.remove();
  }
  else if(lives === 0){
    firstHeartElem.remove();
  }
}

// function Player(name, level, lives, day, month, year){
//   this.name = name;
//   this.level = level;
//   this.lives = lives;
//   this.day = day;
//   this.month = month;
//   this.year = year;
// }

// Player.playerArray = [];

function storePlayers(){
  const stringPlayers = JSON.stringify(Player.playerArray);
  localStorage.setPlayers('players', storePlayers);
}

// Retrieves players from the local storage and parses and creates new player
function getPlayers(){
  const stringPlayers = localStorage.getItem('players');
  if(stringPlayers){
    const parsedPlayers = JSON.parse(stringPlayers);
    for(let player of parsedPlayers){
      const myPlayer = new Player(player.name, player.level);
      Player.playerArray.push(myPlayer);
    }
  }
  return Player.playerArray;
}

function viewPageButton(room){
  const room2ButtonElem = document.getElementById('toRoshambo');
  const room3ButtonElem = document.getElementById('toRiddler');
  if(room === 2){
    room2ButtonElem.classList.toggle('hidden');
  }
  else if(room === 3){
    room3ButtonElem.classList.toggle('hidden');
  }
  else if(room === victory){
    victoryButtonElem.classList.toggle('hidden');
  }
}
function youDied(){
  const youDiedElem = document.getElementById('youDied')
  {
    if(lives === 0){
      youDiedElem.classList.toggle('hidden')
    }
  }
}