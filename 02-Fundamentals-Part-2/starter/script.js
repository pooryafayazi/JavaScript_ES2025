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
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
} else {
    console.log(`Both have the same BMI (${mark.bmi})`);
}












