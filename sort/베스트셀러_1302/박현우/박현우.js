const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [testCase, ...list] = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const count = {};
for (let book of list) {
  if (!count[book]) {
    count[book] = 1;
  } else {
    count[book] += 1;
  }
}
const result = Object.entries(count);
let max = 0;
for (let i = 0; i < result.length; i++) {
  if (result[i][1] > max) {
    max = result[i][1];
  } else {
    continue;
  }
}
const sliceArr = result
  .filter((v) => v[1] === max)
  .sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
  });
console.log(sliceArr[0][0]);
