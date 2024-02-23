const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let result = 0; // 21번줄에서 값을 변경하기 위해 const => let으로 변경
const repeat = parseInt(input[0]); // 반복횟수 정하기 & 문자열을 숫자로 변경해서 대입
const box = [];

for (let i = 1; i <= repeat; i++) {
  const stack = []; // stack 계산을 하기 위한 빈 배열 생성
  box.push(input[i]); // box에 input에 담긴 값들을 하나씩 넣음 (map, split으로도 가능할듯함)
  for (let j = 0; j < input[i].length; j++) {
    // ex)ABAB의 문장중 하나하나 대입하기 위한 for문
    if (box.length === 0) {
      //box가 빈배열일때, A를 PUSH
      stack.push(input[i][j]);
    } else if (stack[stack.length - 1] === input[i][j]) {
      //stack의 마지막 요소(A)와 현재 비교하는(B)게 같다면 stack에서 제거
      stack.pop();
    } else {
      //위 상황을 제외한 경우는 모두 stack에 push
      stack.push(input[i][j]);
    }
  }
  if (stack.length === 0) {
    // 위의 for문으로 인해 stack안에 아무것도 남지 않았다면 결과에 충족하므로 result++
    result++;
  }
}

console.log(result); // 끝!
