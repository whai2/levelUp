const fs = require("fs");
const { resourceUsage } = require("process");

const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

// 실제 입력
// const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const n = Number(input[0]);

const queue = [];
let maxLine = 0;
let minPeople = 0;

for (let i = 1; i <= n; i++) {
  let [cmd, value] = input[i].split(" ").map(Number);
  if (cmd === 1) {
    queue.push(value);
  } else if (cmd === 2) {
    queue.shift();
  }
  if (maxLine < queue.length) {
    maxLine = queue.length;
    minPeople = queue[queue.length - 1];
  } else if (maxLine === queue.length && queue[queue.length - 1] < minPeople) {
    minPeople = queue[queue.length - 1];
  }
}

console.log(maxLine, minPeople);
