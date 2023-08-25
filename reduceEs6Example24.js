// 24) Reducer example asked in interview

// accumulator holds the value addition of accumulato and currentValue

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10


// example2:Sum of values in an object array

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

const sum24 = objects.reduce((acc,initialValue)=> acc+ initialValue.x,0);

console.log(sum24);

// example 3 1. Find the frequency of elements in array using reduce method

// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice","Bob","Bob"]; output should be
//  { 
//      "Alice":2,
//      "Bob":3,
//      "Tiff":1,
//      "Bruce":1,
// }

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice","Bob","Bob"];

let resultObj24 = {};

for(let named24 of names){
    const count24 = resultObj24[named24] ?? 0 ;
    resultObj24[named24] = count24 + 1;
}

console.log("resultobj24",resultObj24);


// example of reduce funvtion  

const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"] },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"] },
  ];

  const allBooks = friends.flatMap((person) => person.books);
console.log(allBooks); // output :['Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']
