/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 const countryName = 'Ukraine';
 console.log(`Q1: Country name -> ${countryName}`);

 const countryNameSplited = countryName.split('');
 console.log(`The length of the country -> ${countryNameSplited.length}`)


 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 console.log(`\nQ2: Sentence -> ${sentence}`)
 
 const sentenceSplited = sentence.split(' ');
 console.log(`The number of words in the sentence -> ${sentenceSplited.length}`);
 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 let sentence2 = 'have a gReat dAy';
 console.log(`\nQ3: Sentence2 -> ${sentence2}`);
 let word1 = sentence2.substring(0,1).toUpperCase() + sentence2.substring(1,4).toLowerCase();
 let word2 = sentence2.substring(5,6).toUpperCase();
 let word3 = sentence2.substring(7,8).toUpperCase() + sentence2.substring(8,12).toLowerCase();
 let word4 = sentence2.substring(13,14).toUpperCase() + sentence2.substring(14,16).toLowerCase();
 console.log(`Sentence2 converted into Titlecase -> ${word1} ${word2} ${word3} ${word4}`);

 let sentence3 = 'YOu lIvE oNly ONce';
 console.log(`\nSentence3 -> ${sentence3}`); 
 let sentence3Split = sentence3.split(' ');
 let word_1 = sentence3Split[0].substring(0,1).toUpperCase() + sentence3Split[0].substring(1).toLowerCase();
 let word_2 = sentence3Split[1].substring(0,1).toUpperCase() + sentence3Split[1].substring(1).toLowerCase();
 let word_3 = sentence3Split[2].substring(0,1).toUpperCase() + sentence3Split[2].substring(1).toLowerCase();
 let word_4 = sentence3Split[3].substring(0,1).toUpperCase() + sentence3Split[3].substring(1).toLowerCase();
 console.log(`Sentence3 converted into Titlecase -> ${word_1} ${word_2} ${word_3} ${word_4}`);
 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 let sentence4 = 'have a great day';
 console.log(`\nQ4: Sentence4 -> ${sentence4}`);

 let sentence4Splited = sentence4.split(' ');
 let char1 = sentence4Splited[0].toUpperCase().substring(0,1);
 let char2 = sentence4Splited[1].toUpperCase().substring(0,1);
 let char3 = sentence4Splited[2].toUpperCase().substring(0,1);
 let char4 = sentence4Splited[3].toUpperCase().substring(0,1);
 console.log(`Abbreviation of sentence4 -> ${char1}${char2}${char3}${char4}`);
