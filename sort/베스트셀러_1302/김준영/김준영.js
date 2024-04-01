const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const books = input.slice(1);
let books_map = {};

for (let i = 0; i < N; i++) {
  if (books[i] in books_map) {
    books_map[books[i]] += 1;
  } else {
    books_map[books[i]] = 1;
  }
}

const keys = Object.keys(books_map);
let best_seller = 0;
keys.map((item) => (best_seller = Math.max(books_map[item], best_seller)));

let answer = [];
for (let key of keys) {
  if (books_map[key] === best_seller) {
    answer.push(key);
  }
}

answer.sort();
console.log(answer[0]);
