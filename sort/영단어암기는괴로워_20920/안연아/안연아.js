const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [number, ...arr] = fs.readFileSync(path).toString().trim().split("\n");

let [N, M] = number.split(" ").map(Number);

arr = arr.map((word) => word.replace(/\r/g, ""));

let word = {};

arr.forEach((element) => {
  if (element.length >= M) {
    word[element] == null ? (word[element] = 1) : (word[element] += 1);
  }
});

let wordArray = Object.keys(word).map((key) => {
  return { text: key, count: word[key] };
});

wordArray.sort((a, b) => {
  if (b.count !== a.count) {
    // 빈도수가 높은 순으로 정렬
    return b.count - a.count;
  } else if (b.text.length !== a.text.length) {
    // 단어의 길이가 긴 순으로 정렬
    return b.text.length - a.text.length;
  } else {
    // 사전 순으로 정렬
    return a.text.localeCompare(b.text);
  }
});

let result = wordArray.map((item) => item.text).join("\n");
console.log(result);
