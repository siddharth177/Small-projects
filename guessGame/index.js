let guess = parseInt(prompt("guess the number"));
while(!guess){
    guess = parseInt(prompt("your guess is invalid , enter again"))
}
let target = Math.floor( Math.random() * 10 + 1 );
let count = 0;
while (true) {
    count++;
    if(guess == target) {
        console.log("congrats! you guessed correctly");
        console.log(`It took you ${count} guesses to guess correctly`)
        break;
    }
    else if(guess < target){
        guess = parseInt(prompt("Your guess is too low, enter a higher number"));
    }else{
        guess = parseInt(prompt("Your guess is too high, enter a lower number"));
    }
}

