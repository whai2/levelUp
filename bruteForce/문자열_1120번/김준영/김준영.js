const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const a = input[0];
let b = input[1];

const findDiff = (a, b) => {
  let result = 0;
  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      result += 1;
    }
  }
  return result;
};

let answer = Infinity;

for (let i = 0; i < b.length - a.length + 1; i++) {
  const newB = b.slice(i, i + a.length);
  answer = Math.min(answer, findDiff(newB, a));
}

console.log(answer);
