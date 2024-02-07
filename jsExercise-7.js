/*
Write a code that simulates a traffic light. Declare a variable called currentColor
values "red", "yellow", or "green". Use an if statement to print a message based on the current color (e.g., "Stop" for red, "Speed up" for yellow, "Go" for green).
 */

let currentColor = `green`;
    if (currentColor === "red") {
        console.log(`Stop`);
    } else if (currentColor === "yellow") {
        console.log(`Speed up!`);
    } else if (currentColor === "green") {
        console.log(`Go!`);
    }
