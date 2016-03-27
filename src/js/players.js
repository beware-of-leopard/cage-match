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

export default allPossiblePlayers;