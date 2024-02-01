/*
7. Create two variables called firstNumber and secondNumber . Assign each of them with a
different number. Write a program that swaps both values.
*/

let firstNumber = 1;
    secondNumber = 2;

[firstNumber, secondNumber] = [secondNumber, firstNumber];

console.log(firstNumber);
console.log(secondNumber);

/* [firstNumber, secondNumber] = [secondNumber, firstNumber]; */

function swapNumberValues() {
    const box = secondNumber;
    secondNumber = firstNumber
    firstNumber = box
}

swapNumberValues();