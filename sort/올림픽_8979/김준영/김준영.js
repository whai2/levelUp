const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const countries = [];
const score = [];
const rank = [];

for (let i = 1; i <= N; i++) {
  countries.push(input[i].split(" ").map(Number));
}

// 각 나라 번호 별로 정렬
countries.sort((a, b) => a[0] - b[0]);

// 금,은,동에 차등 점수 부여하여 나라별 점수 계산 - 메달 최대 총합인 1000000을 금메달 점수로 설정
for (let i = 0; i < N; i++) {
  score[i] =
    countries[i][1] * 1000000 + countries[i][2] * 1000 + countries[i][3] * 1;
  rank[i] = 1;
}

// 자신보다 점수가 높은 나라 발견 시 등수 + 1
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (score[i] < score[j]) {
        rank[i]++;
      }
    }
  }
}
console.log(rank[K - 1]);
