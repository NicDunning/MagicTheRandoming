var cards = {
	"Codespell Cleric" : {name:"Codespell Cleric", color:"White", cost:"W", type:"Creature — Human Cleric", rarity:"Common", abilities:2, power:1, toughness:1, converted:1},
	"Doomskar Oracle" : {name:"Doomskar Oracle", color:"White", cost:"2W", type:"Creature — Human Cleric", rarity:"Common", abilities:2, power:3, toughness:2, converted:3},
	"Augury Raven" : {name:"Augury Raven", color:"Blue", cost:"3U", type:"Creature — Bird", rarity:"Common", abilities:2, power:3, toughness:3, converted:4},
	"Frostpeak Yeti" : {name:"Frostpeak Yeti", color:"Blue", cost:"3U", type:"Snow Creature — Yeti", rarity:"Common", abilities:1, power:3, toughness:3, converted:4},
	"DuskWielder" : {name:"DuskWielder", color:"Black", cost:"B", type:"Creature — Elf Berserker", rarity:"Common", abilities:1, power:1, toughness:2, converted:1},
	"Gnottvold Recluse" : {name:"Gnottvold Recluse", color:"Green", cost:"2G", type:"Creature — Spider", rarity:"Common", abilities:1, power:4, toughness:2, converted:3},
	"Axguard Braggart" : {name:"Axguard Braggart",color:"White", cost:"3W", type:"Creature — Dwarf Warrior", rarity:"Common", abilities:1, power:3, toughness:3, converted:4},
	"Battlefield Raptor" : {name:"Battlefield Raptor", color:"White", cost:"W", type:"Creature — Bird", rarity:"Common", abilities:2, power:1, toughness:2, converted:1},
	"Beskir Shieldmate" : {name:"Beskir Shieldmate", color:"White", cost:"1W", type:"Creature — Human Warrior", rarity:"Common", abilities:1, power:2, toughness:1, converted:2},
	"Giant Ox" : {name:"Giant Ox", color:"White", cost:"1W", type:"Creature — Ox", rarity:"Common", abilities:1, power:0, toughness:6, converted:2},
	"God's Hall Guardian" : {name:"God's Hall Guardian", color:"White", cost:"5W", type:"Creature — Cat", rarity:"Common", abilities:2, power:3, toughness:6, converted:6},
	"Goldmaw Champion" : {name:"Goldmaw Champion", color:"White", cost:"2W", type:"Creature — Dwarf Warrior", rarity:"Common", abilities:1, power:2, toughness:3, converted:3},
	"'Master Skald'" : {name:"'Master Skald'", color:"White", cost:"4W", type:"Creature — Dwarf Warrior", rarity:"Common", abilities:1, power:4, toughness:4, converted:5},
	"'Resolute Valkyrie'" : {name:"'Resolute Valkyrie'", color:"White", cost:"3W", type:"Creature — Angel Warrior", rarity:"Common", abilities:2, power:3, toughness:2, converted:4},
	"Story Seeker" : {name:"Story Seeker", color:"White", cost:"1W", type:"Creature — Dwarf Cleric", rarity:"Common", abilities:1, power:2, toughness:2, converted:2},
	"Berg Strider" : {name:"Berg Strider", color:"Blue", cost:"4U", type:"Snow Creature — Giant Wizard", rarity:"Common", abilities:1, power:4, toughness:4, converted:5},
	"Kartfell Harbinger" : {name:"Kartfell Harbinger", color:"Blue", cost:"1U", type:"Creature — Zombie Wizard", rarity:"Common", abilities:1, power:1, toughness:3, converted:2},
	"Littjara Kinseekers" : {name:"Littjara Kinseekers", color:"Blue", cost:"3U", type:"Creature — Shapeshifter", rarity:"Common", abilities:2, power:2, toughness:4, converted:4},
	"Pilfering Hawk" : {name:"Pilfering Hawk", color:"Blue", cost:"1U", type:"Creature — Bird", rarity:"Common", abilities:2, power:1, toughness:2, converted:2},
	"Undersea Invader" : {name:"Undersea Invader", color:"Blue", cost:"4UU", type:"Creature — Giant Rogue", rarity:"Common", abilities:2, power:5, toughness:6, converted:6},
	"Deathknell Berserker" : {name:"Deathknell Berserker", color:"Black", cost:"1B", type:"Creature — Elf Berserker", rarity:"Common", abilities:1, power:2, toughness:2, converted:2},
	"Dread Rider" : {name:"Dread Rider", color:"Black", cost:"5B", type:"Creature — Spirit Knight", rarity:"Common", abilities:1, power:3, toughness:7, converted:6},
	"Elderfang Disciple" : {name:"Elderfang Disciple", color:"Black", cost:"1B", type:"Creature — Elf Cleric", rarity:"Common", abilities:1, power:1, toughness:1, converted:2},
	"Grim Draugr" : {name:"Grim Draugr", color:"Black", cost:"2B", type:"Snow Creature — Zombie Berserker", rarity:"Common", abilities:1, power:3, toughness:2, converted:3},
	"Infernal Pet" : {name:"Infernal Pet", color:"Black", cost:"2B", type:"Creature — Imp", rarity:"Common", abilities:1, power:2, toughness:2, converted:3},
	"Kartfell Kennel-Master" : {name:"Kartfell Kennel-Master", color:"Black", cost:"4B", type:"Creature — Zombie Berserker", rarity:"Common", abilities:1, power:4, toughness:4, converted:5},
	"Koma's Faithful" : {name:"Koma's Faithful", color:"Black", cost:"2B", type:"Creature — Elf Cleric", rarity:"Common", abilities:2, power:3, toughness:1, converted:3},
	"Axguard Cavalry" : {name:"Axguard Cavalry", color:"Red", cost:"1R", type:"Creature — Dwarf Berserker", rarity:"Common", abilities:1, power:2, toughness:2, converted:2},
	"'Breakneck Berserker'" : {name:"'Breakneck Berserker'", color:"Red", cost:"2R", type:"Creature — Dwarf Berserker", rarity:"Common", abilities:1, power:3, toughness:2, converted:3},
	"Cinderheart Giant" : {name:"Cinderheart Giant", color:"Red", cost:"5RR", type:"Creature — Giant Berserker", rarity:"Common", abilities:2, power:7, toughness:6, converted:7},
	"Hagi Mob" : {name:"Hagi Mob", color:"Red", cost:"4R", type:"Creature — Troll Berserker", rarity:"Common", abilities:1, power:5, toughness:4, converted:5},
	"Tuskeri Firewalker" : {name:"Tuskeri Firewalker", color:"Red", cost:"2R", type:"Creature — Human Berserker", rarity:"Common", abilities:1, power:3, toughness:2, converted:3},
	"Vault Robber" : {name:"Vault Robber", color:"Red", cost:"1R", type:"Creature — Dwarf Rogue", rarity:"Common", abilities:1, power:1, toughness:3, converted:2},
	"Elderleaf Mentor" : {name:"Elderleaf Mentor", color:"Green", cost:"3G", type:"Creature — Elf Warrior", rarity:"Common", abilities:1, power:3, toughness:2, converted:4},
	"'My D&D OC'" : {name:"'My D&D OC'", color:"Green", cost:"4G", type:"Creature — Elf Warrior", rarity:"Common", abilities:0, power:5, toughness:5, converted:5},
	"Guardian Gladewalker" : {name:"Guardian Gladewalker", color:"Green", cost:"1G", type:"Creature — Shapeshifter", rarity:"Common", abilities:2, power:1, toughness:1, converted:2},
	"Jaspera Sentinel" : {name:"Jaspera Sentinel", color:"Green", cost:"G", type:"Creature — Elf Rogue", rarity:"Common", abilities:2, power:1, toughness:2, converted:1},
	"Masked Vandal" : {name:"Masked Vandal", color:"Green", cost:"1G", type:"Creature — Shapeshifter", rarity:"Common", abilities:2, power:1, toughness:3, converted:2},
	"Ravenous Lindwurm" : {name:"Ravenous Lindwurm", color:"Green", cost:"4GG", type:"Creature — Wurm", rarity:"Common", abilities:1, power:6, toughness:6, converted:6},
	"Sarulf's Packmate" : {name:"Sarulf's Packmate", color:"Green", cost:"3G", type:"Creature — Wolf", rarity:"Common", abilities:2, power:3, toughness:3, converted:4},
	"Sculptor of Winter" : {name:"Sculptor of Winter", color:"Green", cost:"1G", type:"Snow Creature — Elf Rogue", rarity:"Common", abilities:1, power:2, toughness:2, converted:2},
	"Scorn Effigy" : {name:"Scorn Effigy", color:"Blue", cost:"3", type:"Creature — Scarecrow", rarity:"Common", abilities:1, power:2, toughness:3, converted:3}

	// "" : {name:"", color:"", cost:"", type:"—", rarity:"", abilities:, power:, toughness:, converted:}
};

//Card image slices
var topSlice = document.getElementById("topSlice");
var cardArt = document.getElementById("cardArt");
var typeBar = document.getElementById("typeBar");
var textBox = document.getElementById("textContainer");
var bottomSlice = document.getElementById("bottomSlice");
//Text locations in slices
var cardName = document.querySelector("#topSlice > p");
var typeLine = document.querySelector("#typeBar > p");
var cost = document.querySelector(".cost");
var pT = document.querySelector("#bottomSlice > p");

var keywords = ["Reach", "Flying", "Vigilance", "Trample", "First Strike"]
var abilitiesCommon = ["Boast —  1: Target opponent loses 1 life and you gain 1 life.", "1 , Snow: This creature can't be blocked this turn.", "Foretell 1U", "Whenever you cast your second spell each turn you gain 2 life.", "Foretell W", "When this creature enters the battlefield if it was the second spell cast this turn put a +1/+1 counter on target creature.", "Boast — 1W: Untap this creature. Put a +1/+1 counter on it.", "When this creature dies create a 1/1 white Human Warrior creature token.", "This creature crews Vehicles using its toughness rather than its power.", "Fortell 3W", "Boast — 1W: Tap target creature.", "When this creature enters the battlefield, tap target artifact or creature an opponent controls. If snow was spent to cast this spell, that permanent doesnt untap during its controller's next untap step.", "T: add U. Spend this mana only to foretell a card from your hand or cast an instant or sorcery spell.", "When this creature enters the battlefield, if you control three or more creatures that share a creature type, put a +1/+1 counter on this creature, then scry 1.", "Snow, T: draw a card, then discard a card.", "This creature enters the batttlefield tapped.", "When this creature dies, if its power was 3 or greater, create a 2/2 black Zombie Berserker creature token.", "1B, T, Exile a creature card from your graveyard: Target opponent loses 3 life.", "When this creature enters the battlefield, each opponent discards a card.", "1 Snow: This Creature gets +1/+0 and gains menace until end of turn.", "Whenever you cast your second spell each turn, Put a +1/+1 counter on this creature and it gains flying until end of turn.", "When this creature enters the battlefield, up to two target creatures each get +1/+0 and gain indestructible until end of turn.", "When this creature dies, each player mills three cards.", "T: target creature gains haste until end of turn.", "When this creature dies, it deals 7 damage to a creature an opponent controls chosen at random.", "Boast — 1R: This creature deals 1 damage to any target.", "Boast — 1: Exile the top card of your library, You may play that card this turn.", "1, T, Exile a creature card from your graveyard: Create a Treasure token.", "When this creature enters the battlefield, create a 1/1 green Elf Warrior creature token", "When this creature enters the battlefield put a +1/+1 counter on target creature.", "T, Tap an untapped creature you control: Add one mana of any color.", "When this creature enters the battlefield, you may exile a creature card from your graveyard. If you do, exile target artifact or enchantment an opponent controls.", "When this creature enters the battlefield, draw a card.", "Foretell 1G", "T: untap target snow land.", "Foretell 0", "When this creature enters the battlefield, you gain 4 life.", "When this creature enters the battlefield, you may exile a creature card from your graveyard. If you do, return target artifact or enchantment from your graveyard to your hand.", "You may pay 1W and exile a creature card from your graveyard rather than pay this spell's mana cost."];
var tempCard;
var tempPowers = [];
var tempPower;
var tempToughnesses = [];
var tempToughness;
var tempAbilities = [];
var tempKeywords = [];
var numOfAbilities = 0;
var tempConverted = 0;
var tempRarity = "Common";
var randKeyword = 0;

function selectCard(){
	var rand =  Math.floor(Math.random() * (Object.keys(cards).length));
	tempCard = Object.keys(cards)[rand];
	var tempName = cards[tempCard].name;
	var tempType = cards[tempCard].type;
	var tempRarity = cards[tempCard].rarity;
	var tempCost = cards[tempCard].cost;
	numOfAbilities = cards[tempCard].abilities;
	tempConverted = cards[tempCard].converted
	cardName.textContent = tempName;
	typeLine.textContent = cards[tempCard].type;
	cost.textContent = tempCost;
	setColor();
	setAbilities(tempName, tempCard, tempRarity, numOfAbilities);
	getPowTou();
	setPowTou();
	pT.textContent = tempPower + " " + tempToughness;

}

function getToughness(tempCard, cost, index){
	if(cards[Object.keys(cards)[index]].converted === cost){
		tempToughnesses.push(cards[Object.keys(cards)[index]].toughness);
	}
}

function getPower(tempCard, cost, index){
	if(cards[Object.keys(cards)[index]].converted === cost){
		tempPowers.push(cards[Object.keys(cards)[index]].power);
	}
}

function setAbilities(name, card, rarity, num){
	// console.log(name, rarity, num);
	tempKeywords.length = 0;
	//num = 5;
	numKeyword = Math.floor(Math.random()*num);
	numAbility = num - numKeyword;
	if(rarity == "Common"){
		for(i=0; i<num; i++){
			console.log(i, numAbility, numKeyword);
			randKeyword = Math.floor(Math.random() * (keywords.length));
			randAbility = Math.floor(Math.random() * (abilitiesCommon.length));
			if(numKeyword > 0 && !tempKeywords.includes(keywords[randKeyword])){
				//If still can add keywords and not already selected.
				tempKeywords.push(keywords[randKeyword]);
				numKeyword--;
			} else if (numKeyword === 0){
				//If selected all keywords add to card.
				var ability = document.createElement("p");
				for(j=0; j<tempKeywords.length; j++){
					if(j===(tempKeywords.length - 1)){
						//adjust for last keyword not having a ,
						ability.innerHTML += tempKeywords[j];
					} else {
						ability.innerHTML += tempKeywords[j] + ", ";
					}
				}
				textBox.appendChild(ability);
				numKeyword--;
				i--;
			} else if (numKeyword > 0){
				//Adjust for if keyword is already selected.
				i--;
			} else if (numAbility > 0 && !tempAbilities.includes(abilitiesCommon[randAbility])){
				//Add ability.
				console.log(abilitiesCommon[randAbility]);
				var ability = document.createElement("p");
				ability.innerHTML = abilitiesCommon[randAbility];
				textBox.appendChild(ability);
	 			tempAbilities.push(abilitiesCommon[randAbility]);
				numAbility--;
			} else if (tempAbilities.includes(abilitiesCommon[randAbility])){
				//Adjust for if ability is alread selected.
				i--;
			}
		}
	}



	// if(rarity === "Common"){
	// 	for(i=0; i<num; i++){
	// 		rand =  Math.floor(Math.random() * (abilitiesCommon.length));
	// 		if(!tempAbilities.includes(abilitiesCommon[rand])){
	// 			var ability = document.createElement("p");
	// 			// ability.appendChild(document.createTextNode(abilitiesCommon[rand]));
	// 			ability.innerHTML = abilitiesCommon[rand];
	// 			textBox.appendChild(ability);
	// 			tempAbilities.push(abilitiesCommon[rand]);

	// 		}else{
	// 			i--;
	// 		}
	// 	}
	// }
}

function getPowTou(){
	for(i=0; i<Object.keys(cards).length; i++){
		getToughness(tempCard, tempConverted, i);
		getPower(tempCard, tempConverted, i);
	}
}

function setPowTou(){
	rand = Math.floor(Math.random() * (tempPowers.length));
	tempPower = tempPowers[rand];
	rand = Math.floor(Math.random() * (tempToughnesses.length));
	tempToughness = tempToughnesses[rand];
}

function setColor(){
	// console.log(cards[tempCard].color);
	if("color3" in cards[tempCard]){
		console.log("Add support for third color pls.");
	} else if ("color2" in cards[tempCard]){
		console.log("Add support for second color pls.");
	} else {
		//need to add support for other card frames. Legendary, artifact, vehicle, ect.
		//if card only has one or less colors.
		topSlice.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-1.png")';
		cardArt.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-2.png")';
		typeBar.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-3.png")';
		textBox.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-4.png")';
		bottomSlice.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-5.png")';
	}
}

selectCard();

//Todo: add flavor text if card is short. input cards. in ability add replace "this creature" with creature name.

//common
//

//uncommon
// "Boast — 1W: Creatures you control get +1/+1 until end of turn.", "Whenever you cast your second spell each turn create a 1/1 white Spirit creature token with flying.",

//rare
//

//mythic
//