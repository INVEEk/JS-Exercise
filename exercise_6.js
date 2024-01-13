/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
Constraint:
1 <= month <= 12
*/

function whatQuarterIs(month)
{
    if ((month >= 1) && (month <= 3)) {
        console.log("1st quarter");
    }
    else if ((month >= 4) && (month <= 6)) {
        console.log("2nd quarter");
    }
    else if ((month >= 7) && (month <= 9)) {
        console.log("3rd quarter");
    }
    else if ((month >= 10) && (month <= 12)) {
        console.log("4th quarter");
    }
}

whatQuarterIs(9);

