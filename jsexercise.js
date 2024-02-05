/* #1 Fix the code:

const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland;
yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

alert(yearsLeftToRetirenment);

the expected result of the above code:
37
*/

const currentAge = 30;
const retirenmentAgeInPoland = 67;
const yearsLeftToRetirenment = retirenmentAgeInPoland - currentAge;

alert(yearsLeftToRetirenment); // 37

/* #2 Fix the code (2 mistakes):

the expected result of the above code:
tax to pay: 1225

const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
const taxToPay = 0;

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland;
}
taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert(`tax to pay: ${taxToPay}`);
*/

const isPayingVAT = true;
let VATRateInPoland = 0.23;
const incomeTaxRate = 0.12;
let monthlyIncome = 3500;
const taxToPay = 0; // <-- taxToPay is declared as 0, can be overwritten by monthlyIncome * vatRateInPoland as it is const. If let, could stays as it is.

if (isPayingVAT) {
    taxToPay = monthlyIncome * vatRateInPoland; // <--- #1 Mistake - let VAT is declared, not vat
}
taxToPay = taxToPay + monthlyIncome * incomeTaxRate;

alert(`tax to pay: ${taxToPay}`);
