/*
8. Create variables that hold grades from three different classes:
- Physics
- Math
- English

Calculate the average of the grades. If the average equals 4 out of 5 or higher, print "Good job!". Otherwise, print "Try harder!".
*/

const physics = 4;
const math = 5;
const english = 3;

function averageOfGrades(physicsGrade, mathGrade, englishGrade) {
    const average = (physicsGrade + mathGrade + englishGrade) / 3;
    if (average >=4) {
        console.log("Great Job!");
    } else {
        console.log("Try harder!");
    }
}

averageOfGrades(physics, math, english)