const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [testCase, ...words] = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = testCase.split(" ");
//단어 갯수 저장 객체
const wordsObj = {};
//단어 길이 M안되는 거 걸러~
const filterWords = words.filter((word) => word.length >= M);
//객체에 단어있으면 값에 1+ 아니면 1
for (let word of filterWords) {
  if (!wordsObj[word]) {
    wordsObj[word] = 1;
  } else {
    wordsObj[word] += 1;
  }
}
//단어와 갯수가 담긴 객체를 배열로 교체
const result = Object.entries(wordsObj);

//문제에 나온 정렬 순서대로 정렬
result.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else if (a[0].length > b[0].length) return -1;
  else if (a[0].length < b[0].length) return 1;
  else if (a[0] > b[0]) return 1;
  else if (a[0] < b[0]) return -1;
});
console.log(result.map((v) => v[0]).join("\n"));
