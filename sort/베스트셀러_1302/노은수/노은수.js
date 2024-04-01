const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const data = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")

const number = data[0];
const array = data.slice(1).sort();

function solution(number, array) {
  const hash = makeHash(array);
  const keyToFind = findMaxListInHash(hash);

  return keyToFind;
}

function makeHash(array) {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) {
      hash[array[i]] = 0;
    } // init

    hash[array[i]] = hash[array[i]] + 1;
  }

  return hash;
}

function findMaxListInHash(hash) {
  const max = Math.max(...Object.values(hash));
  const keyToFind = Object.keys(hash).find((key) => hash[key] == max);
  return keyToFind;
}

const result = solution(number, array);
console.log(result);