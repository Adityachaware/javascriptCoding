// 3) Interview Question:  Reverse string "My name is Aditya" to  "a y t i d A   s i   e m a n   y M".

let named2 = "My name is Aditya";

// first convert string to array using split method because we can apply reverse method on array.
// string does not support reverse method.

let nameSplit2 = named2.split("");  

console.log(nameSplit2); // ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'A', 'd', 'i', 't', 'y', 'a']

// on nameSplit is an Array so we can apply the reverse method now.

let reversename2 = nameSplit2.reverse();

console.log(nameSplit2); // ['a', 'y', 't', 'i', 'd', 'A', ' ', 's', 'i', ' ', 'e', 'm', 'a', 'n', ' ', 'y', 'M']

// now we have to convert Array to String using  join method. 

let result2 = reversename2.join("");
console.log(result2); // aytidA si eman yM

// one line solution will be as below

let employee2 = "My name is Aditya";

let reverseEmployee2 = employee2.split("").reverse().join("");

console.log(reverseEmployee2); // aytidA si eman yM