
// Comparison Operators (===, >=, <=, >, <, !==)
//
//Note: all Comparison result a boolean value

let num1 = 10
let num2 = 20

let num1GrEqNum2 = num1 >= num2   // >= : greater than or equals to
console.log(`${num1} >= ${num2} = ${num1GrEqNum2}`)

let num1LeEqNum2 = num1 >= num2   // <= : less than or equals to
console.log(`${num1} <= ${num2} = ${num1GrEqNum2}`)

let num1GrNum2 = num1 >= num2   // > : greater than 
console.log(`${num1} > ${num2} = ${num1GrEqNum2}`)

let num1LeNum2 = num1 >= num2   // < : less than
console.log(`${num1} < ${num2} = ${num1GrEqNum2}`)

/**
 * === : to compare if two values are equal (in value and same datatype)
 */

let num1EqNum2 = num1 === num2
console.log(`${num1} === ${num2} = ${num1EqNum2}`)

num1 = 20
num1EqNum2 = num1 === num2
console.log(`${num1} === ${num2} = ${num1EqNum2}`)

num1 = '20'
num1EqNum2 = num1 === num2
console.log(`${num1} === ${num2} = ${num1EqNum2}`)

num1EqNum2 = num1 == num2   // == : equal only in value, NOT in datatype
console.log(`${num1} == ${num2} = ${num1EqNum2}`)

/**
 * !== : to compare if two values are NOT equal (in value and datatype)
 * 
 *  == : to compare if two values are equal in value only
 * */

let num3 = 30
let num4 = 40

let num3NtEqNum4 = num3 !== num4
console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`)

num3 = '40'
num3NtEqNum4 = num3 !== num4
console.log(`${num3} !== ${num4} = ${num3NtEqNum4}`)

num3NtEqNum4 = num3 != num4
console.log(`${num3} != ${num4} = ${num3NtEqNum4}`)




