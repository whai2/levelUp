const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [caseNum, ...rest] = fs
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((list) => list.split(" ").map((value) => +value));

rest.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else {
    if (a[2] !== b[2]) return b[2] - a[2];
    else return b[3] - a[3];
  }
});

function findTargetIndex(country) {
  return country[0] === caseNum[1];
}
const targetCase = rest.findIndex(findTargetIndex);
let result = targetCase;
for (let i = 1; i < targetCase; i++) {
  const target = rest[targetCase].slice(1).join("");
  const prev = rest[targetCase - i].slice(1).join("");

  if (target === prev) {
    result -= 1;
  } else {
    break;
  }
}

console.log(result + 1);
