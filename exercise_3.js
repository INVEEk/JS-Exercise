/* Implement the isThisBoolean function that returns true if provided 3. with a boolean.
isThisBoolean(true); //true
isThisBoolean(false); // true
isThisBoolean('true'); // false
*/

function isThisBoolean(probablyBoolean) {
    return typeof probablyBoolean === 'boolean';
}

console.log(isThisBoolean('10')); // false
console.log(isThisBoolean(10)); // false
console.log(isThisBoolean('false')); // false
console.log(isThisBoolean(false)); // true

