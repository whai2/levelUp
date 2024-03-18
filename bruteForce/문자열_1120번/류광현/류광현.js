const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs
  .readFileSync(path)
  .toString()
  .split(" ")
  .map((v) => v.trim());

let answer = A.length;

for (let i = 0; i <= B.length - A.length; i++) {
  let count = 0;
  for (let j = i; j < i + A.length; j++) {
    if (A[j - i] !== B[j]) count++;
  }
  if (count < answer) answer = count;
}
console.log(answer);
