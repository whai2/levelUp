const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [number, ...array] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .sort();

function solution(array) {
  const hash = makeHash(array);
  const keyToFind = findMaxInHash(hash);

  return keyToFind;
}

function makeHash(array) {
  const hash = {};
  array.forEach((key) => {
    hash[key] == null ? (hash[key] = 1) : (hash[key] += 1);
  });

  return hash;
}

function findMaxInHash(hash) {
  const max = Math.max(...Object.values(hash));
  const keyToFind = Object.keys(hash).find((key) => hash[key] == max);
  return keyToFind;
}

const result = solution(array);
console.log(result);