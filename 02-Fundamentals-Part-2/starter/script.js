"use strict";

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

/*
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


// includes check if element exists
console.log(friends.includes('Steven')); // true
console.log(friends.includes('John')); // false

friends.push(23);
console.log(friends.includes('23')); // false (string)
console.log(friends.includes(23)); // true (number)


if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
} else {
    console.log('You have no friend called Steven');
}
*/

/*
// 03-046
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
console.log(`bills: ${bills}`);
console.log(`tips: ${tips}`);
console.log(`total: ${total}`);
*/

/*
// 03-047
// Array Literal
const pooryaArray = [
    'Poorya',
    'Fayazi',
    2025 - 1986,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];
console.log(pooryaArray);


// Object Literal
const poorya = {
    firstName: 'Poorya',
    lastName: 'Fayazi',
    age: 2025 - 1986,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};



// 03-049
console.log(poorya);

console.log(poorya.lastName);
console.log(poorya['lastName']);

console.log(poorya['friends']);
console.log(poorya['friends'][0]);

const nameKey = 'Name';
console.log(poorya['first' + nameKey]);
console.log(poorya['last' + nameKey]);

// console.log(poorya.'last' + nameKey); // Error: Unexpected string

const interestedIn = prompt('What do you want to know about Poorya? Choose between firstName, lastName, age, job, friends');
if (poorya[interestedIn]) {
    console.log(poorya[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
}

poorya.location = 'America';
poorya['github'] = 'pooryafayazi';
console.log(poorya);

// Challenge
// "Poorya has 3 friends, and his best friend is Michael"
console.log(`${poorya.firstName} has ${poorya.friends.length} friends, and his best friend is ${poorya.friends[0]}`);
*/

/*
// 03-050
// Object Method
const poorya = {
    firstName: 'Poorya',
    lastName: 'Fayazi',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: true,

    // function expression is called -> "method"
    calcAge: function (birthYear) {
        return 2025 - birthYear;
    },
};


console.log(poorya.calcAge(1986));
console.log(poorya['calcAge'](1986));
console.log(poorya.calcAge(poorya.birthYear));


const poorya2 = {
    firstName: 'Poorya',
    lastName: 'Fayazi',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: true,

    // function without parameter
    calcAge: function () {
        console.log(this); // "this" is the object itself
        // this.birthYear = 1986;
        return 2025 - this.birthYear;
    },
};

console.log(poorya2.calcAge());


const poorya3 = {
    firstName: 'Poorya',
    lastName: 'Fayazi',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriverLicense: false,

    // function without parameter
    calcAge: function () {
        this.age = 2025 - this.birthYear;  // add age property to the object
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`;
    },
};

console.log(poorya3.calcAge());
console.log(poorya3.age);
console.log(poorya3.getSummary());
*/

/*
// 03-052
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi);


john.calcBMI();
console.log(john.bmi);


if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(2)})`);
} else {
    console.log(`Both have the same BMI (${mark.bmi.toFixed(2)})`);
}
*/

/*
// 03-053
// for loop has three parts:
// for (initial value as a counter ; check condition before each loop ; update counter after iteration )
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetation ${rep} 🏋️‍♀️`);
}
*/

/*
// 03-054
// Looping Arrays, Breaking and Continuing
const pooryaArray = [
    'Poorya',
    'Fayazi',
    2025 - 1986,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    false
];
// console.log(pooryaArray);

const types = [];
const types2 = [];

for (let i = 0; i < pooryaArray.length; i++) {
    // Reading from pooryaArray
    console.log(pooryaArray[i], typeof pooryaArray[i]);

    // Filling types array
    types[i] = typeof pooryaArray[i];
    types2.push(typeof pooryaArray[i]); // another way to fill array
}

console.log(types);
console.log(types2);

const years = [1991, 1984, 2008, 2020];
const ages = [];
const ages2 = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = 2025 - years[i];
    ages2.push(2025 - years[i]); // another way to fill array
}

console.log(ages);
console.log(ages2);


// Continue and Break
console.log('--- Only Strings ---');
for (let i = 0; i < pooryaArray.length; i++) {
    if (typeof pooryaArray[i] !== 'string') continue; // skip if not string

    console.log(pooryaArray[i], typeof pooryaArray[i]);
}

console.log('--- Break with Number ---');
for (let i = 0; i < pooryaArray.length; i++) {
    if (typeof pooryaArray[i] === 'number') break; // break if number

    console.log(pooryaArray[i], typeof pooryaArray[i]);
}
*/

/*
// 03-055
// Looping Backwards and Loops in Loops
const pooryaArray = [
    'Poorya',
    'Fayazi',
    2025 - 1986,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];
// console.log(pooryaArray);

const types = [];
const types2 = [];
const types3 = [];

// Looping backwards
for (let i = pooryaArray.length - 1; i >= 0; i--) {
    // Reading from pooryaArray
    console.log(i, pooryaArray[i], typeof pooryaArray[i]);

    // Filling types array
    types[i] = typeof pooryaArray[i];
    types2[pooryaArray.length - 1 - i] = typeof pooryaArray[i];
    types3.push(typeof pooryaArray[i]);
}

console.log(types);
console.log(types2);
console.log(types3);


// Loop in Loop
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ${"🤞".repeat(exercise)} --- `);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetation ${rep} 🏋️‍♀️`);
    }
}
*/

/*
// 03-056
// While Loop with condition check before each loop
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetation ${rep} ${"🏋️‍♀️".repeat(rep)}`);
    rep++;
}


console.log('--- random number between 0 and 1  ---');
console.log(Math.random()); // random number between 0 and 1   

console.log("--- random number between 0 and 6 but it's not an integer ---");
console.log(Math.random() * 6); // random number between 0 and 6 but it's not an integer

console.log('--- random integer between 0 and 5 ---');
console.log(Math.trunc(Math.random() * 6)); // random integer between 0 and 5


// while loop
console.log('--- While Loop ---');
let dice = Math.trunc(Math.random() * 6) + 1; // random number between 1 and 6
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) console.log('Loop is about to end...');
}



// do while loop 
console.log('--- Do While Loop ---');
let dice2 = Math.trunc(Math.random() * 6) + 1;
do {
    console.log(`You rolled a ${dice2}`);
    dice2 = Math.trunc(Math.random() * 6) + 1;

    if (dice2 === 6) console.log('Loop is about to end...');
} while (dice2 !== 6); // check condition after each loop
*/

/*
// 03-058
// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
    // Calculate tip and total
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);

    console.log(`Bill: ${bills[i]}, Tip: ${tip}, Total: ${bills[i] + tip}`);
}
console.log(bills, tips, totals);
console.log('--- All Bills, Tips and Totals ---');
console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals: ${totals}`);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(`Average Tip: ${calcAverage(tips)}`);
console.log(`Average Total: ${calcAverage(totals)}`);
console.log(`Average Bill: ${calcAverage(bills)}`);
*/

/*
// 05-070
const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(str);
};

const arr1 = [17, 21, 23];
console.log(printForecast(arr1));

const arr2 = [12, 5, -5, 0, 4];
console.log(printForecast(arr2));
*/

// 05-072
const freelancers = function (arr) {
  let totalHours = 0;
  let numberOfDaysWorked = 0;

  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[i];
    if (arr[i] !== 0) numberOfDaysWorked += 1;
  }
  const tot = arr.reduce((a, b) => a + b, 0);
  const averageDailyHours = totalHours / arr.length;
  const mostHours = Math.max(...arr);
  const fullTime = totalHours >= 35 ? "is full-time" : "is not full-time";

  console.log(`total time : ${totalHours}`);
  console.log(`tot : ${tot}`);
  console.log(`number of days worked : ${numberOfDaysWorked}`);
  console.log(`average daily hours : ${averageDailyHours.toFixed(2)}`);
  console.log(`most hours : ${mostHours}`);
  console.log(`this week ${fullTime}`);
};

freelancers([7.5, 8, 6.5, 0, 8.5, 4, 0]);
