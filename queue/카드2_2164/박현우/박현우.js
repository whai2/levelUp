const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = +fs.readFileSync(path).toString();
//1부터 N까지의 홀수를 제거한 배열을 만들어줌 그런데 N이 1인경우는 제외
let cardList = Array.from({ length: input }, (value, i) => i + 1).filter(
  (v, i, arr) => v % 2 === 0 || arr.length === 1
);
//N이 2가 아닌 짝수이면 위 배열에서 인덱스 1부터 끝까지 복사해서 재할당
if (input % 2 === 0 && cardList.length !== 1) cardList = cardList.slice(1);

function solution(cardList) {
  //위에 과정을 거쳤는데 배열길이가 1이면 그냥 [0]번째 값 리턴
  if (cardList.length === 1) return cardList[0];
  //배열의 인덱스를 정의함
  let index = 0;
  //배열의 길이를 정의함
  let length = cardList.length;
  //인덱스가 배열의 길이 -1 보다 같거나 클때까지 반복함
  while (index < length - 1) {
    cardList[length] = cardList[index];
    index += 1;
    length = cardList.length;
    index += 1;
  }

  return cardList[length - 1];
}

console.log(solution(cardList));
