const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const testCase = Number(input[0]);

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);

let sum = 0;
for (let i = 0; i < testCase; i++) {
  const minA = Math.min(...A);
  const maxB = Math.max(...B);

  sum += minA * maxB;

  A.splice(A.indexOf(minA), 1);
  B.splice(B.indexOf(maxB), 1);
}

console.log(sum);
