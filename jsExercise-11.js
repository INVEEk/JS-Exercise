/*
Create a variable studentScore and assign a number representing a student's score (0-100).
Use an if-else statement to determine the grade (A, B, C, D, E) based on the score and print the grade.
For instance, a score greater than or equal to 90 could be an 'A', 80-89 could be a 'B', and so on.
 */

const studentScore = 49;
    if (studentScore >= 90) {
        console.log(`A`);
    } else if (studentScore >= 80) {
        console.log(`B`);
    } else if (studentScore >= 70) {
        console.log(`C`);
    } else if (studentScore >= 60) {
        console.log(`D`);
    } else if (studentScore >= 50) {
        console.log(`E`);
    } else {
        console.log(`You did not pass the exam. Keep working more and more`);
}
