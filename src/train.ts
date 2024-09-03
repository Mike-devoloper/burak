console.log("train ts file ishga tushdi");
/*
G-TASK: 

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

function getHighestIndex(arr) {
    let maxIndex = 0;  

    for (let i = 1; i < arr.length; i++) {  
        if (arr[i] > arr[maxIndex]) {  
           const result = maxIndex = i;  
        }
    }

    console.log(maxIndex, "sizning katta indexingiz");  
}

// Test qilish
getHighestIndex([5, 21, 12, 78, 8]);
