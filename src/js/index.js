// Javascript Entry Point

import $ from 'jquery';

import allPossiblePlayers from './players';


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


var $theScores = $(document.querySelector('#the-scores'));
var roundNumber = document.querySelector('#round');


var button = document.querySelector('button');
var $gameResultsContainer = $(document.querySelector('.game-results-container'));
var gameResults = document.querySelector('.game-results');
var resetButton = document.querySelector('#reset');

var currentUserScore = 50;
var currentComputerNicScore = 50;

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
		currentUserScore = 50;
		currentComputerNicScore = 50;
		gameResults.innerHTML = "";
		round = 0;
		$gameResultsContainer.css("display", "none");
		var imgagesToReset = document.querySelectorAll('img');

		[].forEach.call(imgagesToReset, function(anImg) {
		    anImg.className = "";
		});
	}





