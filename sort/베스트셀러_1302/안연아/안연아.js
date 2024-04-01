const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...arr] = fs.readFileSync(path).toString().trim().split("\n").sort();

let book = {};

arr.forEach((element) => {
  book[element] == null ? (book[element] = 1) : (book[element] += 1);
});

let max = Math.max(...Object.values(book));

console.log(Object.keys(book).find((key) => book[key] === max));
