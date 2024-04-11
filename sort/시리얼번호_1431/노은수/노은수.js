const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [number, ...array] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

function solution(array) {
  const resultArray = quickSort(array);

  let result = '';
  for (let i = 0; i < resultArray.length; i++) {
    result = result + resultArray[i];

    if (i !== resultArray.length -1) {
      result = result + '\n';
    }
  }
  return result;
}

const result = solution(array);
console.log(result);


function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue; // 피벗은 건너뛰기
    if (binarySort(array[i], pivot) === array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function binarySort(left, right) {
  return shortFirst(left, right);
}

function shortFirst(A, B) {
  if (A.length === B.length) {
    return digitSum(A, B);
  }

  if (A.length > B.length) {
    return B;
  }

  return A;
}

function digitSum(A, B) {
  const aNumbers = A.trim().split("");
  const bNumbers = B.trim().split("");

  let aSum = 0;
  for (let i = 0; i < aNumbers.length; i++) {
    if (Number(aNumbers[i])) {
      aSum = aSum + Number(aNumbers[i]);
    }
  }

  let bSum = 0;
  for (let i = 0; i < bNumbers.length; i++) {
    if (Number(bNumbers[i])) {
      bSum = bSum + Number(bNumbers[i]);
    }
  }

  if (aSum === bSum) {
    return alphabeticalAndNumber(aNumbers, bNumbers, A, B);
  }

  if (aSum > bSum) {
    return B;
  }

  return A;
}

function alphabeticalAndNumber(aNumbers, bNumbers, A, B) {
  for (let i = 0; i < aNumbers.length; i++) {
    if (Number(aNumbers[i]) && Number(bNumbers[i])) {
      if (aNumbers[i] > bNumbers[i]) {
        return B;
      }
      if (aNumbers[i] === bNumbers[i]) {
        continue;
      }

      return A;
    }

    else if (Number(aNumbers[i]) && !Number(bNumbers[i])) {
      return A;
    }
    else if (!Number(aNumbers[i]) && Number(bNumbers[i])) {
      return B;
    }

    else {
      if (aNumbers[i] > bNumbers[i]) {
        return B;
      }
      if (aNumbers[i] === bNumbers[i]) {
        continue;
      }

      return A;
    }
  }
}
