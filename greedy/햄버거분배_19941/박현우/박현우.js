const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split('\n');
const [N, K] = input[0].split(' ').map((v) => +v);
const table = input[1].split('');

let answer = 0;
for (let i = 0; i < N; i++) {
  if (table[i] === 'P') {
    let start = i - K;
    let end = i + K;
    for (let j = start; j <= end; j++) {
      if (table[j] === 'H') {
        answer += 1;
        table[j] = '0';
        break;
      }
    }
  }
}

console.log(answer);
