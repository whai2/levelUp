const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let answer = 0;
  let students = input[i].split(" ").slice(1).map(Number);

  for (let j = 1; j < 20; j++) {
    const currStudent = students[j]; // 현재 학생
    const left = students.slice(0, j); // 현재 학생보다 앞에 있는 학생들

    for (let k = 0; k < left.length; k++) {
      if (left[k] > currStudent) {
        // 앞에 있는 학생들 중 현재 학생보다 큰 학생이 처음으로 나타날 경우
        students.splice(j, 1); // 현재 학생을 기존 배열에서 삭제
        students.splice(k, 0, currStudent); // 현재 학생을 자기보다 큰 학생 자리 앞에 추가
        answer += students.slice(k + 1, j + 1).length; // 이동한 자리부터 현재 학생이 원래 있던 자리까지의 길이
        break;
      }
    }
  }
  console.log(`${i} ${answer}`);
}
