const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
let answer = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}

console.log(answer);
