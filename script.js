// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Poorya');
// console.log(38);


// let firstName = "PoOrYa";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// let PI = 3.1415;

/*
let num = 40; //1.number
console.log("the type of " + num + " is " + typeof (num))

let lastName = "fayazi"; //2.string
console.log("the type of " + lastName + " is " + typeof (lastName))

let fine = true; //3.boolean
console.log("the type of " + fine + " is " + typeof (fine))

let unDefined; //4.undefined
console.log("the type of " + unDefined + " is " + typeof (unDefined))

let tohi = null  //5.empty or Null
console.log("the type of " + tohi + " is " + typeof (tohi))

let namad = ""; //6.symbol
console.log("the type of " + namad + " is " + typeof (namad))

let adadBozorg = 9999; //7.BigInt
console.log("the type of " + adadBozorg + " is " + typeof (adadBozorg))
*/

// true;
/*
console.log(true);
console.log("true");
console.log(typeof true)
*/


/*
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

let BMIMark;
let BMIJhon;
let markHigherBMI;

BMIMark = massMark / (heightMark ** 2);
BMIJhon = massJhon / (heightJhon ** 2);
markHigherBMI = BMIMark > BMIJhon;

console.log(BMIMark);
console.log(BMIJhon);
console.log(markHigherBMI);
*/

/*
const firstName = "Poorya";
const lastName = "Fayazi";
const age = 38;

const desc = `My name is ${firstName} ${lastName} and my age is ${age}.`;
console.log(desc);
console.log(`this is
how to use backtics
instead of
double quotation " "
or single quot ' '
!!!`);

console.log("this is \n\
how to use double quotation \n\
instead of \n\
backticks  \n\
or single quot ' ' \n\
!!!");
*/

/*
const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {     // if (age >= 18) {
    console.log(`can get driver license 🚕`);
} else {
    console.log(`${18 - age} years later can get driver license 😊`);
}
*/

/*
const birthYear = 2000;
if (birthYear % 100 === 0) {
    console.log(`the birth century is ${Math.floor(birthYear / 100) + 1}th.`);
} else {
    console.log(`the birth century is ${Math.ceil(birthYear / 100)}th.`);
}
*/


/*
const massMark = 78;
const heightMark = 1.69;
const massJhon = 92;
const heightJhon = 1.95;

let BMIMark;
let BMIJhon;

BMIMark = massMark / (heightMark ** 2);
BMIJhon = massJhon / (heightJhon ** 2);


if (BMIMark > BMIJhon) {
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJhon.toFixed(2)})!`);
}
else if (BMIMark < BMIJhon) {
    console.log(`John's BMI (${BMIJhon.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
} else {
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is equal to John's (${BMIJhon.toFixed(2)})!`);
}


function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
Example = round(3.80808, 2) // 3.81
// console.log(Example);
var numb = 123.23454.toFixed(2); // 123.23
// console.log(numb);
*/

/*
// 02-022
// type conversion
const bill = "275";
console.log(bill, typeof bill);
console.log(Number(bill), typeof Number(bill));
console.log(bill + 100);
console.log(Number(bill) + 100);

console.log(String(23), typeof String(23));

console.log(` 0 is ${Boolean(0)}, ${typeof Boolean(0)}`);
console.log(` 1 is ${Boolean(1)}, ${typeof Boolean(1)}`);
console.log(` "" is ${Boolean("")}, ${typeof Boolean("")}`);

// type coercion
console.log('I am ' + 38 + ' years old.');
console.log('I am ' + '38' + ' years old.');
console.log('I am ' + String(38) + ' years old.');

console.log('2024' - '4' - 10);
console.log('2024' + '4' + 10);
console.log('2024' + '4' - 10);
console.log('2024' - '4' + 10);

console.log('23' * '2');
console.log('23' / '2');
console.log(('23' / '0'), typeof ('23' / '0'));


let n = '1' + 1;
console.log(n, typeof n);
n = n - 1; // 10
console.log(n, typeof n);

let m = 1 + '1';
console.log(m, typeof m);
m = m - 1;
console.log(m, typeof m);
*/

/*
// 02-023
let firstName;
console.log(`5 falsy values: 0, NaN, '', undefined, null`);
console.log(`typeof 0              is ${typeof 0}`, `Boolean(0) is             ${Boolean(0)}`);
console.log(`typeof NaN            is ${typeof NaN}`, `Boolean(NaN) is           ${Boolean(NaN)}`);
console.log(`typeof ''             is ${typeof ''}`, `Boolean('') is            ${Boolean('')}`);
console.log(`typeof undefined      is ${typeof undefined}`, `Boolean(undefined) is  ${Boolean(undefined)}`);
console.log(`typeof let firstName; is ${typeof firstName}`, `Boolean(firstName) is  ${Boolean(firstName)}`);
console.log(`typeof null           is ${typeof null}`, `Boolean(null) is          ${Boolean(null)}`);

console.log(`-------------------------------------------------------`);
console.log(`truthy values: 1, '1', '0', ' ', [], {}, -1, Infinity`);

console.log(`typeof 1        is ${typeof 1}`, ` Boolean(1) is        ${Boolean(1)}`);
console.log(`typeof -1       is ${typeof -1}`, ` Boolean(-1) is       ${Boolean(- 1)}`);
console.log(`typeof Infinity is ${typeof Infinity}`, ` Boolean(Infinity) is ${Boolean(Infinity)} `);
console.log(`typeof '1'      is ${typeof '1'}`, ` Boolean('1') is      ${Boolean('1')}`);
console.log(`typeof '0'      is ${typeof '0'}`, ` Boolean('0') is      ${Boolean('0')}`);
console.log(`typeof 'Poorya' is ${typeof 'Poorya'}`, ` Boolean('Poorya') is ${Boolean('Poorya')}`);
console.log(`typeof []       is ${typeof []}`, ` Boolean([]) is       ${Boolean([])}`);
console.log(`typeof {}       is ${typeof {}}`, ` Boolean({}) is       ${Boolean({})}`);
*/


/*
// 02-024
console.log(`typeof 18 == "18"`, `Boolean(18 == "18") is ${Boolean(18 == "18")}`);
console.log(`typeof 18 === "18"`, `Boolean(18 === "18") is ${Boolean(18 === "18")}`);

// prompt("Enter your age: ");
let age = prompt("Enter your age: ");
console.log(`Your age is ${age}`);
console.log(`typeof prompt is ${typeof age}`);

if (age == 38) { // '38' == 38
    console.log(`prompt is string but same value`);
}
*/


/*
// 02-026
const hasDriverLicense = true; // A variable to indicate if the person has a driver's license
const hasGoodVision = false; // B variable to indicate if the person has good vision

console.log(`hasDriverLicense: ${hasDriverLicense}`);
console.log(`hasGoodVision: ${hasGoodVision}`);

console.log(`hasDriverLicense && hasGoodVision is ${hasDriverLicense && hasGoodVision}`); // Logical AND operator
console.log(`hasDriverLicense || hasGoodVision is ${hasDriverLicense || hasGoodVision}`); // Logical OR operator

console.log(`!hasDriverLicense is ${!hasDriverLicense}`); // Logical NOT operator
console.log(`!hasGoodVision is ${!hasGoodVision}`); // Logical NOT operator
console.log(`!(hasDriverLicense && hasGoodVision) is ${!(hasDriverLicense && hasGoodVision)}`);
console.log(`!(hasDriverLicense || hasGoodVision) is ${!(hasDriverLicense || hasGoodVision)}`);
console.log(`!hasDriverLicense || hasGoodVision is ${!hasDriverLicense || hasGoodVision}`);
console.log(`!hasDriverLicense && hasGoodVision is ${!hasDriverLicense && hasGoodVision}`);

// const shouldDrive = hasDriverLicense && hasGoodVision; // A && B variable to indicate if the person should drive

if (hasDriverLicense && hasGoodVision) {
    console.log(`You are able to drive!`);
} else {
    console.log(`You are not able to drive!`);
}

const isTired = true; // C variable to indicate if the person is tired

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log(`You are able to drive!`);
} else {
    console.log(`You are not able to drive!`);
}
*/


/*
// 02-028
// BONUS 1:
let scoreDolphins = (96 + 108 + 89) / 3; // A variable to store the average score of the Dolphins team
let scoreKoalas = (88 + 91 + 110) / 3; // B variable to store the average score of the Koalas team

console.log(`BONUS 1:`);
console.log(`Dolphins score: ${scoreDolphins.toFixed(2)}`);
console.log(`Koalas score: ${scoreKoalas.toFixed(2)}`);

if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`It's a draw! 🏆🏆`);
} else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win! 🏆`);
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
    console.log(`Koalas win! 🏆`);
} else {
    console.log(`No team wins! 🤷‍♂️`);
}


// BONUS 2:
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 123) / 3;

console.log(`BONUS 2:`);
console.log(`Dolphins score: ${scoreDolphins.toFixed(2)}`);
console.log(`Koalas score: ${scoreKoalas.toFixed(2)}`);

if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`It's a draw! 🏆🏆`);
} else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win! 🏆`);
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
    console.log(`Koalas win! 🏆`);
} else {
    console.log(`No team wins! 🤷‍♂️`);
}


// BONUS 3:
scoreDolphins = (97 + 112 + 101) / 3;
scoreKoalas = (109 + 95 + 106) / 3;

console.log(`BONUS 3:`);
console.log(`Dolphins score: ${scoreDolphins.toFixed(2)}`);
console.log(`Koalas score: ${scoreKoalas.toFixed(2)}`);

if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log(`It's a draw! 🏆🏆`);
} else if (scoreDolphins >= 100 && scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win! 🏆`);
} else if (scoreKoalas >= 100 && scoreKoalas > scoreDolphins) {
    console.log(`Koalas win! 🏆`);
} else {
    console.log(`No team wins! 🤷‍♂️`);
}
*/



/*
// 02-029
// const day = 'sunday';
let day = prompt('Enter the day of the week: ').toLowerCase();
console.log(`Today is ${day}`);

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;

    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;

    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;

    case 'friday':
        console.log(`Record videos`);
        break;

    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend!`);
        break;

    default:
        console.log(`Not a valid day!`);
}

// day = prompt('Enter the day of the week: ').toLowerCase();
// console.log(`Today is ${day}`);

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day!`);
}
*/


/*
// 02-030
// expression vs statement :

// expression: a piece of code that produces a value for example: 3 + 4, 1991, true, 'Poorya', undefined, null, etc.
// expression: 3 + 4;
// expression: true && false && !true;
// expression: 3 + 4 > 2;

// statement: a piece of code that performs an action for example: if, switch, while, for, etc.
// statement: if (3 + 4) { console.log('Hello') }
*/



/*
// 02-031
// ternary operator
const age = 19;
// condition ? valueIfTrue : valueIfFalse
// condition ?   if part   : else part
age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);

const drink = age >= 18 ? `wine 🍷` : `water 💧`;
console.log(`I like to drink ${drink}`);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`)
*/


/*
// 02-033
// ternary operator
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // ternary operator

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


bill = 40;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // ternary operator

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

bill = 430;
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; // ternary operator

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/























