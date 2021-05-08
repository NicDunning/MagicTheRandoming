//Card image slices
var topSlice = document.getElementById("topSlice");
var cardArt = document.getElementById("cardArt");
var typeBar = document.getElementById("typeBar");
var textBox = document.getElementById("textContainer");
var originalText = document.getElementById("originalTextContainer");
var bottomSlice = document.getElementById("bottomSlice");
//Text locations in slices
var cardName = document.querySelector("#topSlice > p");
var typeLine = document.querySelector("#typeBar > p");
var cost = document.querySelector(".cost");
var powerStat = document.getElementById("power");
var toughnessStat = document.getElementById("toughness");
var pT = document.querySelector("#powerToughness");
var pTLeftCap = document.getElementById("pTLeftCap");
var pTRightCap = document.getElementById("pTRightCap");
var textBoxKeyword = document.getElementById("keywords");
var textBoxAbility = document.getElementById("abilities");
var originalTextAbility = document.getElementById("originalTextAbility");
//Settings
var raritiesSelected = document.getElementsByClassName("raritiesSelected");
var setsContainer = document.getElementById("sets");
var allSets = document.getElementsByName("setsUsed");
var setsDom = document.getElementsByClassName("set");
var labelsDom = document.getElementsByClassName("setLabel");
var chosenCard = document.getElementById("cardSelect");
var search1 = document.getElementById("autoFill1");
var search2 = document.getElementById("autoFill2");
var search3 = document.getElementById("autoFill3");
var autoFillSelections = document.getElementsByClassName("autoFillOption");
var setSearch = document.getElementById("setSearch");
var toggleOriginal1 = document.getElementById("showOriginal1");
var toggleOriginal2 = document.getElementById("showOriginal2");
var cardListTextArea = document.getElementById("cardListTextArea");
var importButton = document.getElementById("importButton");
var importToggle = document.getElementById("importToggle");
var manaCostButtons = document.getElementsByClassName("costButton");
//Buttons
var randomCard = document.getElementById("randomCard");
var chooseCard = document.getElementById("chooseCard");
var buttonDelay = false;
//Keywords + Abilities
var numInput = document.getElementById("numInput");
var randNumAbility = document.getElementById("randNumAbility");
var normalNumAbility = document.getElementById("normalNum");


var cards = {};
var cardNames = [];
var autoComplete = [];

tempData = [];

var keywords = ["Reach", "Flying", "Vigilance", "Trample", "First Strike", "Lifelink", "Changeling", "Flash", "Haste"];
var rarities = [];
var abilities = [];
var tempSet = "";
var setTags = [];
var tempToggle = false;
var tempBlock = "";
var tempCard = "";
var tempPowers = [];
var tempPower;
var tempToughnesses = [];
var tempToughness;
var tempAbilities = [];
var tempKeywords = [];
var tempImportKeywords = [];
var customKeywords = [];
var numOfAbilities = 0;
var tempConverted = 0;
var tempRarity = "Common";
var randKeyword = 0;
var testAbilities = []
var modeChoose = false;
var showOriginal = false;
var customSet = false;
var selectedCosts = [];
var validCards = [];

// function toggleSets(){
// 	if (setsContainer.style.display === "none"){
// 		setsContainer.style.display = 'grid';
// 		// randomCard.style.display = 'none';
// 	} else {
// 		setsContainer.style.display = 'none';
// 		// randomCard.style.display = 'block';
// 	}
// }

function selectCard(){


	selectRarities();

	// Custom set from import or regualr set from data.
	if(!customSet){
		selectSets();
		// console.log("not custom");
	} else {
		importCards();
		// console.log("custom");
	}

	// add selecte costs to list.
	selectedCosts = [];
	for(i=0; i<manaCostButtons.length; i++){
		if(manaCostButtons[i].style.background == "grey"){
			selectedCosts.push((i+1).toString());
		}
	}

	selectKeywords();
	// console.log(cards);
	getCardNames();
	
	showOriginalAbilities();
	if(!modeChoose){
		//Random number for card
		var rand =  Math.floor(Math.random() * (Object.keys(cards).length));

		// console.log(selectedCosts, cards[Object.keys(cards)[rand]].converted);

		// make list with each index number of cards,  check if valid, if not valid remove, repeat, if no valid left ask for different cost parameters.

		validCards = [];

		for(i=0; i<Object.keys(cards).length; i++){
			validCards.push(i);
		}

		for(i=0; i<validCards.length; i++){
			if(cards[Object.keys(cards)[validCards[i]]].hasOwnProperty("name")){
				if(!selectedCosts.includes(cards[Object.keys(cards)[validCards[i]]].converted.toString())){
					validCards.splice(i, 1);
					i = i - 1;
				} else {
					continue;
				}
			}
		}


		if(!selectedCosts.includes(cards[Object.keys(cards)[validCards[-1]]])){
			validCards.pop();
		}

		console.log(validCards);

		// if there is no valid cards and costs are selected ==>
		if(validCards.length == 0 && selectedCosts.length > 0){
			window.alert("No valid cards. Please change cost parameters");

		// if costs are selected but there are valid cards ==>
		} else if (selectedCosts.length > 0){

			var rand = validCards[Math.floor(Math.random() *validCards.length)];


		// If no costs are selected ==>
		} else {

			while(!cards[Object.keys(cards)[rand]].hasOwnProperty("name")){
				var rand =  Math.floor(Math.random() * (Object.keys(cards).length));
			}

		}




		// if(selectedCosts.length>0){



		// 	for(i=0; i<Object.keys(cards).length; i++){
				
		// 	}
		// 	if(selectedCosts.includes(cards[Object.keys(cards)[rand]].converted.toString())){
		// 		break;
		// 	}


		// }

		//Make sure the selected card is actually a card, and not just data. (Ex.keywordsRarity).
		


		// console.log(cards["Koma, Cosmos Serpent"].abilitiesText);
		//Get card values.
		tempCard = Object.keys(cards)[rand];
		// console.log(Object.keys(cards));
	} else {
		if(cards[chosenCard.value] == undefined){
			alert("Please choose a valid card!");
			return
		}
		tempCard = cards[chosenCard.value].name;
		// console.log(tempCard);
	}

	var tempName = cards[tempCard].name;
	var tempType = cards[tempCard].type;
	var tempRarity = cards[tempCard].rarity;
	var tempCost = cards[tempCard].cost;
	var originalAbility = cards[tempCard].textbox.join("<br> <br>");
	numOfAbilities = cards[tempCard].abilities;
	tempConverted = cards[tempCard].converted
	cardName.textContent = tempName;
	typeLine.textContent = cards[tempCard].type;
	cost.textContent = tempCost;
	originalTextAbility.innerHTML = originalAbility
	originalTextAbility.style.marginTop = (originalAbility.length * 0.05).toString() + "px";
	// console.log(originalAbility.length * 7);
	setColor();
	getAbilities();
	setAbilities(tempName, tempCard, tempRarity, numOfAbilities);
	// getPowTou();
	// setPowTou();
	tempPower = cards[tempCard].power;
	tempToughness = cards[tempCard].toughness;
	pT.textContent = tempPower + "/" + tempToughness;
	if((tempPower+"/"+tempToughness).length > 3){
		pT.style.paddingRight = "10px"
	} else {
		pT.style.paddingRight = "0px";
	}
	// powerStat.textContent = ;
	// toughnessStat.textContent = ;
}

function selectSets(){
	cards = {};
	for(i=0; i<rarities.length; i++){
		for(j=0; j<setsDom.length; j++){
			if(setsDom[j].checked){
				// console.log(window[(setsDom[j].value).toLowerCase() + rarities[i]])
				cards = $.extend(cards, (window[(setsDom[j].value).toLowerCase() + rarities[i]]));
			}
		}
	}

}

// Object keywords, contains (Common; Uncommon; Rare; Mythic): [List of keywords at the chosen rarities]


function selectKeywords(){
	keywords = [];
	if(!customSet){
		for(i=0; i<setsDom.length; i++){
			if(setsDom[i].checked){
				for(j=0;j<rarities.length;j++){
					// console.log(cards, rarities[j])
					console.log(rarities[j])
					tempData = cards["keywords"+rarities[j]].abilitiesText;
					for(k=0;k<tempData.length; k++){
						keywords.push(tempData[k]);
					}
				}
			}
		}
	} else {
		for(i=0; i<customKeywords.length; i++){
			keywords.push(customKeywords[i]);
		}
		
		
	}
	// console.log(keywords);
}

function selectRarities(){
	for(i=0; i<raritiesSelected.length; i++){
		if (raritiesSelected[i].checked && !rarities.includes(raritiesSelected[i].value)){
			rarities.push(raritiesSelected[i].value);
		} else if (!raritiesSelected[i].checked && rarities.includes(raritiesSelected[i].value)) {
			rarities.splice(rarities.indexOf(raritiesSelected[i].value) , rarities.indexOf(raritiesSelected[i].value)+1);
		}
	}
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

function getAbilities(){

	abilities = [];
	for(i=0; i<Object.keys(cards).length; i++){
		if(rarities.includes(cards[Object.keys(cards)[i]].rarity)){
			tempAbilitiesText = cards[Object.keys(cards)[i]].abilitiesText;
			for(j=0; j<tempAbilitiesText.length; j++){
				abilities.push(tempAbilitiesText[j]);
			}
		}
	}
}

function setAbilities(name, card, rarity, num){
	// console.log(name, rarity, num);
	tempKeywords.length = 0;
	tempAbilities.length = 0;
	textBoxKeyword.innerHTML = "";
	textBoxAbility.innerHTML = "";
	if(!numInput.value.length == 0 && randNumAbility.checked === false){
		num = numInput.value;
	} else if (randNumAbility.checked){
		num = Math.floor(Math.random()*10);
	}

	numKeyword = Math.round(Math.random()*num);

	while(numKeyword > keywords.length){
		numKeyword = Math.round(Math.random()*num);
	}


	// console.log(keywords);
	// console.log(abilities);

	numAbility = num - numKeyword;
	if(true){
		for(i=0; i<num; i++){

			// console.log(numKeyword);
			randKeyword = Math.floor(Math.random() * (keywords.length));
			randAbility = Math.floor(Math.random() * (abilities.length));
			//make sure ability is not blank.
			while (abilities[randAbility] == ""){
				randAbility = Math.floor(Math.random() * (abilities.length));
			}
			if(numKeyword > 0 && !tempKeywords.includes(keywords[randKeyword])){
				//If still can add keywords and not already selected.
				tempKeywords.push(keywords[randKeyword]);
				// console.log(tempKeywords);
				numKeyword--;
			} 
			if (numKeyword === 0){
				//If selected all keywords add to card.
				// var ability = document.createElement("p");
				for(j=0; j<tempKeywords.length; j++){
					if(j===(tempKeywords.length - 1)){
						//adjust for last keyword not having a ,
						textBoxKeyword.innerHTML += tempKeywords[j];
					} else {
						textBoxKeyword.innerHTML += tempKeywords[j] + ", ";
					}
				}
				// textBox.appendChild(ability);
				numKeyword--;
				i--;
			} else if (numKeyword > 0){
				//Adjust for if keyword is already selected.
				i--;
			} else if (numAbility > 0 && !tempAbilities.includes(abilities[randAbility])){
				//Add ability.
				// var ability = document.createElement("p");
				textBoxAbility.innerHTML += abilities[randAbility];
				textBoxAbility.innerHTML += "<br><br>";
				// textBox.appendChild(ability);
	 			tempAbilities.push(abilities[randAbility]);
				numAbility--;
			} else if (tempAbilities.includes(abilities[randAbility])){
				//Adjust for if ability is alread selected.
				i--;
			}
			// console.log("test");
		}

	}




	if(textBoxKeyword.innerHTML == ""){
		textBoxKeyword.style.display = "none";
	}	else {
		if(textBoxAbility.innerHTML == ""){
			textBoxKeyword.style.marginTop = "-15px";
		} else {
			textBoxKeyword.style.marginTop = "15px";
		}
		textBoxKeyword.style.display = "flex";
	}

	if(textBoxAbility.innerHTML == ""){
		textBoxAbility.style.display = "none";

	}	else {
		if(textBoxKeyword.innerHTML == ""){
			textBoxAbility.style.marginTop = "15px";
		} else {
			textBoxAbility.style.marginTop = "0px";
		}
		textBoxAbility.style.display = "flex";
	}


	// if(rarity === "Common"){
	// 	for(i=0; i<num; i++){
	// 		rand =  Math.floor(Math.random() * (abilities.length));
	// 		if(!tempAbilities.includes(abilities[rand])){
	// 			var ability = document.createElement("p");
	// 			// ability.appendChild(document.createTextNode(abilities[rand]));
	// 			ability.innerHTML = abilities[rand];
	// 			textBox.appendChild(ability);
	// 			tempAbilities.push(abilities[rand]);

	// 		}else{
	// 			i--;
	// 		}
	// 	}
	// }

}

function showOriginalAbilities(){
	showOriginal = toggleOriginal1.checked;
	// console.log(showOriginal);
	if(showOriginal){
		//showOriginal
		textBox.style.display = "none";
		originalTextAbility.style.display = "block";
		originalText.style.display = "flex";
	} else {
		//no show original
		textBox.style.display = "flex";
		originalTextAbility.style.display = "none";
		originalText.style.display = "none";
	}
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

	if(cards[tempCard].color == "Colorless"){

		topSlice.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-1.png")';
		cardArt.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-2.png")';
		typeBar.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-3.png")';
		textBox.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-4.png")';
		originalText.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-4.png")';
		bottomSlice.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-5.png")';
		pTLeftCap.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-8.png")';
		pTRightCap.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-9.png")';
		pT.style.backgroundImage = 'url("BlankCardAssets/'+ "Artifact" +'/' + "Artifact" +'-10.png")';

	} else {

		topSlice.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-1.png")';
		cardArt.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-2.png")';
		typeBar.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-3.png")';
		textBox.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-4.png")';
		originalText.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-4.png")';
		bottomSlice.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-5.png")';
		pTLeftCap.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-8.png")';
		pTRightCap.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-9.png")';
		pT.style.backgroundImage = 'url("BlankCardAssets/'+ cards[tempCard].color +'/' + cards[tempCard].color +'-10.png")';

	}

}

function updateSets(e){
	for(i=0; i<labelsDom.length; i++){
		setTags = [];
		tags = "";
		// Set Sets to lowercase
		tempSet = labelsDom[i].textContent;
		tempSet = tempSet.toLowerCase();

		//string of tags on each checkbox from class list.

		setTags = labelsDom[i].classList;
		for(j=1; j<setTags.length; j++){
			tags += setTags[j].toLowerCase() + " ";
		}

		// add set name to tags.
		tags += tempSet + " ";

		// if query in tags display set. otherwise hide set.
		if(tags.includes((e.target.value).toLowerCase())){
			setsDom[i].style.display = "";
			labelsDom[i].style.display= "";
		} else {
			setsDom[i].style.display = "none";
			labelsDom[i].style.display= "none";
		}
	}
}

function updateCardSearch(e){
	autoComplete = [];
	for(i=0; i<3; i++){
		for(j=0; j<cardNames.length; j++){
			if (cardNames[j].toLowerCase().includes((e.target.value).toLowerCase()) & !autoComplete.includes(cardNames[j])){
				window["search" + (i+1).toString()].style.display = "block";
				window["search" + (i+1).toString()].innerHTML = cardNames[j];
				autoComplete.push(cardNames[j]);
				break
			}
		}
		if(!window["search" + (i+1).toString()].innerHTML.toLowerCase().includes((e.target.value).toLowerCase()) || window["search" + (i+1).toString()].innerHTML == search1.innerHTML & ! i == 0){
			window["search" + (i+1).toString()].style.display = "none";
		}
	}
	if(e.target.value == ""){
		clearAutoComplete();
	}
}

function clearAutoComplete(){
	search1.style.display = "none";
	search2.style.display = "none";
	search3.style.display = "none";
}

function getCardNames(){

	if(!customSet){
		selectSets();
	}


	selectRarities();
	selectKeywords();
	cardNames = [];

	// console.log(Object.keys(cards));
	for(i=0; i<Object.keys(cards).length; i++){
		if("name" in cards[Object.keys(cards)[i]]){
			cardNames.push(cards[Object.keys(cards)[i]].name);
		}
		// console.log(cards[Object.keys(cards)[i]].name);
		
	}
	// console.log(cards);
}

function fillSearchBar(e){
	chosenCard.value = (e.target.innerHTML);
	clearAutoComplete();
}

function tabWorkaround(e){
	if(e.keyCode == 9){
		chosenCard.value = autoFillSelections[0].innerHTML;
		clearAutoComplete();
	}
	if(e.keyCode == 13){
		//reset Textbox and set card info
		resetTextBox();
	}
}

function importCards(){
	cards = {};
	customKeywords = [];
	importCardsList = cardListTextArea.value.split("\n");
	// console.log(importCardsList);
	for(i=0; i<importCardsList.length; i++){
		for(j=setsDom.length-1; j>=0; j--){
			if(window[setsDom[j].value.toLowerCase() + "Common"] !== undefined){
				if(importCardsList[i] in window[setsDom[j].value.toLowerCase() + "Common"]){



					// get keyword from card imported's text box cross referenced with rarity keywords and add to customKeywords 

					tempImportKeywords = Object.values(window[setsDom[j].value.toLowerCase() + "Common"].keywordsCommon.abilitiesText);
					// console.log(tempImportKeywords);
					tempTextBox = window[setsDom[j].value.toLowerCase() + "Common"][importCardsList[i]].textbox;
					// console.log(tempTextBox);


					for(k=0; k<tempImportKeywords.length; k++){
						if(tempTextBox.includes(tempImportKeywords[k])){
							if(!customKeywords.includes(tempImportKeywords[k])){

							customKeywords.push(tempImportKeywords[k]);
							console.log(customKeywords);

							}
						}
					}
					cards[importCardsList[i]] = (window[setsDom[j].value.toLowerCase() + "Common"][importCardsList[i]]);
					break;
				}
			}
		}
	}
	// console.log(customKeywords);
}


function toggleImport(){

	if(!customSet){
		customSet = true;
		importToggle.style.color = "red";
	} else {
		customSet = false;
		importToggle.style.color = "";
	}

	// console.log(customSet);
}

function resetTextBox(){
// reset textBox, removing all children <p> tags.

		// while(textBox.firstChild){
		// 	textBox.removeChild(textBox.lastChild);
		// }

		modeChoose = true;
		selectCard();
}

function costSelector(e){
	if(e.target.style.background == "grey"){
		e.target.style.background = ""
	} else {
		e.target.style.background = "grey"
	}
	
}

randomCard.addEventListener("click", function(){
		modeChoose = false;
		selectCard();
})


chooseCard.addEventListener("click", resetTextBox)

for(i=0; i<autoFillSelections.length; i++){
	autoFillSelections[i].addEventListener('click', fillSearchBar);
}

// functionality for autoComplete Sets and Rarities.
for(i=0; i<setsDom.length; i++){
	setsDom[i].addEventListener("change", getCardNames);
}

for(i=0; i<raritiesSelected.length; i++){
	raritiesSelected[i].addEventListener("change", getCardNames);
}

for(i=0; i<manaCostButtons.length; i++){
	manaCostButtons[i].addEventListener("click", costSelector);
}

setSearch.addEventListener("input", updateSets);
chosenCard.addEventListener("input", updateCardSearch);
chosenCard.addEventListener('keydown', tabWorkaround);
toggleOriginal1.addEventListener("input", showOriginalAbilities);
toggleOriginal2.addEventListener("input", showOriginalAbilities);
importButton.addEventListener("click", importCards);
importToggle.addEventListener("click", toggleImport);

// selectCard();
selectCard();



//Todo: add flavor text if card is short. add functionality to show original card. Add p./t stretch to multicolor and colorless backgrounds.
// Add functionality to change mana symbols to images. Make site look better on mobbile screens; If screen size small put settings on top of card.

// Important Todo:
// Add funtionality to select/ deselect all visible sets
// Add more sets.
//Add screen shot functionality to save cards as images.

//Can use window[variable name] to reference variable variables.