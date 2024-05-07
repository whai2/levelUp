const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const [N, K] = input[0].split(' ').map((v) => +v);
const array = input[1].split('');

let resultCount = 0;
for (let i = 0; i < N; i++) {
  if (array[i] === "P") {
    let start = i - K;
    let end = i + K;

    for (let j = start; j <= end; j++) {
      if (array[j] === 'H') {
        resultCount += 1;
        array[j] = '0';
        break;
      }
    }
  }
}

// function validate(array, K, curInx) {
//   let count = 0;
//   for (let i = 1; i <= K; i++) {
//     if (array[curInx-K] === "H") {
//       array[curInx-K] = "X";
//       count++;
//       break;
//     }

//     if (array[curInx+K] === "H") {
//       array[curInx+K] = "X";
//       count++
//       break;
//     }
//   }
//   return count;
// }

console.log(resultCount);