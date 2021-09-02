'use strict'

// variables created to handle button click on home screen
// may not be needed because html handles page transfer
const menuElem = document.getElementById('menu');
// const startButton = document.getElementById('start');
const continueButton = document.getElementById('continue');
// const aboutButton = document.getElementById('about');
const formElem = document.getElementById('userinfo');
const divElem = document.getElementById('leaderboard');
const ulElem = document.createElement('ul');
divElem.appendChild(ulElem);
const h2Elem = document.createElement('h2');
h2Elem.textContent = 'LEADERBOARD';
ulElem.appendChild(h2Elem);

function Player(name, level, lives, day, month, year){
  this.name = name;
  this.level = level;
  this.lives = lives;
  this.day = day;
  this.month = month;
  this.year = year;
}


//const playerArray = Player([]);
Player.playerArray = [];

// We need to use stringified array from local storage. So, time being I am using Player.length in "for loop"
for (let i =0; i< Player.playerArray.length;i++){
  const liElem = document.createElement('li');
  liElem.textContent = "Player's info[i]";
  // We can add text with username, level cleared and how many killers released
  ulElem.appendChild(liElem);
}

function handleSubmit(event) {

  event.preventDefault();
  //console.log(event);
  //console.log(event.target.name.value);
  const lives = 5;
  const level = 0;
  const name = event.target.name.value;
  const month = parseInt(event.target.month.value);
  const day = parseInt(event.target.day.value);
  const year = parseInt(event.target.year.value);
  const player = new Player(name, level, lives, day, month, year);
  Player.playerArray.push(player);
  console.log(Player.playerArray);
  //console.log(name, month, day ,year);
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth()+1;

if (year < (todayYear-18)){
  alert('You are of age');
}
else if(year === (todayYear-18)){
  //__
if(todayMonth > month){
  alert('You are of age');
}else if(todayMonth === month){
  //------
  if (todayDay >= day){ 
    alert('You are of age');
  }
  else if (todayDay < day){
    alert('go away kid')
  }}
  //------
  else if (todayMonth < month){
    alert('GO AWAYYY KID!');
  }
  //_
}else if (year > (todayYear-18)){
  alert('Go away kid!!');
}

  console.log(todayYear, todayDay, todayMonth);


  document.getElementById("userinfo").reset();
}

// function to handle the click even in our home page menu
//may not be needed as buttons handle transfers in html
function handleClick(event){
  const playerLevel = 0;
  const playerLives = 0;
  
  if(event.target === continueButton){
    const previousPlayers = getPlayers();
    for(let player in previousPlayers){
      if(player.name === 0){//players name from form
        playerLevel = player.level;
        playerLives = player.lives;
      }
    }

  }
  
  return playerLevel;
  // here insert code to navigate to the level the player was previously on
  // how are we going to store the level information?
  // how can that stored information be used on this end to navigate to the page the last played
}


formElem.addEventListener('submit', handleSubmit);
menuElem.addEventListener('click', handleClick);
