// 2) Interview Question:  Reverse string "My name is Aditya" to "Aditya is name My".

let named = "My name is Aditya";

// first convert string to array using split method because we can apply reverse method on array.
// string does not support reverse method.

let nameSplit = named.split(" ");  

console.log(nameSplit); // ['My', 'name', 'is', 'Aditya']

// on nameSplit is an Array so we can apply the reverse method now.

let reversename = nameSplit.reverse();

console.log(nameSplit); // ['Aditya', 'is', 'name', 'My']

// now we have to convert Array to String using  join method. 

let result = reversename.join(" ");
console.log(result); // Aditya is name My

// one line solution will be as below

let employee = "My name is Aditya";

let reverseEmployee = employee.split(" ").reverse().join(" ");

console.log(reverseEmployee); // Aditya is name My