const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0];
const reports = input.slice(1);

let answer = 0;

for (let i = 0; i < N; i++) {
  const word = reports[i].split("");
  const stack = [];

  // 실패 코드
  while (word.length > 0) {
    let current = word.shift();
    const top = stack[stack.length - 1];
    if (top === current) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }

  //// 성공 코드
  // for (let j = 0; j < word.length; j ++) {
  //   const top = stack[stack.length - 1];
  //   const current = word[j];
  //   if (top === current) {
  //     stack.pop();
  //   } else {
  //     stack.push(current);
  //   }
  // }

  if (stack.length === 0) {
    answer += 1;
  }
}

console.log(answer);
