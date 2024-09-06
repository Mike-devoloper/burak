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

function getPositive(arr) {
    const result = arr
        .filter(value => typeof value === 'number' && value > 0) 
        .join(""); 

    console.log(result);
    return result;
}

getPositive([5, 21, 12, 78, -8]); 

