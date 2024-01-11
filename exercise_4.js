/* Implement the getCircleArea function

const radius = 5;
const area = getCircleArea(radius);
console.log(area); // 78.53981633974483

*/

function getCircleArea(radius) {
    return Math.PI * radius * radius
}

const area = getCircleArea(5);
console.log(area);