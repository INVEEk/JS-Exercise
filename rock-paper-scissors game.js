/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

    Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
    Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

    Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

 */
const player1 = "Player 1 Won!"
const player2 = "Player 2 Won!"


function rpsls(pl1,pl2) {
    if (pl1 === pl2) {
        return "Draw!"
    }
    else if ((pl1 === "scissors" || pl1 === "lizard") && (pl2 === "paper")) {
        return player1;
    }
    else if ((pl1 === "paper" || pl1 === "spock") && (pl2 ==="rock")) {
        return player1;
    }
    else if ((pl1 === "rock" || pl1 === "scissors") && (pl2==="lizard")) {
        return player1;
    }
    else if ((pl1 === "lizard" || pl1 === "paper") && (pl2==="spock")) {
        return player1;
    }
    else if ((pl1 === "rock" || pl1 === "spock") && (pl2==="scissors")) {
        return player1;
    }
    else if ((pl2 === "scissors") && (pl1 === "lizard" || pl1==="paper")) {
        return player2;
    }
    else if ((pl2 === "paper") && (pl1 === "rock" || pl1==="spock")) {
        return player2;
    }
    else if ((pl2 === "rock") && (pl1 === "lizard" || pl1==="scissors")) {
        return player2;
    }
    else if ((pl2 === "lizard") && (pl1 === "spock" || pl1==="paper")) {
        return player2;
    }
    else if ((pl2 === "spock") && (pl1 === "rock" || pl1==="scissors")) {
        return player2;
    }
}

console.log(rpsls('rock', 'lizard'));
console.log(rpsls('paper', 'rock'));
console.log(rpsls('scissors', 'lizard'));
console.log(rpsls('lizard', 'paper'));
console.log(rpsls('spock', 'rock'));

console.log(rpsls('lizard','scissors'));
console.log(rpsls('spock','lizard'));
console.log(rpsls('paper','lizard'));
console.log(rpsls('scissors','spock'));
console.log(rpsls('rock','spock'));

console.log(rpsls('spock','spock'));
console.log(rpsls('rock','rock'));