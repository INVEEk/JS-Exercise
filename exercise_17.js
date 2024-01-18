function basicMathOperations(operation, value1, value2) {
    if (operation === "+") {
        return value1 + value2
    }
    if (operation === "-") {
        return value1 - value2
    }
    if (operation === "*") {
        return value1 * value2
    }
    if (operation === "/") {
        return value1 / value2
    }
}

console.log(basicMathOperations('+', 4, 7));
console.log(basicMathOperations('-', 15, 18));
console.log(basicMathOperations('*', 5, 5));
console.log(basicMathOperations('/', 49, 7));