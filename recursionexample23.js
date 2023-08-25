// 23) using recursion calculate the factorial of number.

// Recursion is a process of calling itself. 
//A function that calls itself is called a recursive function. 


let number23 = 5;
let temp;
let recursionFunction = (value) => {
          if(value <= 0){
            return 1;
          }
         temp = value * recursionFunction(value - 1);
         return temp;
        }
console.log("recursion "+recursionFunction(number23));