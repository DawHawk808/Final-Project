
//Marcus Does css (Crazy, Super, Sandwich!)

//Justin Does hutvhtamel (html)

//Dean the very awesome, amazing, and handsome bean Does Javascript

//Dawson helps nobody



var Monsters = ["<img src=../assets/Lobster.png>",
"<img src=../assets/Knight.png>",
"<img src=../assets/Slime.png>",
"<img src=../assets/skull.png>"
];

var Healing = ["1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "4", "5"]


var swordpower;

var bowpower;

var bowpower;

var MonsterHP;

var PlayerHp = 150;

var monsterdmg;

function nextMonster() {
var Badguys = Math.floor(Math.random()*Monsters.length);
MonsterHP = Math.floor(Math.random()*301)
console.log("Monster " + Monsters[Badguys] + "Spawned");
document.getElementById("monster2").innerHTML = "<h1>" + Monsters[Badguys];
}

function bow(){

var Heal = Math.floor(Math.random()*Healing.length);
bowpower = Math.floor(Math.random()*26);
monsterdmg = Math.floor(Math.random()*10);
if (bowpower <= 7) {
console.log("You Missed");
document.getElementById('monsterresult').innerHTML = "You Missed";
}if (monsterdmg <= 3){
	 	console.log("Monster Missed His attack");
	 	document.getElementById('playerresult').innerHTML = "Monster Missed His attack";
} else {
MonsterHP = MonsterHP - bowpower;
PlayerHp = Heal + PlayerHp - monsterdmg;
console.log("Your attack power is "+ bowpower);
console.log("Monster HP is "+MonsterHP);
console.log("Monster attack power is "+ monsterdmg);
console.log("You Healed "+ Healing[Heal]);
console.log("Your HP is "+PlayerHp);
document.getElementById("monsterresult").innerHTML = "You Did "+ bowpower + " Damage To the Monster now Monster HP: "+MonsterHP;
document.getElementById('playerresult').innerHTML = "Monster Did "+ monsterdmg + " Damage to You."+" You Healed " + Healing[Heal] + " HP " + "Your HP: "+PlayerHp;
} if (MonsterHP <= 0){
console.log("Congratulations You killed the monster!!!");
document.getElementById("monster2").innerHTML = "";
document.getElementById("monsterresult").innerHTML = "Congratulations! You have killed the Monster!";
	 }

	 if (PlayerHp <= 0) {
	 	console.log("You Lost " + "Game Over " + "Press control and r to restart Game");
	 	document.getElementById('monsterresult').innerHTML = "You Lost " + "Game Over " + "Press command and R button to restart Game";
	 	document.getElementById('yourplayer').innerHTML = "";
	 }

};
