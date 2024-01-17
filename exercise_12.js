/*
10. Write the isTextUppercase  function.

isTextUppercase('Hello'); // false
isTextUppercase('HELLO'); // true
*/


function isTextUppercase(sentence) {
    if(typeof sentence !== 'string') {
        return false
    }
    const upperCasedSentence = sentence.toUpperCase()
    return upperCasedSentence === sentence;
} 