var secretnumber = 4;

var guess;
while(guess != secretnumber){
	guess = Number(prompt("Guess a Number"));

	if (guess === secretnumber) {
		alert("you got it right");
	}

	else if(guess > secretnumber){
		alert("Too High,   Guess Again");
	}
	else{
		alert("Too Low,    Guess Again");
	}
}
