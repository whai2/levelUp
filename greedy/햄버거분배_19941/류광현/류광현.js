const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().split("\n");
const [N, K] = input[0].split(" ").map((v) => +v);
const box = input[1].split("");

let answer = 0;

for (let i = 0; i < N; i++) {
  if (box[i] === "P") {
    const start = i - K;
    const end = i + K;
    for (let j = start; j <= end; j++) {
      if (box[j] === "H") {
        answer += 1;
        box[j] = "A";
        break;
      }
    }
  }
}
console.log(answer);
