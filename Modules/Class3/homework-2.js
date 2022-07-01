/**
 * Convert temperature values into different units
 * (Rapidtable.com/convert/temperature)
 * 
 *  Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Due Date: July 3
 */

// °F -> °C
// T(°C) = (T(°F) - 32) * 5/9
let fTemp1 = 77
let cTemp1 = (fTemp1 - 32) * 5/9
console.log(`\n${fTemp1}°F equals to ${cTemp1}°C`)

// °F -> K
// T(K) = (T(°F) + 459.67) * 5/9
let kTemp1 = (fTemp1+ 459.67) * 5/9
console.log(`\n${fTemp1}°F equals to ${kTemp1} K`)

// °C -> °F
// T(°F) = T(°C) × 9/5 + 32
let cTemp2 = 30
let fTemp2 = cTemp2 * 9/5 + 32
console.log(`\n${cTemp2}°C equals to ${fTemp2}°F`)

// °C -> K
// T(K) = T(°C) + 273.15
let kTemp2 = cTemp2 + 273.15
console.log(`\n${cTemp2}°C equals to ${kTemp2} K`)

// K -> °F
// T(°F) = T(K) × 9/5 - 459.67
let kTemp3 = 250
let fTemp3 = kTemp3 * 9/5 - 459.67
console.log(`\n${kTemp3} K equals to ${fTemp3}°F`)

// K -> °C
// T(°C) = T(K) - 273.15
let cTemp3 = kTemp3 - 273.15
console.log(`\n${kTemp3} K equals to ${cTemp3}°C`)
