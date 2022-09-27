var ps = require("prompt-sync");
var prompt = ps();

let answer = Math.floor(Math.random() * 100);
console.log("Welcome to the guessing game!");
console.log("In this game you will be attempting to guess a number between 1-100");
console.log("You're gonna start of with 8 lives, you are also given a hint whether the guess should be higher or lower");
console.log("let the game begin!")
let lives = 8;
let game = true;
while (game == true){
    let guess = prompt("Guess > ")
    if(answer > guess){
        console.log("Higher!")
        lives--;
    }
    if(answer < guess){
        console.log("Lower!")
        lives--;
    }
    if(lives == 0){
        console.log("Oh no, you ran out of lives...Game over!")
        game = false;
    }
    if(answer == guess){
        console.log("Congrats you guessed it correctly")
        game = false;
    }

}

