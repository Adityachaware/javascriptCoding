// 5) Write a JavaScript program to find the maximum number in an array. 

let example5 = [10,5,13,40,21,77,90];

// ascending array is done here using comparing function as sort does not work with numbers it works with only string.
let ascendingArray = example5.sort( (a,b) => a - b);  //  [5, 10, 13, 21, 40, 77, 90]
console.log(ascendingArray);

let maxNumber = ascendingArray[ascendingArray.length - 1];  // here to acess last number in array using index we use length method -1 .

console.log(maxNumber); //90