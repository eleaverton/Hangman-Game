
var bakeryWords = ["croissant", "donut", "cupcake", "macaron", "snickerdoodle", "kolache"]

var wins = 0;
var guessesLeft = 12;
var secretWord = "";
var secretWordArray = [];
var blankWordArray = [];
var lettersGuessed = [];

secretWord = "macaron";
secretWordArray=["m","a","c","a","r","o","n"];
blankWordArray = ["_","_","_","_","_","_","_",];
//these are in place until I can get the first document.onkeyup to work and not be overridden by the second one. 

document.onkeyup = function(event) {
	// var keyPress = event.key;
	// if (keyPress = " "){
	// 	var secretWord = bakeryWords[Math.floor(Math.random()*bakeryWords.length)];
	// 	console.log(secretWord);
	// 	secretWordArray = secretWord.split("");
	// 	console.log(secretWordArray);
		
	// 	console.log(secretWord.length);
	// 	for(var i=0;i<secretWord.length;i++){
	// 		blankWordArray.push("_");
	// 	}
	// 	console.log(blankWordArray);
	// 	document.getElementById("wordBlanks").innerHTML = blankWordArray;
	// }

		
		document.getElementById("wordBlanks").innerHTML = blankWordArray;
		var userGuess = event.key;
		console.log(userGuess)
		//this stores the letter pressed by the user as userGuess
		for (var j=0;j<secretWord.length; j++){
			if(userGuess === secretWordArray[j]) {
				blankWordArray[j] = userGuess;
				console.log(blankWordArray);
				document.getElementById("wordBlanks").innerHTML = blankWordArray;
			}
			if (blankWordArray === secretWordArray){
			wins++
			}
			else if (guessesLeft === 0){
			
			}
		}
		lettersGuessed.push(userGuess);
		console.log(lettersGuessed);
		document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;



	}



// document.onkeyup = function(event) {

// 	wins = wins+1;
// 	console.log(wins);
// 	document.getElementById("winsNum").innerHTML = wins;





