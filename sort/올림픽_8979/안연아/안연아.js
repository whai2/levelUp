const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().trim().split("\n");

const [testCase, K] = input[0].split(" ").map(Number);
const countries = [];

for (let i = 1; i <= testCase; i++) {
  const [country, gold, silver, bronze] = input[i].split(" ").map(Number);
  countries.push({
    country,
    gold,
    silver,
    bronze,
  });
}

countries.sort((a, b) => a.country - b.country);

let count = 1;
for (let i = 0; i < testCase; i++) {
  if (countries[i].gold > countries[K - 1].gold) {
    count++;
  } else if (countries[i].gold === countries[K - 1].gold) {
    if (countries[i].silver > countries[K - 1].silver) {
      count++;
    } else if (countries[i].silver === countries[K - 1].silver) {
      if (countries[i].bronze > countries[K - 1].bronze) {
        count++;
      }
    }
  }
}
console.log(count);
