// 27) Find the missing number from unsorted array with O(n) complexity in javascript.

// You can find the missing number from an unsorted array using a linear time complexity of O(n) by calculating the sum of the first n natural numbers and subtracting the sum of the array elements from it. 
// Here's how you can do it in JavaScript:

let array27 = [1,5,9,3,4,2,8,7];
let missingNumber;
let numberOfElement = (array27.length) + 1;
let sumOfElementOfNaturalNumbers = (numberOfElement * (numberOfElement + 1))/2;
let sumOfElements = 0;

for(let ele of array27){
    sumOfElements +=  ele;
}

missingNumber = sumOfElementOfNaturalNumbers - sumOfElements;

console.log(missingNumber); //6