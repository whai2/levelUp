const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const test = Number(input[0]);

for (let i = 1; i <= test; i++) {
  let count = 0;
  let array = input[i].split(" ").slice(1).map(Number);

  for (let j = 0; j < 20; j++) {
    for (let k = j; k < 20; k++) {
      if (array[j] > array[k]) count++;
    }
  }
  console.log(i, count);
}
