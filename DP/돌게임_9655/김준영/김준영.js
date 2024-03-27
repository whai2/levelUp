const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let stones = Number(input[0]);
let turn = 0;

while (stones > 0) {
  if (stones >= 3) {
    stones -= 3;
    turn += 1;
  } else {
    stones -= 1;
    turn += 1;
  }
}

const answer = turn % 2 === 1 ? "SK" : "CY";
console.log(answer);
