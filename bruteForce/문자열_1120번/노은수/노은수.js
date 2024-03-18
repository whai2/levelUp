const fs = require("fs");
const path = process.platform ===  "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(path).toString().trim().split(" ");

function solution(a, b) {
  //let aList = a.split("");
  //let bList = b.split("");
  let minDifCount = b.length;

  for (let i = 0; i <= b.length - a.length; i++) {
    let difCount = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[j] !== b[i + j]) {
        difCount ++;
      }
    }

    minDifCount = Math.min(difCount, minDifCount);
  }

  console.log(minDifCount);
}

solution(A, B);