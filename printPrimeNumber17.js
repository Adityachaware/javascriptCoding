// 17) To print Prime Numbers;
let lastNumber = 23;

for (i = 1; i <= lastNumber; i++) {
  let flag = 0;
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = 1;
      break;
    }
  }

  if (flag === 0) {
    console.log(i);
  }
}
