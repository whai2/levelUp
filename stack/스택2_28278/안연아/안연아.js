const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

//const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

const stack = [];
const result = [];

const n = parseInt(input[0]);

for (let i = 1; i <= n; i++) {
  let [cmd, value] = input[i].split(" ").map(Number);

  switch (cmd) {
    case 1:
      stack.push(value);
      break;
    case 2:
      if (stack.length > 0) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      if (stack.length > 0) {
        result.push(0);
      } else {
        result.push(1);
      }
      break;
    case 5:
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));
