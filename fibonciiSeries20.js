// 20) JavaScript Program to Print the Fibonacci Sequence

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


let SequenceOfNumber = 10;
let num1 = 0;
let num2 = 1;
let term;
console.log(0);
console.log(1);
for(i=1;i<=SequenceOfNumber;i++){
    term = num1 + num2;
    console.log(term);
    num1 = num2;
    num2 = term;
}

// output is
//  0
//  1
//  1
//  2
//  3
//  5
//  8
//  13
//  21
//  34
//  55
//  89