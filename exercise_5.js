/*

Implement the getCirclesAreaSum function that calls the getCircleArea function

const circlesAreaSum = getCirclesAreaSum(5, 10);
console.log(circlesAreaSum); // 392.69908169872417

*/

function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

function getCirclesAreaSum(firstRadius, secondRadius) {
    return getCircleArea(firstRadius) + getCircleArea(secondRadius)
}

const circlesAreaSum = getCirclesAreaSum(5, 11);
console.log(circlesAreaSum); // 392.69908169872417