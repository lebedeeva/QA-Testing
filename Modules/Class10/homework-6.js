// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
function sentenceToTitlecase(sentence) {
    let sentenceWords = sentence.split(' ');
    let titleCase = '';
    for (let i=0; i<=sentenceWords.length-1; i++) {
        titleCase = titleCase + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1,sentenceWords[i].length).toLowerCase() + ' ';
    }
    return titleCase;
};

let sentence = 'hAve a Great dAy'
console.log(`Q1. Sentence -> ${sentence}`);
console.log(`Sentence to titlecase using function-> ${sentenceToTitlecase(sentence)}`);




/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
function reverseString(sentence2) {
    let reversedString = sentence2.split(' ').reverse();
    let finalReversed = '';
    for (let i=0; i<=reversedString.length-1; i++) {
        finalReversed = finalReversed + reversedString[i] + ' ';
    }
    return finalReversed;
}
let sentence2 = 'hAve a Great dAy'
console.log(`\nQ2. Sentence2 -> ${sentence2}`);
console.log(`Sentence2 reversed using function-> ${reverseString(sentence2)}`);

/**
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
 function totalNumInArray(numArray) {
    let totalNum = 0;
    for (let i=0; i<=numArray.length-1; i++) {
        totalNum = totalNum + numArray[i];
    }
    return totalNum;
}
let numArray = [1, 1, 1, 2, 3, 1, 2]
console.log(`\nQ3. numArray -> ${numArray}`);
console.log(`Total of numbers in the array using function-> ${totalNumInArray(numArray)}`);

/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
 function numAvarageInArray(numArray2) {
    let numTotal = 0;
    for (let i=0; i<=numArray2.length-1; i++) {
        numTotal = numTotal + numArray2[i];
        numAvarage = numTotal/numArray2.length;
    }
    return numAvarage;
}
let numArray2 = [1, 1, 1, 2, 3, 1, 2]
console.log(`\nQ4. numArray2 -> ${numArray2}`);
console.log(`Avarage of numbers in the array using function-> ${numAvarageInArray(numArray2)}`);