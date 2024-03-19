const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [caseNum, ...rest] = fs.readFileSync(path).toString().split("\n");
const testCase = rest.map((rest) => {
  return rest.split(" ").map((tall) => +tall);
});
const result = [];
for (let i = 0; i < +caseNum; i++) {
  const list = testCase[i].slice(1);
  result.push([testCase[i][0], solution(list)]);
}

function solution(list) {
  let count = 0;
  for (let j = 0; j < 20; j++) {
    const minIndex = list.indexOf(Math.min(...list));
    count += minIndex;
    list.splice(minIndex, 1);
  }
  return count;
}

console.log(result.map((value) => value.join(" ")).join("\n"));
