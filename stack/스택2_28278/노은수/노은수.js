// 입력 (파일)
const fs = require('fs');
let input = fs.readFileSync("./input.txt").toString();

// 실제 입력
//let input = fs.readFileSync("/dev/stdin").toString();

// 입력 정제
const inputObject = {
  count : 0,
  cases : []
};

const splitInputLines = input.split("\n");
for (let i = 0; i < splitInputLines.length; i++) {
  const arr = splitInputLines[i].split(" ").map((splitInputLine) => Number(splitInputLine));

  if (i === 0) {
    inputObject.count = arr[i];
  } else {
    inputObject.cases.push(arr);
  }
}

// 문제 풀이
const stack = [];
const result = [];
function solution(count, cases) {
  for (let i = 0; i < cases.length; i++) {
    command(cases[i]);
  }
}

solution(inputObject.count, inputObject.cases);

function command(order) {
  const orderCase = order[0];
  if (orderCase === 1) {
    stack.push(order[1]);
    return;
  } 
  else if (orderCase === 2) {
    if (stack.length === 0) {
      result.push(-1);
      return;
    } else {
      result.push(stack.pop());
      return;
    }
  }
  else if (orderCase === 3) {
    result.push(stack.length);
    return;
  }
  else if (orderCase === 4) {
    if (stack.length === 0) {
      result.push(1);
      return;
    } else {
      result.push(0);
      return;
    }
  }
  else if (orderCase === 5) {
    if (stack.length === 0) {
      result.push(-1);
      return;
    } else {
      result.push(stack[stack.length - 1]);
      return;
    }
  }
}

console.log(result.join("\n"));
