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