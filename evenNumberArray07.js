// 7) Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

let example7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// below filter method is used to filter the even number of the array, filter loops through array.

// if the condition is true then element is added to evenNumberArray, other eleebts are ignored.

let evenNumberArray = example7.filter( (value) => (value % 2) === 0 );

console.log(evenNumberArray); // [2, 4, 6, 8, 10, 12, 14]