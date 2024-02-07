/*
Create two variables
personWeight
and
personHeight
and assign some numbers there. Calculate the BMI (and store it in well-named variable) using the formula
BMI = weight / (height * height)
    . Print the calculated BMI.
 */

let personWeight = 90;
let personHeight = 1.86;

const userBMI = personWeight / (personHeight * personHeight);

console.log(userBMI);