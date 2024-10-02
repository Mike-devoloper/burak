console.log("train ts file ishga tushdi");
/*
G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

// function getHighestIndex(arr) {
//     let maxIndex = 0;  

//     for (let i = 1; i < arr.length; i++) {  
//         if (arr[i] > arr[maxIndex]) {  
//            const result = maxIndex = i;  
//         }
//     }

//     console.log(maxIndex, "sizning katta indexingiz");  
// }

// getHighestIndex([5, 21, 12, 78, 8]);


/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/

// function getPositive(arr) {
//     const result = arr
//         .filter(value => typeof value === 'number' && value > 0) 
//         .join(""); 

//     console.log(result);
//     return result;
// }

// getPositive([5, 21, 12, 78, -8]); 



// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"


// function getNumbers(string) {
//     let result = '';
//     for(let i = 0;  i < string.length; i++) {
//         if(!isNaN(string[i]) && string[i] !== '' ) {
//             result += string[i];
//         }
//     }
//     console.log(result);
//     return result;
  
// }


// getNumbers('hello9808');


/* Project Standarts
 - Logging standarts
 - Naming standarts
   CAMEL => function, method, variable 
   PASCAL => class,
   KEBAB => folder
   SNAKE => css

 -ERROR handling
*/


/* Most used API's
Traditional API
REST API 
Graphql API
...
*/

/*I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
*/

// function majorityElement(arr) {
//     const elementCount = {};
//     let maxElement = arr[0];
//     let maxCount = 0;
  
  
//     arr.forEach(num => {
//       elementCount[num] = (elementCount[num] || 0) + 1;
  
  
//       if (elementCount[num] > maxCount) {
//         maxElement = num;
//         maxCount = elementCount[num];
//       }
//     });
  
//     return maxElement;
//   }
  

//   console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); 

/* 
Traditional FD => BSSR (BURAK ADMIN)=> EJS 
MODERN FD => SPA  (USER's application)=> REACT 
*/


/* J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
*/

/* 
K-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
*/
// function getVowels(string:string):number{
//   const vowels = 'auioe';
//   let numberOfVowels = 0;

//   for (let ele of string) {
//     if(vowels.includes(ele)) {
//       numberOfVowels++;
//     }
  
//   }
//   return numberOfVowels;
// }


// console.log(getVowels("hello"));
// console.log(getVowels("auieo"));

/* L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

 */
// function getReversedWords(str: string) {
//   return str.split(' ')
//   .map(word => word.split('').reverse().join(''))
//   .join(' ');
// }

// console.log(getReversedWords("we like coding"));


/* M-TASK: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

 */


// function getSquareNumbers(arr: number[]) {
//   return arr.map(num => ({
//       number: num,
//       square: num * num
//   }));
// }

// console.log(getSquareNumbers([1, 2, 3]));

/* N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/

// function palindromCheck(str) {

//   const cleanStr = str.replace(/\s+/g, '').toLowerCase();
  
  
//   const reversedStr = cleanStr.split('').reverse().join('');
  
//   return cleanStr === reversedStr;
// }


// console.log(palindromCheck("dad")); 
// console.log(palindromCheck("son")); 


/* O-TASK: 

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
*/

// function calculateSumOfNumbers(arr) {
//   return arr.reduce((sum, item) => {
//       if (typeof item === 'number') {
//           return sum + item;
//       }
//       return sum;
//   }, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 


/* P-TASK: 
Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

function objectToArray(object) {
  const result = Object.keys(object).map((key) => [key, object [key]]);
  console.log(result);
}

objectToArray({a: 10, b: 20});