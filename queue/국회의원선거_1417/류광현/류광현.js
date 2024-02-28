const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

let arr = input.slice(2);
let dasom = input[1];
let max = Math.max(...arr);
let result = 0;

while (dasom <= max) {
  const otherCandidate = arr.lastIndexOf(max);
  if (otherCandidate === -1) {
    break;
  }
  arr[otherCandidate]--;
  dasom++;
  result++;
  max = Math.max(...arr);
}

console.log(result);
