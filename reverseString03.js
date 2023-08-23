// 3) Interview Question:  Reverse string "My name is Aditya" to  "a y t i d A   s i   e m a n   y M".

let named = "My name is Aditya";

// first convert string to array using split method because we can apply reverse method on array.
// string does not support reverse method.

let nameSplit = named.split("");  

console.log(nameSplit); // ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'A', 'd', 'i', 't', 'y', 'a']

// on nameSplit is an Array so we can apply the reverse method now.

let reversename = nameSplit.reverse();

console.log(nameSplit); // ['a', 'y', 't', 'i', 'd', 'A', ' ', 's', 'i', ' ', 'e', 'm', 'a', 'n', ' ', 'y', 'M']

// now we have to convert Array to String using  join method. 

let result = reversename.join("");
console.log(result); // aytidA si eman yM

// one line solution will be as below

let employee = "My name is Aditya";

let reverseEmployee = employee.split("").reverse().join("");

console.log(reverseEmployee); // aytidA si eman yM