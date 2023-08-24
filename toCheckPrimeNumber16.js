// 16) JavaScript Program to Check Prime Number.

// A prime number is a positive integer that is only divisible by 1 and itself.
// For example, 2, 3, 5, 7, 11 are the first few prime numbers.

let number16 = 3;

isPrime = "prime number";

if (number16 === 0 || number16 === 1) {
  isPrime = "not prime nor composite number";
} else {
  for (i = 2; i < number16; i++) {
    if (number16 % i === 0) {
      isPrime = "not a prime Number";
      break;
    }
  }
}

console.log(isPrime); // here prime number will print;

// here we have to consider number as prime and then according to consition replace the value in isPrime variable.