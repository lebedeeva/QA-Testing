// Due Date : Tuesday Jul-05

/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
const sentence1 = 'Hello dear, how are you doing?';
let sentence1Length = sentence1.length;
let result1 = sentence1Length >= 10 ? 15 : 25;
console.log(`sentence1Length -> ${sentence1Length}`);
console.log(`result1 -> ${result1}`);


/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
 const sentence2 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 let sentence2ReplaceAllAwithAlpha = sentence2.replace(/a/gi, 'Alpha');
 console.log(`sentence2 -> ${sentence2}`);
 console.log(`sentence2ReplaceAllAwithAlpha -> ${sentence2ReplaceAllAwithAlpha}`);


/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */
const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
let sentence3Length = sentence3.length;
console.log(`\nsentence3 -> ${sentence3}`);
console.log(`\n1. sentence3Length -> ${sentence3Length}`);

let sentence3ToUppercase = sentence3.toUpperCase();
let startsWithPattern = "health";
let startsWithPattern_toUpperCase = startsWithPattern.toUpperCase();
let sentence3StartsWithHealthIgnoreCases = sentence3ToUppercase.startsWith(startsWithPattern_toUpperCase);
console.log(`\n2. sentence3StartsWithHealthIgnoreCases -> ${sentence3StartsWithHealthIgnoreCases}`);

let containsPattern = "Body";
let containsPattern_toUpperCase = containsPattern.toUpperCase();
let sentence3IncludesBodyIgnoreCases = sentence3ToUppercase.includes(containsPattern_toUpperCase);
console.log(`\n3. sentence3IncludesBodyIgnoreCases -> ${sentence3IncludesBodyIgnoreCases}`);

let indexOfBody = sentence3ToUppercase.indexOf(`${containsPattern_toUpperCase}`);
console.log(`\n4. indexOfBody -> ${indexOfBody}`);
 
let lastIndexOfSentence3 = sentence3.lastIndexOf('.');
let lastCharacterOfSentence3 = sentence3.charAt(`${lastIndexOfSentence3}`);
console.log(`\n5. lastCharacterOfSentence3 -> "${lastCharacterOfSentence3}"`);

let lastIndexOfBody = sentence3ToUppercase.lastIndexOf(`${containsPattern_toUpperCase}`);
let wordBodyIsPresentOnlyOnce = indexOfBody == lastIndexOfBody;
console.log(`\n6. wordBodyIsPresentOnlyOnce -> ${wordBodyIsPresentOnlyOnce}`);






