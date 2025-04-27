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



// 03-037
function logger() {
    console.log('My name is Poorya');
}

logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);






















