//Marcus Does css
//Justin Does ur mom (html)
//Dean the very awesome, amazing, and handsome bean Does Javascript
//Dawson helps everybody else

function = startGame(){
	document.getElementById('play-button').innerHTML = ""
	document.getElementById('monster').innerHTML = ""
	document.getElementById('result').innerHTML = ""
}

var Monsters = ["Lobster", "Knight", "Slime"]

var attackPower;

var bow = [0,0,0,0,10,20,50]

var monsterHP = 100;

var nextMonster = function() {
	Math.floor(Math.random()*Monsters.length);
}

var attack = function(){
	if (monsterHP <= 0){
		console.log("Congratulations! You Died!!");
		document.getElementById("monster").innerHTML = "";
		document.getElementById("result").innerHTML = "Congratulations! You Died!";

	} else {
		attackPower = Math.floor(Math.random()*14);
		monsterHP = monsterHP - attackPower;
		console.log("Your attack power is "+ attackPower);
		console.log("Monster HP is "+monsterHP);
		document.getElementById("result").innerHTML = "Monster HP: "+monsterHP;
	}
}

var monsterCheck = function(){
	if (monsterHP <= 0){
		console.log("Your Monster is dead");
		document.getElementById("monster").innerHTML = "";
		document.getElementById("result").innerHTML = "Congratulations! You have killed the Monster!";
		}
	}