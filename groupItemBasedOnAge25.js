// 25) Group items on the basis of age of given array of object

let persons = [
    {name:"Alice", age:21},
    {name:"packs", age:20},
    {name:"Arjun", age:20}
];


let result25 = {};

for(let person of persons) {
    if(result25[person.age]){
        result25[person.age].push(person);
    }
    else{
        result25[person.age] = [person];
    }
}

console.log(result25);

// output

// {
//     "20": [
//         {
//             "name": "packs",
//             "age": 20
//         },
//         {
//             "name": "Arjun",
//             "age": 20
//         }
//     ],
//     "21": [
//         {
//             "name": "Alice",
//             "age": 21
//         }
//     ]
// }