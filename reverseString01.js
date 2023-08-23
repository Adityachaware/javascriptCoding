// 1) Interview Question:  Reverse string "Aditya" to "aytidA" .

let named = "Aditya";

// first convert string to array using split method because we can apply reverse method on array.
// string does not support reverse method.

let nameSplit = named.split("");  

console.log(nameSplit); // ['A', 'd', 'i', 't', 'y', 'a']

// on nameSplit is an Array so we can apply the reverse method now.

let reversename = nameSplit.reverse();

console.log(nameSplit); // ['a', 'y', 't', 'i', 'd', 'A']

// now we have to convert Array to String using  join method. 

let result = reversename.join("");
console.log(result); // aytidA

// one line solution will be as below

let employee = "Aditya";

let reverseEmployee = employee.split("").reverse().join("");

console.log(reverseEmployee); // aytidA
