const fs = require("fs");
const path = process.platform === "linux" ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(path).toString().split('\n');

inputOject = {
  counts: input[0],
  array: [],
}

for (let i = 1; i < input.length; i++) {
  const lines= input[i].split(' ').map(line => Number(line));
  inputOject.array.push(lines);
}

function solution(counts, array) {
  const queue = [];
  let maxLineLength = 0;
  let minStudentNumber = 100001;
  let answer = '';

  for (let i = 0; i < counts; i++) {
    let [order, student=null] = array[i];
    
    switch (order) {
      case 1:
        queue.push(student);
        const [lineNumber, number] = calculateMinStudent(queue, maxLineLength, minStudentNumber);
        minStudentNumber = number;
        maxLineLength = lineNumber;

        break;
      case 2:
        queue.shift();
        break;
    }
  }

  answer = `${maxLineLength} ${minStudentNumber}`
  return answer;
}

function calculateMinStudent(curLine, maxLineLength, minStudentNumber) {
  if (curLine.length === maxLineLength) {
    let min = Math.min(curLine[curLine.length-1], minStudentNumber);
    return [curLine.length, min];
  }
  else if (curLine.length > maxLineLength) {
    return [curLine.length, curLine[curLine.length-1]];
  }
  else {
    return [maxLineLength, minStudentNumber];
  }
}

const answer = solution(inputOject.counts, inputOject.array);
console.log(answer);

