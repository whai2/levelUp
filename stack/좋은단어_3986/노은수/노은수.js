// 입력 (파일)
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

//const input = fs.readFileSync("/dev/stdin").toString();

// 입력 정제
const inputObject = {
  number : 0,
  words : [],
}

const splitInputLines = input.split("\n");
for (let i = 0; i < splitInputLines.length; i++) {
  const arr = splitInputLines[i]
    .split("")
    .map((splitInputLine) => splitInputLine);

  if (i === 0) {
    inputObject.number = Number(arr[i]);
  } else {
    inputObject.words.push(arr);
  }
}

// 문제 풀이
function solution(number, words) {
  let result = 0;

  for (let i = 0; i < number; i++) {
    const stack = [];

    for (let j = 0; j < words[i].length; j++) {
      const top = stack[stack.length -1];
      if (top === words[i][j]) {
        stack.pop();
      } 
      else {
        stack.push(words[i][j]);
      }
    }

    if (!stack.length) {
      result += 1;
    }
  }

  return result;
}

const result = solution(inputObject.number, inputObject.words);
console.log(result);