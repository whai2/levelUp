const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const guitars = input.slice(1);

function sortBySum(a, b) {
  const aArray = [...a];
  const bArray = [...b];

  let aSum = 0;
  let bSum = 0;

  aArray.map((item) => {
    if (Number(item)) aSum += Number(item);
  });
  bArray.map((item) => {
    if (Number(item)) bSum += Number(item);
  });

  return aSum - bSum;
}

guitars.sort(
  (a, b) =>
    a.length - b.length ||
    sortBySum(a, b) ||
    String(a).localeCompare(String(b)),
);

const answer = guitars.join("\n");
console.log(answer);
