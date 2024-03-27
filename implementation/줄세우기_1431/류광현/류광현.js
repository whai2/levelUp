const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");

const totalNumber = Number(input[0]);
const results = [];

for (let i = 1; i <= totalNumber; i++) {
  const testCase = input[i].split(" ").map(Number);
  let steps = 0;
  const sortedTestCase = [...testCase].sort((a, b) => a - b);
  for (let j = 0; j < 20; j++) {
    steps += Math.abs(testCase[j] - sortedTestCase[j]);
  }
  results.push([i, steps]);
}

console.log(results);
