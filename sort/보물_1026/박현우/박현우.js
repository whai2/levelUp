const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [inputCase, A, B] = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((v, i) => {
    if (i === 0) return v;
    else return v.split(" ").map((number) => +number);
  });

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

const result = A.map((v, i) => v * B[i]).reduce((prev, next) => prev + next);

console.log(result);
