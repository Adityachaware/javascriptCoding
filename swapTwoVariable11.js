// 11)JavaScript Program to Swap Two Variables.

let var11 = 10;

let var12 = 11;

// by swaping method

let swapVariable = (var11,var12) => {
     let swap = var11;
      var11 = var12;
      var12 = swap;

    console.log(var11);  // var11 = 11
    console.log(var12);  // var12 = 10
}

var result11 = swapVariable(var11,var12);

// by destructuring method to swap variable.

var a = 10;
var b = 11;

var [a,b] = [b,a];

console.log(a);
console.log(b);