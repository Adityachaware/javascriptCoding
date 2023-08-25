// 21) JavaScript Program to Check Armstrong Number.

// example 153 = 1*1*1 + 5*5*5 + 3*3*3
// 153 = 153 is an armstrong number;

let number21 = 153;
let remainer21;
let num = 0;
let sum = 0;
let toCheckArmstrongNumber = (value) => {
  while (value !== 0) {
    remainer21 = value % 10;
    num = remainer21 * remainer21 * remainer21;
    sum = sum + num;
    value = parseInt(value / 10);
  }

  if (sum === number21) {
    console.log("Number is Armstrong");
  }
};

toCheckArmstrongNumber(number21);
