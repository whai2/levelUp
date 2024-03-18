const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs
  .readFileSync(path)
  .toString()
  .split(" ")
  .map((v) => v.trim());

const ALength = A.length;
const BLength = B.length;
let minCount = 51;

for (let i = 0; i < BLength - ALength + 1; i++) {
  let sliceB = B.slice(i, i + ALength);
  let count = 0;
  for (let j = 0; j < sliceB.length; j++) {
    if (A[j] !== sliceB[j]) count += 1;
  }
  if (count < minCount) minCount = count;
}

console.log(minCount);
