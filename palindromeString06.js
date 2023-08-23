//6) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

//For example, radar , level 

let example6 = "level";

// below we recieve value = "level", here using split reverse join , we reverse the value and then compare, return true or flase

let palindromeToCheck = (value) => value === (value.split("").reverse().join(""));  

console.log(palindromeToCheck(example6)); // return true here.