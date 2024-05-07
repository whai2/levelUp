const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("").sort();

let countInput = {};
let result = true;

input.forEach((e) => {
  countInput[e] === null ? (countInput[e] = 1) : countInput[e]++;
});

Object.keys(countInput).map((key) => {
  if (countInput[key] % 2 !== 0) {
  }
});

