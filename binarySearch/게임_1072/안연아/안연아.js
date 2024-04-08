const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const X = input[0]; // 현재 이긴 횟수
const Y = input[1]; // 현재 진행한 게임 횟수

const Z = Math.floor((Y * 100) / X); // 현재 승률

let start = 0;
let end = 1000000000;
let answer = -1;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const newZ = Math.floor(((Y + mid) * 100) / (X + mid));

  if (newZ > Z) {
    // 승률이 올랐을 때
    answer = mid;
    end = mid - 1; // 더 작은 값으로 탐색
  } else {
    // 승률이 그대로거나 줄었을 때
    start = mid + 1; // 더 큰 값으로 탐색
  }
}

console.log(answer);
