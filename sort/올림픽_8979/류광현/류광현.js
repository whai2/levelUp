const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const countries = input.slice(1).map((line) => line.split(" ").map(Number));

let rank = 1;
countries.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < N; i++) {
  if (countries[i][0] !== K) {
    if (
      countries[i][1] > countries[K - 1][1] ||
      (countries[i][1] === countries[K - 1][1] &&
        countries[i][2] > countries[K - 1][2]) ||
      (countries[i][1] === countries[K - 1][1] &&
        countries[i][2] === countries[K - 1][2] &&
        countries[i][3] > countries[K - 1][3])
    ) {
      rank++;
    }
  }
}

console.log(rank);
