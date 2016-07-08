//Marcus Does css (Crazy, Super, Sandwich!)
//Justin Does hutvhtamel (html)
//Dean the very awesome, amazing, and handsome bean Does Javascript
//Dawson helps nobody

function startGame(){
	document.getElementById('play-button').innerHTML = ""
	document.getElementById('monster').innerHTML = ""
	document.getElementById('result').innerHTML = ""
}

var Monsters = ["<img src='../assets/lobster.png>",
"<img src='../assets/knight.png>",
"<img src='../assets/slime.png>"]

var attackPower;

var bow = [0,0,0,0,10,20,50]

var monsterHP = 100;

function NextMonster() {
	Math.floor(Math.random()*Monsters.length);

}

var attack = function(){
	if (monsterHP <= 0){
		console.log("Congratulations! You Died!!");
		document.getElementById("monster2").innerHTML = "";
		document.getElementById("result").innerHTML = "Congratulations! You have killed the Monster!";

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
		document.getElementById("monster2").innerHTML = "";
		document.getElementById("result").innerHTML = "Congratulations! You have killed the Monster!";
		}
	}