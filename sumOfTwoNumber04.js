// 4) Write a JavaScript function to calculate the sum of two numbers. 


let num1 = Number(prompt("Enter number1"));   // Number is used to convert string to Number.  
let num2 = Number(prompt("Enter number2"));   // Number is used to convert string to Number

// Es6 function should be used to reduce number of lines for coding.

let sumOfTwoNumbers = (num1,num2) =>  num1 + num2 ;   

console.log(sumOfTwoNumbers(num1,num2));  // function invoking is done here.
