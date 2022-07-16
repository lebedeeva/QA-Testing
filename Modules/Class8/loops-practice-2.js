// const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * Print values present on even-index
 * 
 * eg: 
 * Football
 * BASKETBALL
 * Rugby
 */

 let sports = ['football', 'soccer', 'basketball', 'tennis', 'volleyball' ]

 for(let counter = 0; counter <= sports.length-1; counter+=2 ) {
    console.log(sports[counter]);
 }

 /**
 * Create abbreviation for any sentence
 * 
 * 'have a great day'   ->  'HAGD'
 * 'YOu lIVe ONlY' ->  'YLO'
 * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
 * 
 */
let sentence = ['yOu', 'neVER', 'WaLK', 'alOne', 'in', 'liFe']
console.log(`sentence -> ${sentence}`);
let abbr = '';
const sentenceWords = sentence.toUpperCase().split(' ');

for (let i=0 ; i <= sentenceWords.length-1 ; i++ ) {
    abbr = abbr + sentenceWords[i].substring(0,1);
}
console.log(`abbr -> ${abbr}`);

 /**
 * print the array-values in reverse order
 * 
 * eg:
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */

  const sports2 = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

  let result2 = sports2.reverse();

  for (let counter = 0; counter <= result2.length-1; counter++) {
    console.log(result2[counter]);
  }
