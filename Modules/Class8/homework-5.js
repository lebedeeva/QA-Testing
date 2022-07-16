// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
let sentence = 'haVe a gReat dAy';
console.log(`Q1: Sentence -> ${sentence}`);
let sentenceWords = sentence.split(' ');
let titleCase = '';
for (let i=0; i<=sentenceWords.length-1; i++) {
    titleCase = titleCase + sentenceWords[i].substring(0,1).toUpperCase() + sentenceWords[i].substring(1,sentenceWords[i].length).toLowerCase() + ' ';
}
console.log(`Converted titlecase sentence -> ${titleCase}`);
/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
let myString1 = 'have a great day';
console.log(`\nQ2: myString1 -> ${myString1}`);
let myStringWordsReversed = myString1.split(' ').reverse();
let reversedFinal = '';
for (let i = 0; i <= myStringWordsReversed.length-1; i++) {
    reversedFinal = reversedFinal + myStringWordsReversed[i] + ' ';
}
console.log(`Reversed myString1 -> ${reversedFinal}`);

let myString2 = 'hello dear how are you doing';
console.log(`\nmyString2 -> ${myString2}`);
let myString2ByWord = myString2.split(' ');
let myString2Reversed = '';
for (let i = myString2ByWord.length-1; i>=0; i--) {
    myString2Reversed = myString2Reversed + myString2ByWord[i] + ' ';
}
console.log(`Reversed myString2 -> ${myString2Reversed}`);

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */
let myNumbers = [1, 1, 1, 2, 3, 1, 2];
console.log(`\nQ3: myNumbers -> ${myNumbers}`);
let numbersTotal = 0;
for (let i = 0; i <= myNumbers.length-1; i++) {
    numbersTotal = numbersTotal + myNumbers[i];
}
console.log(`numbersTotal -> ${numbersTotal}`);

/**
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */
let myNumbers2 = [1, 1, 1, 2, 3, 1, 2];
console.log(`\nQ4: myNumbers2 -> ${myNumbers2}`);
let myNumbers2Total = 0;
for (i =0; i <= myNumbers2.length-1; i++) {
    myNumbers2Total = myNumbers2Total + myNumbers2[i];
}
console.log(`Avarage of myNumbers2 -> ${myNumbers2Total/myNumbers2.length}`);