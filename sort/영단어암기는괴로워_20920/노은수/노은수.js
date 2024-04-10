const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [numberArray, ...array] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const [wordsNumber, rememberWordsLength] = numberArray.trim().split(" ");

function solution(N, M, array) {
  let validatedWords = [];
  for (let i = 0; i < N; i++) {
    const validatedWord = validateLength(M, array[i]);
    validatedWord && validatedWords.push(validatedWord);
  }
  
  const hash = makeHash(validatedWords);
  let resultArray = [];
  while (Object.keys(hash).length) {
    const maxLengthList = findSameCounts(hash); // 1. 최대 빈도 찾기
    const sortedMaxLengthList = findMaxLengthAndAlphabetical(maxLengthList);
    resultArray = resultArray.concat(sortedMaxLengthList);
  }

  return resultArray;
}

function validateLength(M, word) {
  if (word.length < M) {
    return false;
  }
  return word;
}

function makeHash(words) {
  let hash = {};
  words.forEach((key) => {
    hash[key] == null ? (hash[key] = 1) : (hash[key] += 1);
  });

  return hash;
}

function findSameCounts(hash) {
  const max = Math.max(...Object.values(hash));

  const hashToArray = Object.keys(hash);
  const keysToFind = [];
  for (let i = 0; i < hashToArray.length; i++) {
    if (hash[hashToArray[i]] === max) {
      keysToFind.push(hashToArray[i]);
      delete hash[hashToArray[i]];
    }
  }

  return keysToFind;
}

function findMaxLengthAndAlphabetical(sameCountsArray) {
  sameCountsArray.sort((a, b) => {
    // 2. 먼저 길이에 따라 정렬
    const lengthDifference = b.length - a.length;
    if (lengthDifference !== 0) {
        return lengthDifference;
    }
    // 3. 길이가 같은 경우, 알파벳 순서대로 정렬
    return a.localeCompare(b);
  });

  return sameCountsArray;
}

const result = solution(wordsNumber, rememberWordsLength, array);
console.log(result.join("\n"));