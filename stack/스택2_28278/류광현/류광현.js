//input.txt 파일 불러오기
const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

//문제

// 정수를 저장하는 스택을 구현한 다음,
//입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
// 명령은 총 다섯 가지이다.

// 1 X: 정수 X를 스택에 넣는다. (1 ≤ X ≤ 100,000)
// 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
// 3: 스택에 들어있는 정수의 개수를 출력한다.
// 4: 스택이 비어있으면 1, 아니면 0을 출력한다.
// 5: 스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.

const repeat = input[0];
const stack = [];
const result = [];

for (let i = 0; i < repeat; i++) {
  const order = input[i];

  if (order === "1") {
    stack.push(input[i][2]);
  } else if (order === "2") {
    if (stack.length > 0) {
      result.push(stack.pop());
    } else if (stack.length == 0) {
      result.push("-1");
    }
  } else if (order === "3") {
    result.push(stack.length);
  } else if (order === "4") {
    if (stack.length == 0) {
      result.push("1");
    } else {
      result.push("0");
    }
  } else if (order === "5") {
    if (stack.length !== 0) {
      result.push(stach.pop());
    } else {
      result.push("-1");
    }
  }
}

console.log(result.join("\n"));
