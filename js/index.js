//Marcus Does css
//Justin Does ur mom (html)
//Dean the very awesome, amazing, and handsome bean Does Javascript
//Dawson helps everybody else

var attackPower;

var bow = [0,0,0,0,10,20,50]

var monsterHP = 100;

var nextMonster = function() {
	document.getElementById('monster').innerHTML = "Slime,"
}

var attack = function(){
	if (monsterHP <= 0){
		console.log("Your Monster's Innards Became Their Outards By Your Attack!");
		document.getElementById("monster").innerHTML = "";
		document.getElementById("result").innerHTML = "Your Monster's Innards Became Their Outards By Your Attack!";

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
		document.getElementById("result").innerHTML = "Your Monster is Dead!";
		}
	}