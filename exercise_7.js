/*  5. Write a rockPaperScissors function that returns 1 if the first player won and 2 if the second
player won. In case of a draw, return 0.
rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0
 */

function rockPaperScissors (player1, player2)
{
    if (player1 == player2) {
        console.log("0");
    }
    else if ((player1 == "rock") && (player2 == "scissors")) {
        console.log("1");
    }
    else if ((player1 == "rock") && (player2 == "paper")) {
        console.log("2");
    }
}

rockPaperScissors('rock', 'scissors');
rockPaperScissors('rock', 'paper');
rockPaperScissors('paper','paper');