
//Marcus Does css (Crazy, Super, Sandwich!)

//Justin Does hutvhtamel (html)

//Dean the very awesome, amazing, and handsome bean Does Javascript

//Dawson helps nobody



var Monsters = ["<img src'=../assets/skull.png> Skull",
"<img src='../assets/sandworm.png> Sandworm",
"<img src='../assets/knight.png> Knight",
"<img src='../assets/lobster.png> Lobster",
"<img src='../assets/slime.png> Slime",
"<img src='../assets/shadowskull.png> ShadowSkull",
"<img src='../assets/blueflamesskull.png> BlueSkull"
];


var Healing = ["1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "4", "5"]

var swordpower;

var attackpower;

var MonsterHP;

var PlayerHp = 150;

var monsterdmg;

function nextMonster() {
var Badguys = Math.floor(Math.random()*Monsters.length);
MonsterHP = Math.floor(Math.random()*301);
console.log("Monster " + Monsters[Badguys] + "Spawned");
document.getElementById("monster2").innerHTML = Monsters[Badguys];
document.getElementById('monsterresult').innerHTML = "A "+ Monsters[Badguys] +" Spawned";
document.getElementById('playerresult').innerHTML = "Your Hp: " + PlayerHp;

if (PlayerHp <= 50) {
	console.log("Caution Your HP is at "+ PlayerHp +" Be careful");
	document.getElementById('playerresult').innerHTML = "Caution Your HP is at "+ PlayerHp +" Hp. Be careful";
}
}

function attack(){

var Heal = Math.floor(Math.random()*Healing.length);
attackpower = Math.floor(Math.random()*26);
monsterdmg = Math.floor(Math.random()*10);
if (attackpower <= 4) {
console.log("You Missed");
document.getElementById('monsterresult').innerHTML = "You Missed";
}if (monsterdmg <= 3){
	 	console.log("Monster Missed His attack");
	 	document.getElementById('playerresult').innerHTML = "Monster Missed His attack";
} else {
MonsterHP = MonsterHP - attackpower;
PlayerHp = Heal + PlayerHp - monsterdmg;
console.log("Your attack power is "+ attackpower);
console.log("Monster HP is "+MonsterHP);
console.log("Monster attack power is "+ monsterdmg);
console.log("You Healed "+ Healing[Heal]);
console.log("Your HP is "+PlayerHp);
document.getElementById("monsterresult").innerHTML = "You Did "+ attackpower + " Damage To the Monster now Monster HP: "+MonsterHP;
document.getElementById('playerresult').innerHTML = "Monster Did "+ monsterdmg + " Damage to You."+" You Healed " + Healing[Heal] + " HP " + "Your HP: "+PlayerHp;
} if (MonsterHP <= 0){
console.log("Congratulations You killed the monster!!!");
document.getElementById("monster2").innerHTML = "";
document.getElementById("monsterresult").innerHTML = "Congratulations! You have killed the Monster!";
	 }

	 if (PlayerHp <= 0) {
	 	console.log("You Lost " + "Game Over " + "Press control and r to restart Game");
	 	document.getElementById('monsterresult').innerHTML = "You Lost " + "Game Over " + "Press command and R button to restart Game";
	 	document.getElementById('playerresult').innerHTML = "";
	 }

};
