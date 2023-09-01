// 29) JavaScript Program to Check if the Numbers Have Same Last Digit.


let a29 = 15678;
let b29 = 4548;
let c29 = 28;

let lastDigita29 = a29 % 10;
let lastDigitb29 = a29 % 10;
let lastDigitc29 = a29 % 10;

if(lastDigita29 === lastDigitb29 && lastDigita29 === lastDigitc29 && lastDigitb29=== lastDigitc29){

    console.log("last digit are same");
}
else {
    console.log("last digit are not same");
}