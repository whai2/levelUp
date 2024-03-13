const fs = require("fs");
const path = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(path).toString().split('\n')

const inputObject = {
  number : 0,
  candidates : [],
}

for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    inputObject.number = Number(input[i]);
  } else {
    inputObject.candidates.push(Number(input[i]));
  }
}

function solution(number, candidates) {
  let dasom = candidates[0]; 
  let buys = 0;
  let other = candidates.slice(1);

  while (dasom <= Math.max(...other)) {
    const maxIndex = other.indexOf(Math.max(...other));
    dasom += 1;
    buys += 1;
    other[maxIndex] -= 1;
  }
  
  return buys;
}

const result = solution(inputObject.number, inputObject.candidates);
console.log(result);