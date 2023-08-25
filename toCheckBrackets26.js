//26) 3. Program to check a string with balanced brackets.
//In this program, the areBracketsBalanced function uses a stack to keep track of the opening brackets encountered.
// When a closing bracket is encountered, it checks if the corresponding opening bracket matches the top element of the stack.
// If it does, the opening bracket is popped from the stack.
// If the stack is empty at the end, it means all brackets were matched and the string is balanced.
// If not, it means the brackets are not balanced.

let areBracketsBalanced = (string) => {
  let callStack = [];
  let openingBracket = "({[";
  let closingBracket = ")}]";

  for (str of string) {
    if (openingBracket.includes(str)) {
      callStack.push(str);
    } else if (closingBracket.includes(str)) {
      const correspondingOpeningBracket =
        openingBracket[closingBracket.indexOf(str)];
      if (callStack === 0 || callStack.pop() !== correspondingOpeningBracket) {
        return false;
      }
    }
  }
  return callStack.length === 0;
};
// Test cases
console.log(areBracketsBalanced("()")); // true
console.log(areBracketsBalanced("()[]{}")); // true
console.log(areBracketsBalanced("(]")); // false
console.log(areBracketsBalanced("([)]")); // false
console.log(areBracketsBalanced("{[]}")); // true
