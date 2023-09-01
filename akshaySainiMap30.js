//30) To combine names from object using map method.

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "aditya", lastName: "chaware", age: 75},
    {firstName: "virat", lastName: "kohli", age: 50},
    {firstName: "sachin", lastName: "tendulkar", age: 26}
];

let result30 = users.map( ele => ele.firstName +" "+ele.lastName);
// ['akshay saini', 'aditya chaware', 'virat kohli', 'sachin tendulkar'] 'full Name'
console.log(result30,"full Name");

// example 2: to print the age count using reduce. { 26:2, 75:1, 50:1 }

let response32 = users.reduce((acc,curr) => {
   if(acc[curr.age]){
    acc[curr.age] += acc[curr.age]
   }else {
    acc[curr.age] = 1;
   }
   return acc
},{});

console.log(response32,"age ") //{26: 2, 50: 1, 75: 1} 'age '

// example 3: filter people age less than 30

let age30 = users.filter((ele) => ele.age < 30).map((e)=> e.firstName); 

console.log(age30); //['akshay', 'sachin']

// example 4: above result should come using reduce method.

let a30 = users.reduce((acc,curr)=> {
        if(curr.age < 30){
            acc.push(curr.firstName)
        }
        return acc;
},[]);

console.log(a30,"reuce30"); // ['akshay', 'sachin']