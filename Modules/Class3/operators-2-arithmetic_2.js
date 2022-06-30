let num1 = 10
//num1 + 1 is the same as num1++
num1++    // num1 = num1 + 1

/**
 * Decrement Operator (--)
 *      Decreases the value in variable by 1
 * 
 * num1 = 10
 * num1--  // num1 = 9
 * 
 */

/**
 * Post-decrement executes always after all other operators
 * Pre-decrement executes always before all other operators
 */
num1--    // post-decrement
--num1    // pre-decrement

let num3 = 10
let res2 = num3++ - num3 // (subtraction, assignment, post-increment)

console.log(`res2 = ${res2}`)
console.log(`num3 = ${num3}`)
