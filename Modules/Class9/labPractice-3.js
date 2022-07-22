let fruits = [`Orange`, `Apple`, `Grapes`,`Melon`,`Watermelon`, `Banana`];
console.log(fruits);
console.log(fruits.length);
let fruits1 = fruits.toString();
console.log(fruits1);
console.log(fruits1.toLowerCase());
/** 
 * To print fruit that starts with letter 'B'
*/
// console.log(fruits.abbr(B)) 
if (fruits[0].substring(0,1) === 'B'){
    console.log(fruits[0]);
} else if (fruits[1].substring(0,1) === 'B'){
    console.log(fruits[1]);
}
 // for (intilization; condition; increment/decriment ) {}
console.log(`\n`);
for (let i = 0; i <= fruits.length -1; i++){
    if (fruits[i].toLowerCase().substring(0,1) === 'b') {
        console.log(fruits[i]);
    }     
}

/**
 * Create a multiplying table for 2:
 * 2 x 0 = 0;
 * 2 x 1 = 2;
 * 2 x 2 = 4;
 * 
 */

let myNum = 2;
for (let i = 0; i <= 10; i++) {
    console.log(`${myNum} x ${i} = ${myNum * i}`);
}

let numbersArray = [3, 5, 1, 2, 4];
let numbersSum = 0;
for (let i = 0; i <= numbersArray.length-1; i++) {
    numbersSum = numbersSum + numbersArray[i];
}
console.log(numbersSum);