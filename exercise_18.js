/* Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

*/

function century(year) {
    let x = Math.floor(year / 100);
    if (year % 100 === 0)
        return x;
    else
        return x + 1;
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));