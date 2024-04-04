const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const wordLength = Number(input[0].split(" ")[1]);
const words = input.slice(1);

let answer = {};

for (let word of words) {
  if (word.length >= wordLength) {
    if (word in answer) {
      answer[word] += 1;
    } else {
      answer[word] = 1;
    }
  }
}

answer = Object.entries(answer);
answer.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else if (a[0].length > b[0].length) return -1;
  else if (a[0].length < b[0].length) return 1;
  else if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
});
let result = answer.map((item) => item[0]).join("\n");
console.log(result);
