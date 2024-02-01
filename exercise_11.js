/*
9. Write the convertMinutesToHours function.

const hours = convertMinutesToHours(75);
console.log(hours); // 1.25
*/


function convertMinutesToHours(minutes) {
    return minutes / 60;
}

const hours1 = convertMinutesToHours(90);
console.log(hours1); // 1.5

const hours2 = convertMinutesToHours(75);
console.log(hours2); // 1.25

function convertKilometersToMeters(kilometers) {
    return kilometers * 1000;
}

console.log(convertKilometersToMeters(1.5));

console.log(convertKilometersToMeters(22.7));