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


function getLongestWord(sentence :string) {
 let words = sentence.split(" ");

 let longest = "";

 for(let word of words) {
   if(word.length > longest.length) {
     longest = word;
   }
 }
 console.log(longest);
  return longest;
}

getLongestWord("I am from Uzbekistan");