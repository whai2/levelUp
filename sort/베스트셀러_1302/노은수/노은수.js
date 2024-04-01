const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const data = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")

const number = data[0];
const array = data.slice(1);

function solution(number, array) {
  const hash = makeHash(array);
  const maxListInHash = findMaxListInHash(hash);
  const firstAlphabetical = findAlphabetical(maxListInHash);

  return firstAlphabetical;
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
  let max = 0;
  for (book in hash) {
    max = Math.max(max, hash[book]);
  }
  const valueToFind = max;

  const hashToArray = Object.keys(hash);
  const keysToFind = [];
  for (let i = 0; i < hashToArray.length; i++) {
    if (hash[hashToArray[i]] === valueToFind) {
      keysToFind.push(hashToArray[i]);
    }
  }
  return keysToFind;
}

function findAlphabetical(maxListInHash) {
  const firstString = maxListInHash.sort();

  return firstString[0];
}

const result = solution(number, array);
console.log(result);