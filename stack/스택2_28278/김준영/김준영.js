const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const stack = [];
const push = (x) => {
  stack.push(x);
};

const pop = () => {
  if (stack.length === 0) return -1;
  return stack.pop();
};

const getLength = () => {
  return stack.length;
};

const isEmpty = () => {
  if (stack.length === 0) return 1;
  return 0;
};

const getTop = () => {
  if (stack.length === 0) return -1;
  return stack[stack.length - 1];
};

const N = Number(input[0]);

const new_input = input.slice(1);
const answer = [];

for (let i = 0; i < N; i++) {
  const direction = Number(new_input[i][0]);
  switch (direction) {
    case 1:
      const x = Number(new_input[i].split(" ")[1]);
      push(x);
      break;
    case 2:
      answer.push(pop());
      break;
    case 3:
      answer.push(getLength());
      break;
    case 4:
      answer.push(isEmpty());
      break;
    case 5:
      answer.push(getTop());
      break;
    default:
      continue;
  }
}

console.log(answer.join("\n"));
