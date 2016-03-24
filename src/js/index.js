// Javascript Entry Point


class NicolasCage {
	constructor(attackMultiplier, dodgeMultiplier){
		this.attackMultiplier = attackMultiplier;
		this.dodgeMultiplier = dodgeMultiplier;
		this.actingAbility = "unknown";
		this.height = "6 feet tall";
		this.talksAtRandomVolumns = true;
		this.attackAbility = function(){
			return Math.floor(Math.random() * this.attackMultiplier);
		};
		this.dodgeAbility = function(){
			return Math.random() * this.dodgeMultiplier;
		};
	}
}

var realNicolasCage = new NicolasCage(10, 2);
realNicolasCage.name = "real Nicolas Cage";
// realNicolasCage.attackAbility(10);

var nationalTreasureNicolasCage = new NicolasCage(10, 5);
nationalTreasureNicolasCage.name = "National Treasure Nicolas Cage";

var lordOfWarNicolasCage = new NicolasCage(25, 2);
lordOfWarNicolasCage.name = "Lord of War Nicolas Cage";

var wickerManNicolasCage = new NicolasCage(15, 0);
wickerManNicolasCage.name = "Wicker Man Nicolas Cage";

var ghostRiderNicolasCage = new NicolasCage(18, 8);
ghostRiderNicolasCage.name = "Ghost Rider Nicolas Cage";




var selectNicolasCage = document.querySelector('#nicolas-cage');
var selectNationalTreasure = document.querySelector('#national-treasure');
var selectLordOfWar = document.querySelector('#lord-of-war');
var selectGhost = document.querySelector('#ghost-rider');
var selectWicker = document.querySelector('#wicker-man');


var playerInfo = document.querySelector('.player-info div');
var opponentInfo = document.querySelector('.opponent-info div');

var thePlayers = [];


selectNicolasCage.onclick = function addPlayer (){
	if(thePlayers.length === 0){
		playerInfo.innerHTML = "The Real Nicolas Cage";
	}else{
		opponentInfo.innerHTML = "The Real Nicolas Cage";
	}

	thePlayers.push(realNicolasCage);

	
};

selectNationalTreasure.onclick = function addPlayer (){
	if(thePlayers.length === 0){
		playerInfo.innerHTML = "National Treasure Nicolas Cage";
	}else{
		opponentInfo.innerHTML = "National Treasure Nicolas Cage";
	}

	thePlayers.push(nationalTreasureNicolasCage);
};

selectLordOfWar.onclick = function addPlayer (){
	if(thePlayers.length === 0){
		playerInfo.innerHTML = "Lord of War Nicolas Cage";
	}else{
		opponentInfo.innerHTML = "Lord of War Nicolas Cage";
	}

	thePlayers.push(lordOfWarNicolasCage);
};

selectGhost.onclick = function addPlayer (){
	if(thePlayers.length === 0){
		playerInfo.innerHTML = "Ghost Rider Nicolas Cage";
	}else{
		opponentInfo.innerHTML = "Ghost Rider Nicolas Cage";
	}

	thePlayers.push(ghostRiderNicolasCage);
};

selectWicker.onclick = function addPlayer (){
	if(thePlayers.length === 0){
		playerInfo.innerHTML = "Wicker Man Nicolas Cage";
	}else{
		opponentInfo.innerHTML = "Wicker Man Nicolas Cage";
	}

	thePlayers.push(wickerManNicolasCage);
};




var userScore = document.querySelector('#userScore');
var computerNicScore = document.querySelector('#computerNicScore');


var button = document.querySelector('button');

var currentUserScore = 100;
var currentComputerNicScore = 100;

var round =0;

button.onclick = function updateScore (){

	round+=1;
	
	function userStatus(){
		if (thePlayers[0].dodgeAbility() >= thePlayers[1].attackAbility()){
				userScore.innerHTML = "Your Nicolas Cage dodged the attack";
				return currentUserScore;
				
		}else{
			currentUserScore -= thePlayers[1].attackAbility();
			userScore.innerHTML = `After Round: ${round}, ${thePlayers[0].name}'s remaining hit points ${currentUserScore}`;
		}
	}
	userStatus();


	function computerNicStatus(){
		if (thePlayers[1].dodgeAbility() >= thePlayers[0].attackAbility()){
				computerNicScore.innerHTML = "The evil Nicolas Cage dodged your attack";
				return currentComputerNicScore;
				
		}else{
			currentComputerNicScore -= thePlayers[0].attackAbility();
			computerNicScore.innerHTML = `After Round: ${round}, ${thePlayers[1].name}'s remaining hit points ${currentComputerNicScore}`;
		}
	}
	computerNicStatus();
	

	function reset(){
		thePlayers = [];
		userScore.innerHTML = "";
		computerNicScore.innerHTML = "";
		playerInfo.innerHTML = "";
		opponentInfo.innerHTML = "";
		currentUserScore = 100;
		currentComputerNicScore = 100;
	}

	if (currentUserScore <= 0 ) {
		alert(`This CAGE MATCH goes to the enemy, ${thePlayers[1].name}`);
		reset();

	}else if(currentComputerNicScore <= 0){
		alert(`You and ${thePlayers[0].name} win this CAGE MATCH!`);
		reset();
	}
};






