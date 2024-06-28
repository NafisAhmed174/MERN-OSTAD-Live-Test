// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330

function circuitPower(voltage , current){
    return voltage * current;
}


// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(ar){
    if(ar.length == 0) return null;
    
    max = ar[0];
    
    for(i = 1; i < ar.length; i++){
        if(max < ar[i]) max = ar[i];
    }
    
    return max;
}

// Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(ar1, ar2){
    ar3 = [];
    for(i = 0; i < ar1.length; i++){
        ar3.push(ar1[i]);
    }

    for(i = 0; i < ar2.length; i++){
        ar3.push(ar2[i]);
    }
    return ar3;
}

console.log(circuitPower(110, 3));
console.log(findMaxNumber([2, 4 ,1]));
console.log(mergeArrays([1, 2, 3], [4, 5, 6, 7]));