// Javascript Entry Point

import $ from 'jquery';

//////improvements roadmap

/////place data attribute either using .data(element, key, value) or manually in html

/////get data attribute's value of clicked item

/////put all possible players into array

/////filter array for the player whose name value is equal to the value of clicked on item

/////generalize the addPlayer function, make it a method in the constructor, and call for player that comes through the filter

var allPossiblePlayers = [];

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
		this.toArray = function(){allPossiblePlayers.push(this);};
		this.toArray();
	}
}



var realNicolasCage = new NicolasCage(10, 2);
realNicolasCage.name = "The Real Nicolas Cage";


var nationalTreasureNicolasCage = new NicolasCage(10, 5);
nationalTreasureNicolasCage.name = "National Treasure Nicolas Cage";

var lordOfWarNicolasCage = new NicolasCage(25, 2);
lordOfWarNicolasCage.name = "Lord of War Nicolas Cage";

var wickerManNicolasCage = new NicolasCage(15, 0);
wickerManNicolasCage.name = "Wicker Man Nicolas Cage";

var ghostRiderNicolasCage = new NicolasCage(18, 8);
ghostRiderNicolasCage.name = "Ghost Rider Nicolas Cage";
// console.log(allPossiblePlayers);

//////can be refactored to use data-madeupname = "data-here" and jquery's data() method 
//with an event listener on a container instead of individual img's

// var selectNicolasCage = document.querySelector('#nicolas-cage');
// var selectNationalTreasure = document.querySelector('#national-treasure');
// var selectLordOfWar = document.querySelector('#lord-of-war');
// var selectGhost = document.querySelector('#ghost-rider');
// var selectWicker = document.querySelector('#wicker-man');


var playerInfo = document.querySelector('.player-info div');
var opponentInfo = document.querySelector('.opponent-info div');

var thePlayers = [];

$( ".nic-cage-picker" ).on( "click", "img", function( event ) {    

    var selectedPlayers = allPossiblePlayers.filter( obj => {
					    	return obj.name === $(event.target).data("name");
					    });

    thePlayers.push(selectedPlayers);

    if(thePlayers.length === 1){
		playerInfo.innerHTML = `${$(event.target).data("name")}`;
		$(event.target).addClass("userSelected");
	}else{
		opponentInfo.innerHTML = `${$(event.target).data("name")}`;
		$(event.target).addClass("computerPlayerSelected");
	}
});

    

// selectNicolasCage.onclick = function addPlayer (){
// 	if(thePlayers.length === 0){
// 		playerInfo.innerHTML = "The Real Nicolas Cage";
// 		selectNicolasCage.className = "userSelected";
// 	}else{
// 		opponentInfo.innerHTML = "The Real Nicolas Cage";
// 		selectNicolasCage.className = "computerPlayerSelected";
// 	}

// 	thePlayers.push(realNicolasCage);

// };

// selectNationalTreasure.onclick = function addPlayer (){
// 	if(thePlayers.length === 0){
// 		playerInfo.innerHTML = "National Treasure Nicolas Cage";
// 		selectNationalTreasure.className = "userSelected";
// 	}else{
// 		opponentInfo.innerHTML = "National Treasure Nicolas Cage";
// 		selectNationalTreasure.className = "computerPlayerSelected";
// 	}

// 	thePlayers.push(nationalTreasureNicolasCage);
// };

// selectLordOfWar.onclick = function addPlayer (){
// 	if(thePlayers.length === 0){
// 		playerInfo.innerHTML = "Lord of War Nicolas Cage";
// 		selectLordOfWar.className = "userSelected";
// 	}else{
// 		opponentInfo.innerHTML = "Lord of War Nicolas Cage";
// 		selectLordOfWar.className = "computerPlayerSelected";
// 	}

// 	thePlayers.push(lordOfWarNicolasCage);
// };

// selectGhost.onclick = function addPlayer (){
// 	if(thePlayers.length === 0){
// 		playerInfo.innerHTML = "Ghost Rider Nicolas Cage";
// 		selectGhost.className = "userSelected";
// 	}else{
// 		opponentInfo.innerHTML = "Ghost Rider Nicolas Cage";
// 		selectGhost.className = "computerPlayerSelected";
// 	}

// 	thePlayers.push(ghostRiderNicolasCage);
// };

// selectWicker.onclick = function addPlayer (){
// 	if(thePlayers.length === 0){
// 		playerInfo.innerHTML = "Wicker Man Nicolas Cage";
// 		selectWicker.className = "userSelected";
// 	}else{
// 		opponentInfo.innerHTML = "Wicker Man Nicolas Cage";
// 		selectWicker.className = "computerPlayerSelected";
// 	}

// 	thePlayers.push(wickerManNicolasCage);
// };




var $theScores = $(document.querySelector('#the-scores'));
var roundNumber = document.querySelector('#round');


var button = document.querySelector('button');
var $gameResultsContainer = $(document.querySelector('.game-results-container'));
var gameResults = document.querySelector('.game-results');
var resetButton = document.querySelector('#reset');

var currentUserScore = 100;
var currentComputerNicScore = 100;

var round =0;

button.onclick = function updateScore (){

	round+=1;
	roundNumber.innerHTML = `Round ${round}:`;
	
	(function userStatus(){
		if (thePlayers[0][0].dodgeAbility() >= thePlayers[1][0].attackAbility()){
				$theScores.html("<div>You dodged the attack!</div>");
				return currentUserScore;
				
		}else{
			currentUserScore -= thePlayers[1][0].attackAbility();
			$theScores.html(`<div>${thePlayers[0][0].name}'s remaining hit points ${currentUserScore}</div>`);
		}
	})();


	(function computerNicStatus(){
		if (thePlayers[1][0].dodgeAbility() >= thePlayers[0][0].attackAbility()){
				$theScores.append("<div>The evil Nicolas Cage dodged your attack</div>");
				return currentComputerNicScore;
				
		}else{
			currentComputerNicScore -= thePlayers[0][0].attackAbility();
			$theScores.append(`<div>${thePlayers[1][0].name}'s remaining hit points ${currentComputerNicScore}</div>`);
		}
	})();	

	

	if (currentUserScore <= 0 ) {
		gameResults.innerHTML = `Better luck next time! This CAGE MATCH goes to the enemy, ${thePlayers[1][0].name}`;
		$gameResultsContainer.css("display", "block");

	}else if(currentComputerNicScore <= 0){
		gameResults.innerHTML = `You and ${thePlayers[0][0].name} win this CAGE MATCH!`;
		$gameResultsContainer.css("display", "block");
	}
};


resetButton.onclick = function reset(){
		thePlayers = [];
		$theScores.html("");
		playerInfo.innerHTML = "";
		opponentInfo.innerHTML = "";
		roundNumber.innerHTML = "";
		currentUserScore = 100;
		currentComputerNicScore = 100;
		gameResults.innerHTML = "";
		round = 0;
		$gameResultsContainer.css("display", "none");
		var imgagesToReset = document.querySelectorAll('img');

		[].forEach.call(imgagesToReset, function(anImg) {
		    anImg.className = "";
		});
	}





