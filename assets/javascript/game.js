
var bakeryWords = ["croissant", "donut", "cupcake", "macaron", "snickerdoodle", "kolache", "baguette", "muffin", "brownie"]

var wins = 0;
var guessesLeft = 12;
var secretWord = "";
var blankWord = "";
var secretWordArray = [];
var blankWordArray = [];
var blankWordSpace = "";
var lettersGuessed = [];
var winMessage = "You guessed the word! You get a treat! Press space to play again!";
var loseMessage = "You did not guess the word. No treats for you! Press space to play again.";
var clearMessage = " ";
var file = "";

document.onkeyup = function(e) {
	console.log(e.which);
	if(e.which === 32){
		//clears out variables from previous rounds
		blankWordArray = [];
		blankWordSpace = "";
		blankword = "";
		guessesLeft = 12;
		lettersGuessed = [];
		document.getElementById("wordBlanks").innerHTML = blankWordSpace;
		document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		document.getElementById("messageSpace").innerHTML = clearMessage;
		document.getElementById("foodPrize").src = "";

		//selects the word that the player is trying to guess and creates an array of that word and an array of blanks. The blanks that are
		//displayed in the HTML are the joined array of blanks to remove the commas.
		secretWord = bakeryWords[Math.floor(Math.random()*bakeryWords.length)];
		console.log(secretWord);
		secretWordArray = secretWord.split("");
		console.log(secretWordArray);
		console.log(secretWord.length);
		for(var i=0;i<secretWord.length;i++){
			blankWordArray.push("_");
		}
		console.log(blankWordArray);
		blankWordSpace = blankWordArray.join(" ");
		//prints blanks with spaces in between them to match the secret word.
		document.getElementById("wordBlanks").innerHTML = blankWordSpace;
		
	}
	else{		
		//assigns the key pressed to userGuess
		var userGuess = event.key;
		//writes guess into the lettersGuessed array for the first letter guessed and any other guesses that are not already in the array.
		//guesses left is decreased if the letter is added to the lettersGuessed array
		console.log(lettersGuessed.length);
		if (lettersGuessed.length == 0){
			lettersGuessed.push(userGuess);
			console.log(lettersGuessed);
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
			guessesLeft--;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			if (guessesLeft === 0){
				document.getElementById("messageSpace").innerHTML = loseMessage;
			}
			} 
		else if ((lettersGuessed.includes(userGuess))==false){
			console.log(userGuess);
			lettersGuessed.push(userGuess);
			console.log(lettersGuessed);
			document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
			guessesLeft--;
			document.getElementById("guessesLeft").innerHTML = guessesLeft;
			if (guessesLeft === 0){
				document.getElementById("messageSpace").innerHTML = loseMessage;
			}
		}
		
		else if (guessesLeft === 0){
				document.getElementById("messageSpace").innerHTML = loseMessage;
			}
		

		//checks to see if userGuess is equal to any of the letters in the secretWord by looping through the secretWordArray. 
		//if the letter is in the word, it will show up in the blankWordArray and the blankWordSpaces shown in HTML.
		//once the user has guessed all the letters, the win count will go up and the win message is displayed.
		//if the user has not guessed all the letters by the time guessesLeft = 0, the lose message is displayed.
		for (var j=0;j<secretWord.length; j++){
			if(userGuess === secretWordArray[j]) {
				blankWordArray[j] = userGuess;
				console.log(secretWordArray);
				blankWordSpace = blankWordArray.join(" ");
				blankWord = blankWordArray.join("");
				document.getElementById("wordBlanks").innerHTML = blankWordSpace;
				console.log(secretWord);
				console.log(blankWord);
				console.log(guessesLeft)
				if (blankWord === secretWord){
					wins++;
					console.log(wins);
					document.getElementById("winsNum").innerHTML = wins;
					document.getElementById("messageSpace").innerHTML = winMessage;
					file = "assets/images/"+secretWord+".jpg";
					console.log(file);
					document.getElementById("foodPrize").src = file;
				}
				// if (guessesLeft === 0){
				// 	document.getElementById("messageSpace").innerHTML = loseMessage;
				// }
				
			}
				
			}
		
		}
	}









