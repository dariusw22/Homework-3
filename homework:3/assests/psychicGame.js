// create a list that list out all of the options
var computerChoices = ["d", "a", "r", "i", "u", "s", "w", "l"]; 

var userWins = 0,
	userLoses = 0;
	

// this functon is called when a user hits a key to guess.
document.onkeyup = function(event) {

	// Determines what jey was pressed.
	var userGuess = event.key;

	// Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (userGuess === computerGuess) {
    	userWins++;
    	alert("You Won")
    } else {

    	     switch (event.key) {
                    case 'D':
                    case 'd':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'A':
                    case 'a':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'R':
                    case 'r':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'I':
                    case 'i':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'U':
                    case 'u':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'S':
                    case 's':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'W':
                    case 'w':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

            switch (event.key) {
                    case 'L':
                    case 'l':
                        if (computerGuess === 's') {
                            userWins++;
                            alert("You won!");
                        } else {
                            userLoses++;
                            alert("You lost!");
                        }
                        break;

         }

         // Alerts the key the user pressed 
         	alert("User Guess: " + userGuess);

         // Alerts the ccomputer's guess.
         	alert("Computer Guess: " + computerGuess);

         	var html =
         		"<p>You chose: " + userGuess + "</p>" +
         		"<p>Computer chose: " + computerGuess + "</p>" +
                "<p>Wins: " + userWins + "</p>" +
                "<p>Loses: " + userLoses + "</p>" +
                "<p>Ties: " + userTies + "</p>" +
                "<p><strong>Press R, P or S to continue</strong></p>";

            document.querySelector('#game').innerHTML = html;




};