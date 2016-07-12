//Marcus Does css (Crazy, Super, Sandwich!)

//Justin Does hutvhtamel (html)

//Dean the very awesome, amazing, and handsome bean Does Javascript

//Dawson helps nobody



function startGame(){

document.getElementById('play-button').innerHTML = ""

document.getElementById('monster').innerHTML = ""

document.getElementById('result').innerHTML = ""

}



var Monsters = ["<img src=../assets/lobster.png>",

"<img src=../assets/knight.png>",

"<img src=../assets/slime.png>"]

var attackPower;



var bow = [0,0,0,0,10,20,50]



var MonsterHP;



function nextMonster() {

var Badguys = Math.floor(Math.random()*Monsters.length);

MonsterHP = Math.floor(Math.random()*301)

console.log("Monster " + Monsters[Badguys] + "Spawned");

document.getElementById("monster2").innerHTML = "<h1>" + Monsters[Badguys];

}



var attack = function(){

attackPower = Math.floor(Math.random()*14);

if (attackPower <= 3) {

console.log("You Missed");

document.getElementById('result').innerHTML = "You Missed";

} else {

MonsterHP = MonsterHP - attackPower;

console.log("Your attack power is "+ attackPower);

console.log("Monster HP is "+MonsterHP);

document.getElementById("result").innerHTML = "Monster HP: "+MonsterHP;

} if (MonsterHP <= 0){

console.log("Congratulations You killed the monster!!!");

document.getElementById("monster2").innerHTML = "";

document.getElementById("result").innerHTML = "Congratulations! You have killed the Monster!";



}

}




function upArrowPressed() {

var element = document.getElementById("player");

element.style.top = parseInt(element.style.top) - 5 + 'px';

}



function downArrowPressed() {

var element = document.getElementById("player");

element.style.top = parseInt(element.style.top) + 5 + 'px';

}



function moveSelection(evt) {

switch (evt.keyCode) {

case 87:

upArrowPressed();

break

case 83:

downArrowPressed();

break;

}

};



function docReady() 

{


window.addEventListener('keydown', moveSelection);

}