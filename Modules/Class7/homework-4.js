// Due date: Fri (Jul 15) eod

/**
 * 1. create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */
let studentScore = 40;
let maxScore = 50;
console.log(`1. studentScore -> ${studentScore} \nmaxScore -> ${maxScore}`);
if (studentScore*100/maxScore <= 100 && studentScore*100/maxScore >= 91 ) {
    console.log(`Student grade is A`);
} else if (studentScore*100/maxScore <= 90.99 && studentScore*100/maxScore >= 81 ) {
    console.log(`Student grade is B`);
} else if (studentScore*100/maxScore <= 80.99 && studentScore*100/maxScore >= 71 ) {
    console.log(`Student grade is C`);
} else if (studentScore*100/maxScore <= 70.99 && studentScore*100/maxScore >= 61 ) {
    console.log(`Student grade is D`);
} else if (studentScore*100/maxScore <= 60.99 && studentScore*100/maxScore >= 51 ) {
    console.log(`Student grade is E`);
} else if (studentScore*100/maxScore < 51 ) {
    console.log(`Student grade is F`);
} else {
    console.log(`Invalid student score`);
}

let studentScore2 = 70;
let maxScore2 = 130;
console.log(`\nstudentScore2 -> ${studentScore2} \nmaxScore2 -> ${maxScore2}`);
if (studentScore2*100/maxScore2 <= 100 && studentScore2*100/maxScore2 >= 91 ) {
    console.log(`Student2 grade is A`);
} else if (studentScore2*100/maxScore2 <= 90.99 && studentScore2*100/maxScore2 >= 81 ) {
    console.log(`Student2 grade is B`);
} else if (studentScore2*100/maxScore2 <= 80.99 && studentScore2*100/maxScore2 >= 71 ) {
    console.log(`Student2 grade is C`);
} else if (studentScore2*100/maxScore2 <= 70.99 && studentScore2*100/maxScore2 >= 61 ) {
    console.log(`Student2 grade is D`);
} else if (studentScore2*100/maxScore2 <= 60.99 && studentScore2*100/maxScore2 >= 51 ) {
    console.log(`Student2 grade is E`);
} else if (studentScore2*100/maxScore2 < 51 ) {
    console.log(`Student2 grade is F`);
} else {
    console.log(`Invalid student2 score`);
}

/**
 * 2. Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */
let myNumber = 19;
console.log(`\n2. myNumber -> ${myNumber}`);
if (myNumber % 3 == 0 && myNumber % 5 == 0) {
    console.log(`myNumber is divisible by 5 and 3`);
} else if (myNumber % 5 == 0) {
    console.log(`myNumber is divisible by 5`);
} else if (myNumber % 3 == 0) {
    console.log(`myNumber is divisible by 3`);
} else if (myNumber % 3 != 0 || myNumber % 5 != 0) {
    console.log(`myNumber is ${myNumber}`);
}

let myNumber2 = 15;
console.log(`\nmyNumber2 -> ${myNumber2}`);
if (myNumber2 % 3 == 0 && myNumber2 % 5 == 0) {
    console.log(`myNumber2 is divisible by 5 and 3`);
} else if (myNumber2 % 3 == 0) {
    console.log(`myNumber2 is divisible by 3`);
} else if (myNumber2 % 5 == 0) {
    console.log(`myNumber2 is divisible by 5`);
} else if (myNumber2 % 3 == 0 && myNumber2 % 5 == 0) {
    console.log(`myNumber2 is ${myNumber2}`);
}

/**
 * 3. let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 let planets = ['Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 console.log(`\n3. planets -> ${planets}`);
 if (planets[0] == 'Earth') {
    console.log(`Earth is mentioned in expected index`);
 } else {
    planets.unshift('Earth');
    console.log(`${planets}`);
}
 
let planets2 = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
console.log(`\nplanets2 -> ${planets2}`);
if (planets2[0] == 'Earth') {
   console.log(`Earth is mentioned in expected index`);
} else {
   planets2.unshift('Earth');
   console.log(`${planets2}`);
}

/**
 * 4. const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.
 * 
 */

const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
console.log(`\n4. sports -> ${sports}`);
if (sports[2] == 'BASKETBALL') {
    console.log(`BASKETBALL is present at index-2`);
} else if (sports.includes('BASKETBALL')) {
    console.log(`BASKETBALL is mentioned in the sports array`);
} else {
    console.log(`${sports.splice(2, 1, 'BASKETBALL')} was removed from the sports array`);
}

const sports2 = ['Football', 'Soccer', 'Tennis', 'BASKETBALL', 'Baseball', 'Rugby'];
console.log(`\nsports2 -> ${sports2}`);
if (sports2[2] == 'BASKETBALL') {
    console.log(`BASKETBALL is present at index-2`);
} else if (sports2.includes('BASKETBALL')) {
    console.log(`BASKETBALL is mentioned in the sports array`);
} else {
    console.log(`${sports2.splice(2, 1, 'BASKETBALL')} was removed from the sports array`);
}

const sports3 = ['Football', 'Soccer', 'Tennis', 'Baseball', 'Rugby'];
console.log(`\nsports3 -> ${sports3}`);
if (sports3[2] == 'BASKETBALL') {
    console.log(`BASKETBALL is present at index-2`);
} else if (sports3.includes('BASKETBALL')) {
    console.log(`BASKETBALL is mentioned in the sports array`);
} else {
    console.log(`${sports3.splice(2, 1, 'BASKETBALL')} was removed from the sports array`);
}