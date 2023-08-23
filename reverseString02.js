// 2) Interview Question:  Reverse string "My name is Aditya" to "Aditya is name My".

let named1 = "My name is Aditya";

// first convert string to array using split method because we can apply reverse method on array.
// string does not support reverse method.

let nameSplit1 = named1.split(" ");  

console.log(nameSplit1); // ['My', 'name', 'is', 'Aditya']

// on nameSplit is an Array so we can apply the reverse method now.

let reversename1 = nameSplit1.reverse();

console.log(reversename1); // ['Aditya', 'is', 'name', 'My']

// now we have to convert Array to String using  join method. 

let result1 = reversename1.join(" ");
console.log(result1); // Aditya is name My

// one line solution will be as below

let employee1 = "My name is Aditya";

let reverseEmployee1 = employee1.split(" ").reverse().join(" ");

console.log(reverseEmployee1); // Aditya is name My