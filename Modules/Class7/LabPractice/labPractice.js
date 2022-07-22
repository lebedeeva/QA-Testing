let string1= 'Hello'; 
let string2= 'World';
// Concatenate the two strings to print “Hello World”

console.log(`${string1} ${string2}`);

console.log(`${string1.concat(' ', string2)}`); 

// Change last character of every word to Uppercase

let string3 = 'Its Summertime  ';
console.log(`${string3}`);

let string3Length = string3.length;
console.log(`${string3Length}`);

let string3Trimmed = string3.trim();
console.log(`${string3Trimmed}`);
console.log(`${string3Trimmed.length}`);

let string3Includes_umm = string3.includes('umm');
console.log(`String3 Includes umm -> ${string3Includes_umm}`);

let string3StartsWith_i = string3.startsWith('i');
console.log(`String3 starts with "i" -> ${string3StartsWith_i}`);

let string3I_to_i = string3.charAt(0).toLowerCase();
let string3StartsWith_i_2 = string3I_to_i.startsWith('i');
console.log(`String3 starts with "i" -> ${string3StartsWith_i_2}`);


