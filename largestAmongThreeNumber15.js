// 15) JavaScript Program to Find the Largest Among Three Numbers

let a15 = 20;
let b15 = 25;
let c15 = 5;

let arr15 = [a15,b15,c15];

let arrrAscending15 = arr15.sort((a,b)=> a-b );

let largestNumber = arrrAscending15[arrrAscending15.length -1];

console.log(largestNumber); // here largest will be 25;


// shortcut method using ternary opearators.

let largestNumber15 = (a,b,c) => (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;

console.log(largestNumber15(a15,b15,c15)); // here largest will be 25;