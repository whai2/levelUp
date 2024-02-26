// 입력 (파일)
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

//const input = fs.readFileSync("/dev/stdin").toString();

// 입력 정제
const inputObject = {
  number : 0,
  words : [],
}

const splitInputLines = input.split("\n").map(v=>v.trim());
for (let i = 0; i < splitInputLines.length; i++) {
  if (i === 0) {
    inputObject.number = splitInputLines[i];
  } else {
    inputObject.words.push(splitInputLines[i]);
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