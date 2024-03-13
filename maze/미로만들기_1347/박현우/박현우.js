const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().split("\n");
//케이스 길이
const rootLength = +input[0];
// 케이스
const root = input[1];
//상, 우, 하, 좌 각 케이스 좌표 변화 여기서는 그냥 (x,y)좌표식으로 함
const position = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];
let minR = 0;
let maxR = 0;
let minC = 0;
let maxC = 0;
let curR = 0;
let curC = 0;
let mapSize = [];
//방향 : 기본값=> 하이므로 기본값은 2
let direc = 2;
//맵 사이즈 구하기
for (let i = 0; i < rootLength; i++) {
  switch (root[i]) {
    case "F":
      curR = curR + position[direc][1];
      curC = curC + position[direc][0];
      minR = Math.min(minR, curR);
      maxR = Math.max(maxR, curR);
      minC = Math.min(minC, curC);
      maxC = Math.max(maxC, curC);
      break;
    case "R":
      direc += 1;
      direc = direc % 4;
      break;
    case "L":
      direc = direc === 0 ? 3 : direc - 1;
      break;
  }
}
mapSize = [maxR - minR + 1, maxC - minC + 1];
//방향을 다시 기본값인 2로 초기화
direc = 2;
//홍준이가 출발한 좌표값
curR = Math.abs(minR);
curC = Math.abs(minC);
//일단 맵에 값을 싹다 #으로 초기화
const map = new Array(mapSize[0])
  .fill()
  .map(() => new Array(mapSize[1]).fill("#"));
//출발점은 .로 바꿔줌
map[curR][curC] = ".";

//이제 출발점으로 시작해서 홍준이가 지나간 자리를 .로 바꿔줌
for (let j = 0; j < rootLength; j++) {
  switch (root[j]) {
    case "F":
      curR = curR + position[direc][1];
      curC = curC + position[direc][0];
      map[curR][curC] = ".";
      break;
    case "R":
      direc += 1;
      direc = direc % 4;
      break;
    case "L":
      direc = direc === 0 ? 3 : direc - 1;
      break;
  }
}
//맵 출력
console.log(map.map((v) => v.join("")).join("\n"));
