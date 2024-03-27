const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let N = Number(fs.readFileSync(path).toString());

// DP를 활용한 풀이법
const dp = (num) => {
  if (num === 1) return "SK";
  if (num === 2) return "CY";
  const DP = [0, 1, 2];
  for (let i = 3; i <= num; i++) {
    DP[i] = Math.min(DP[i - 1] + 1, DP[i - 3] + 1);
  }
  return DP[num] % 2 === 0 ? "CY" : "SK";
};

console.log(dp(N));

/* 짝수, 홀수를 이용한 풀이법
if (N % 2 === 0) {
  console.log("CY");
} else {
  console.log("SK");
}*/
