const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const N = input[0];
let dasom = input[1];
const candidates = input.slice(2);
let mostCandidate = Math.max(...candidates);

let answer = 0;

if (N > 1) {
  while (dasom <= mostCandidate) {
    candidates[candidates.indexOf(mostCandidate)]--;
    dasom++;
    answer++;
    mostCandidate = Math.max(...candidates);
  }
}

console.log(answer);
