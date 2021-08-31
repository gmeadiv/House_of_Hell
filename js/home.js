'use strict'

const formElem = document.getElementById('userinfo');
const divElem = document.getElementById('leaderboard');
const ulElem = document.createElement('ul');
divElem.appendChild(ulElem);
const h2Elem = document.createElement('h2');
h2Elem.textContent = 'LEADERBOARD';
ulElem.appendChild(h2Elem);
// We need to use stringified array from local storage. So, time being I am using Player.length in "for loop"
for (let i =0; i< Player.length;i++){
  const liElem = document.createElement('li');
  liElem.textContent = "Player's info[i]";
  // We can add text with username, level cleared and how many killers released
  ulElem.appendChild(liElem);
}

function handleSubmit(event) {

  event.preventDefault();
  //console.log(event);
  console.log(event.target.name.value);
  const name = event.target.name.value;
  const month = parseInt(event.target.month.value);
  const day = parseInt(event.target.day.value);
  const year = parseInt(event.target.year.value);
  console.log(name, month, day ,year);
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


formElem.addEventListener('submit', handleSubmit);