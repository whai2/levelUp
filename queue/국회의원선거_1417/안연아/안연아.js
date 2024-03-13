let [n, dasom, ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

/*실제 입력
let [n, dasom, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);*/

let count = 0;

while (true) {
  let max = 0;
  let index = 0;

  for (let i = 0; i < n - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }

  if (dasom > max) {
    break;
  }

  dasom++;
  arr[index]--;
  count++;
}

console.log(count);
