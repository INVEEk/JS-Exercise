/*
Extend the code, so it prints if the user can drive or not.
- To determine it, you need to check if the user is an adult and has a driving license. Assign true to the isAdult variable if the user has at least 18 years and false if the opposite.
- Assign true to canDriveLegally if the user can drive legally or false if not.
-  Make sure to print (alert() or console.log()) the value of the canDriveLegally variable in human-readable form.

const age = 21;
const hasDrivingLicense = true;
let isAdult, canDriveLegally;
*/

const age = 17;
let isAdult = (age > 18)

const hasDrivingLicense = true;

let canDriveLegally;
if (isAdult === true && hasDrivingLicense === true) {
    console.log(`User(${age}year old) can drive a car legally in Poland`);
} else {
    console.log(`User(${age}year old) cannot drive a car legally in Poland`);
}
