const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const storeName = input[1];

const signboards = input.slice(2);

let answer = 0;

for (let i = 0; i < N; i++) {
  let flag2 = true;
  const currSignboard = signboards[i];

  if (currSignboard.includes(storeName) || currSignboard === storeName) {
    answer += 1;
  } else {
    let newA = currSignboard.slice(currSignboard.indexOf(storeName[0]));

    if (flag2) {
      // 새로운 문자열 만들기
      for (let j = 0; j < newA.length; j++) {
        let newB = "";
        for (let k = 0; k < storeName.length; k++) {
          newB += storeName[k];
          for (let z = 0; z < j; z++) {
            newB += "-";
          }
        }
        // 새로운 문자열과 비교하기
        let flag = true;
        for (let k = 0; k < newB.length; k++) {
          if (newB[k] !== "-") {
            if (newB[k] !== newA[k]) {
              flag = false;
              break;
            }
          }
        }
        // 모두 같으면 answer 1 추가
        if (flag) {
          answer += 1;
          flag2 = false;
          break;
        }
      }
    }
  }
}

console.log(answer);
