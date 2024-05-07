const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .sort();

let box = {};
let result = ""; //감점

input.forEach((e) => {
  box[e] == null ? (box[e] = 1) : (box[e] += 1);
});

let max = Math.max(...Object.values(box));

console.log(Object.keys(box).find((key) => box[key] == max));
