const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().split("\n");
const N = +input[0];

const inputCase = input.slice(1).map((v) => v.split(" "));

function solution(inputCase) {
  const queue = [];
  let result = [0, 0];

  for (let i = 0; i < N; i++) {
    if (inputCase[i].length === 2) {
      queue.push(+inputCase[i][1]);
      if (result[0] === queue.length) {
        if (result[1] > queue[queue.length - 1]) {
          result[1] = queue[queue.length - 1];
        }
      }
      if (result[0] < queue.length) {
        result = [queue.length, queue[queue.length - 1]];
      }
    } else {
      queue.shift();
    }
  }
  return result.map((v) => +v).join(" ");
}

console.log(solution(inputCase));
