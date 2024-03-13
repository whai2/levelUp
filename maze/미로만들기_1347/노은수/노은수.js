const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(path).toString().split("\n");

const count = input[0];
const inputArray = input[1].split("");

function solution(count, array) {
  const maze = [];
  const init = [0, 0];
  const direction = [0, -1];

  let maxX = 0;
  let minX = 51;
  let maxY = 0;
  let minY = 51;

  maze.push([...init]);
  maxX = Math.max(init[0], maxX);
  minX = Math.min(init[0], minX);
  maxY = Math.max(init[1], maxY);
  minY = Math.min(init[1], minY);

  for (let i = 0; i < count; i++) {
    switch (array[i]) {
      case "R":
        rRotate(direction);
        break;

      case "L":
        lRotate(direction);
        break;

      case "F":
        init[0] = init[0] + direction[0];
        init[1] = init[1] + direction[1];
        maze.push([...init]);

        maxX = Math.max(init[0], maxX);
        minX = Math.min(init[0], minX);
        maxY = Math.max(init[1], maxY);
        minY = Math.min(init[1], minY);
        break;
    }
  }
  const realMaze = mazeSizeCalculator(minX, minY, maxX, maxY);
  mazeMaker(realMaze, maze, minX, minY);
  const reverse = resultReverse(realMaze);

  return reverse;
}

function rRotate(initDirection) {
  const x = initDirection[0];
  const y = initDirection[1];

  const newX = y;
  const newY = -x;

  initDirection[0] = newX;
  initDirection[1] = newY;
}

function lRotate(initDirection) {
  const x = initDirection[0];
  const y = initDirection[1];

  const newX = -y;
  const newY = x;

  initDirection[0] = newX;
  initDirection[1] = newY;
}

function mazeSizeCalculator(minX, minY, maxX, maxY) {
  realMaze = [];
  const xSize = maxX - minX;
  const ySize = maxY - minY;

  for (let i = 0; i <= xSize; i++) {
    realMazeColumn = [];
    for (let j = 0; j <= ySize; j++) {
      realMazeColumn.push("#");
    }

    realMaze.push(realMazeColumn);
  }
  return realMaze;
}

function mazeMaker(realMaze, maze, minX, minY) {
  for (let i = 0; i < maze.length; i++) {
    temp1 = maze[i][0];
    temp2 = maze[i][1];
    maze[i][1] = temp1;
    maze[i][0] = temp2; // x , y 치환 -> 인덱스화

    maze[i][0] = maze[i][0] - minY;
    maze[i][1] = maze[i][1] - minX; // 평행이동

    realMaze[maze[i][0]][maze[i][1]] = "."; // 이동 표시
  }
}

function resultReverse(realMaze) {
  const mazeSize = realMaze.length;
  reverse = [];

  for (let i = 0; i < mazeSize; i++) {
    const column = realMaze.pop();
    reverse.push(column);
  }

  return reverse;
}

const result = solution(count, inputArray);

function answerResult(result) {
  let answer = "";
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      answer += result[i][j];
    }
    if (i !== result.length - 1) {
      answer += "\n";
    }
  }

  return answer;
}

const answer = answerResult(result);
console.log(answer);
