/*
Write a program that checks if a person is eligible to vote. Declare a variable called
age
and assign it a numeric value. Use an if-else statement to determine if the person can vote (age >= 18) and print (using
console.log()) the result:
a citizen can vote
if the age is at least 18 a.
    a citizen can't vote
if the age is less than 18
*/

const age = 14
function isPersonQualifiedToVote (age) {
    if (age >= 18) {
        console.log(`A citizen can vote`);
    } else console.log(`A citizen can't vote`);
}

isPersonQualifiedToVote(age);
isPersonQualifiedToVote(18);


