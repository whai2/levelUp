const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().trim().split('\n');

const testCount = Number(input.slice(0, 1));
const tests = input.slice(1);

let answer = "";
for (let i = 0; i < testCount; i++) {
  answer = answer + `${i+1} ` + solution(tests[i]);

  if (i !== testCount-1) {
    answer = answer + "\n";
  }
} 

console.log(answer);

function solution(test) {
  let testSplit = test.toString().trim().split(' ');
  const testNumber = Number(testSplit.slice(0, 1));
  let students = testSplit.slice(1).map(student => Number(student));

  let count = 0;
  for (let i = 0; i < students.length; i++) {

    for (let j = i+1; j < students.length; j++) {
      if (students[i] > students[j]) {
        count += 1;
        temp = students[i];
        students[i] = students[j];
        students[j] = temp;

      }
    }
  }

  return count;
}