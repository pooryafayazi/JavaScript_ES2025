'use strict';


/*
// 03-036
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// reserved keywords
const interface = 'Audio';
const private = 534;
*/


/*
// 03-037
// Function Declaration
function logger() {
    console.log('My name is Poorya');
}

logger();


// Function Declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/





// 03-038
// Function Declaration (called before declaration)
const age1 = calcAge1(1986); //called before declaration

function calcAge1(birthYear) {
    return 2025 - birthYear;
}

console.log(age1);


// Function Expression‍
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1986);
console.log(age2);




// 03-039
// Arrow Function with Block Body and Implicit Return
const calcAge3 = birthYear => 2025 - birthYear;

const age3 = calcAge3(1986);
console.log(age3);


// Arrow Function with Block Body and Explicit Return
const yearsUnitRetriement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUnitRetriement(1986, 'Poorya'));
console.log(yearsUnitRetriement(1982, 'Bob'));


























