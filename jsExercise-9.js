/*
Declare a variable and assign a number to it. Print "Divisible by 3" if the variable is divisible
by 3. Print "Divisible by 5" if the variable is divisible by 5. Print "Divisible by 3 and 5" if the variable is divisible both by 3
by 5.
*/

const isDivisibleByThree = 25
if (isDivisibleByThree % 3 === 0 && isDivisibleByThree % 5 != 0) {
    console.log(`Divisible by 3`);
} else if (isDivisibleByThree % 5 === 0 && isDivisibleByThree % 3 != 0) {
    console.log(`Divisible by 5`);
} else if (isDivisibleByThree % 5 === 0 && isDivisibleByThree % 3 === 0) {
    console.log(`Divisible by 3 and 5`);
}