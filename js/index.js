 
//Marcus Does css (Crazy, Super, Sandwich!)

//Justin Does hutvhtamel (html)

//Dean the very awesome, amazing, and handsome bean Does Javascript

//Dawson helps nobody



var Monsters = ["<img src=../assets/Lobster.png>",
"<img src=../assets/Knight.png>",
"<img src=../assets/Slime.png>"]

var swordpower;

var bowpower;

var MonsterHP;


function nextMonster() {
var Badguys = Math.floor(Math.random()*Monsters.length);
MonsterHP = Math.floor(Math.random()*301)
console.log("Monster " + Monsters[Badguys] + "Spawned");
document.getElementById("monster2").innerHTML = "<h1>" + Monsters[Badguys];
}

function bow(){

bowpower = Math.floor(Math.random()*11);
if (bowpower <= 4) {
console.log("You Missed");
document.getElementById('result').innerHTML = "You Missed";
} else {
MonsterHP = MonsterHP - bowpower;
console.log("Your attack power is "+ bowpower);
console.log("Monster HP is "+MonsterHP);
document.getElementById("result").innerHTML = "Monster HP: "+MonsterHP;
} if (MonsterHP <= 0){
console.log("Congratulations You killed the monster!!!");
document.getElementById("monster2").innerHTML = "";
document.getElementById("result").innerHTML = "Congratulations! You have killed the Monster!";
	 }

}




<<<<<<< HEAD
function WPressed() {
var element = document.getElementById("spear");
element.style.top = parseInt(element.style.top) - 15 + 'px';
=======
function upArrowPressed() {
var element = document.getElementById("player");
element.style.top = parseInt(element.style.top) - 5 + 'px';
>>>>>>> origin/master
}



<<<<<<< HEAD
function SPressed() {
var element = document.getElementById("spear");
element.style.top = parseInt(element.style.top) + 15 + 'px';
=======
function downArrowPressed() {
var element = document.getElementById("player");
element.style.top = parseInt(element.style.top) + 5 + 'px';
>>>>>>> origin/master
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



function docReady(){
window.addEventListener('keydown', moveSelection);
<<<<<<< HEAD
};


function arrowanimation() {
	var arrow = document.getElementById("arrow")
	if (spear.pos > arrow.pos) {
	element.style.top = parseInt(element.style.top) + 15 + 'px';

	}
}
=======
};
>>>>>>> origin/master
