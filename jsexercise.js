/* #1 Fix the code:

const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland;
yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

alert(yearsLeftToRetirenment);

the expected result of the above code:
37
*/

const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

alert(yearsLeftToRetirenment); // 37

/* #2 Fix the code (2 mistakes):

the expected result of the above code:
tax to pay: 1225

const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
const taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland;
}
taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert(`tax to pay: ${taxToPay}`);
*/

const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
const taxToPay = 0; // <-- taxToPay is declared as 0, can be overwritten by monthlyIncome * vatRateInPoland as it is const. If let, could stays as it is.

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland; // <--- #1 Mistake - let VAT is declared, not vat
}
taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert(`tax to pay: ${taxToPay}`);

/* #3 Declare a variable called isSunny and assign assign a boolean value to it. Create an if-else statement that checks if it's sunny. If it is, print "Don't forget your sunglasses!". If it's not, print "You might need an umbrella."
*/

let isSunny = true;
if (isSunny) {
    console.log ("Don't forget your sunglasses!");
} else console.log("You might need an umbrella.");

/* #4
Create a variable named
currentMonth
and assign a number representing the current month. Use an if statement to check the month and print a message based on the season (e.g., "It's winter" for December, January, and February).
 */

const currentMonth = 11;
if (currentMonth >= 1 && currentMonth <= 3) {
    console.log("It's winter");
} else if (currentMonth >= 4 && currentMonth <= 6)  {
    console.log("It's Spring!");
} else if (currentMonth >= 7 && currentMonth <= 9)  {
    console.log("It's Summer!");
} else {
    console.log("It's Autumn!");
}


/*
modify your greet function to accept two arguments:

the first name

and the last name

and combine them when calling the alert function in the body of your greet function

*/

const firstName = prompt('What is your first name?', 'User name');
const lastName = prompt('What is your last name?', 'User name');

function greetUser(name, surname) {
    alert(`Hello ${name} ${surname}. Best wishes for you`);
}

greetUser(firstName, lastName);

greetUser("Ala", "Nowak");
