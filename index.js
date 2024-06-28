// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330

function circuitPower(voltage , current){
    return voltage * current;
}


// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.

function findMaxNumber(...ar){
    if(ar.length == 0) return null;
    
    max = ar[0];
    
    for(i = 1; i < ar.length; i++){
        if(max < ar[i]) mx = ar[i];
    }
    
    return max;
}

console.log(circuitPower(110, 3));
console.log(findMaxNumber([2, 4 ,1]));