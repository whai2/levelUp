const fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf8")
  .toString()
  .trim()
  .split("\r\n");

//실제 입력
//const fs = require("fs");
//const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

let count = 0;
for (let i = 1; i <= n; i++) {
  if (typeof input[i] === "string") {
    let stack = [];
    for (let j = 0; j < input[i].length; j++) {
      if (stack.length === 0) {
        stack.push(input[i][j]);
      } else if (stack[stack.length - 1] !== input[i][j]) {
        stack.push(input[i][j]);
      } else {
        stack.pop();
      }
    }
    if (stack.length === 0) {
      count++;
    }
  }
}

console.log(count);
