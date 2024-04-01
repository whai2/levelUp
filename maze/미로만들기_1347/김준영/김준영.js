const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const route = input[1];

// 미로에서 최대 이동할 수 있는 거리는 50, 미로의 정 가운데를 시작기점으로 두기 위해 100으로 설정
const MAX = 100 + 1;

// 2차원 배열을 만들어주는 함수
Array.matrix = function (m, n, initial) {
  let a,
    i,
    j,
    mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (j = 0; j < n; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
};

// matrix('행', '열', '기본값')
let maze = Array.matrix(MAX, MAX, "#");

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

let y = 50;
let x = 50;
let minY = 50;
let minX = 50;
let maxY = 50;
let maxX = 50;
let D = 2; // 초기 설정이 남쪽 방향(0,1)을 바라보고 있으므로
maze[50][50] = ".";

for (let i = 0; i < N; i++) {
  const current = route[i];
  switch (current) {
    case "R":
      D = (D + 1) % 4;
      break;
    case "L":
      D = (D + 3) % 4;
      break;
    default:
      y = y + dy[D];
      x = x + dx[D];
      maze[y][x] = ".";
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      break;
  }
}

for (let i = minY; i <= maxY; i++) {
  let print = "";
  for (let j = minX; j <= maxX; j++) {
    print += maze[i][j];
  }
  console.log(print);
}
