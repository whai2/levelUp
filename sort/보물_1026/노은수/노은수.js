const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [number, A, B] = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((line, index) => {
    if (index === 0) return line;
    else return line.split(" ").map((number) => +number);
  });

A.sort((a,b) => a - b);
B.sort((a,b) => b - a);

let result = 0;
for (let i = 0; i < A.length; i++) {
  const mul = A[i] * B[i];
  result += mul;
}

console.log(result);