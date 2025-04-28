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




/*
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
*/




/*
// 03-040
// Function Calling Another Function
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/



/*
// 03-043
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1c
let aveDolphins = calcAverage(44, 23, 71);
let aveKoalas = calcAverage(65, 54, 49);
console.log(aveDolphins, aveKoalas);


// const checkWinner = function (aveDolphins, aveKoalas) {
function checkWinner(aveDolphins, aveKoalas) {
    if (aveDolphins >= 2 * aveKoalas) {
        console.log(`Dolphins win 🏆 (${aveDolphins} vs. ${aveKoalas})`);
    } else if (aveKoalas >= 2 * aveDolphins) {
        console.log(`Koalas win 🏆 (${aveKoalas} vs. ${aveDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(aveDolphins, aveKoalas);


// Test 2
aveDolphins = calcAverage(85, 54, 41);
aveKoalas = calcAverage(23, 34, 27);

console.log(aveDolphins, aveKoalas);
checkWinner(aveDolphins, aveKoalas);
*/




/*
// 03-044
// Array Declaration
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);


friends[2] = 'Jay';
console.log(friends);

// friends = ['Bob', 'Alice']; // Error: Assignment to constant variable.

const firstName = 'Poorya';
const jonas = [firstName, 'Fayazu', 2025 - 1986, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);
console.log(jonas[0]);
console.log(jonas[4][2]);

// Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years2 = [1991, 1984, 2008, 2020];

const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ages);
*/





// 03-045
// Array Method: push, unshift, pop, shift, indexOf, includes
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


// push add to the end
console.log(`push Jay, add to the end`);
friends.push('Jay');
console.log(friends);


// unshift add to the beginning
console.log(`unshift John, add to the beginning`);
friends.unshift('John');
console.log(friends);


// pop remove last element
const popped = friends.pop();
console.log(`popped: ${popped}, remove last element`);
console.log(friends);


// shift remove first element
const shifted = friends.shift();
console.log(`shifted: ${shifted}, remove first element`);
console.log(friends);


// indexOf find index of element
console.log(friends.indexOf('Michael'));
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Peter'));
console.log(friends.indexOf('John')); // -1 (not found)






