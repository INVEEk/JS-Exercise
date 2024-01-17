/*
Write the getBillboardPrice function that accepts two arguments:

the text intended to use on the billboard

the cost of a single character

getBillboardPrice('Hello world!', 10); // 120
getBillboardPrice('Hello world!', 15); // 180
getBillboardPrice('To be, or not to be', 20); // 380
*/



function getBillboardPrice(text, cost) {
    return text.length * cost;