const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const name = [...input[0]];
name.sort(); // 사전순으로 가장 앞에오는 정답을 내기 위해 알파벳 사전순으로 정렬합니다

// 알파벳들의 빈도를 저장합니다.
let alpha_count = {};
name.map((item) => {
  if (!(item in alpha_count)) {
    alpha_count[item] = 1;
  } else {
    alpha_count[item] += 1;
  }
});
alpha_count = Object.entries(alpha_count);

// 홀수번 등장하는 알파벳의 갯수를 셉니다.
let odd_count = 0;
alpha_count.map((alpha) => {
  if (alpha[1] % 2 === 1) odd_count++;
});

// 홀수번 등장하는 알파벳이 여러개일 때 팰린드롬으로 만들 수 없습니다.
if (odd_count > 1) {
  return console.log("I'm Sorry Hansoo");
}

let answer = "";

// 알파벳 갯수 객체 alpha_count를 참고하여 (알파벳의 빈도수 / 2)번 만큼 answer에 저장합니다. 홀수번 등장하는 알파벳의 경우 내림하여 반복해줍니다.
function repeatAlphabet(dict) {
  dict.map((item) => (answer += item[0].repeat(Number(item[1] / 2))));
}

// 현재까지 저장된 answer를 역순으로 뒤집은 문자열입니다.
function reverseWord() {
  return answer.split("").reverse().join("");
}

// 이름의 길이가 짝수개인 경우, 모든 알파벳이 짝수번 등장합니다.
if (name.length % 2 === 0) {
  repeatAlphabet(alpha_count);
  answer += reverseWord();
} // 이름의 길이가 홀수개인 경우, 한개의 알파벳만 홀수번 등장합니다.
else {
  repeatAlphabet(alpha_count);
  let rest = reverseWord();
  // 팰린드롬의 정 가운데는 홀수번 등장하는 알파벳이 들어갈 수 있게 합니다.
  alpha_count.map((alpha) => {
    if (alpha[1] % 2 === 1) answer += alpha[0];
  });
  // 홀수번 등장하는 알파벳 한글자를 넣은 후, 저장해두었던 그 전까지의 answer의 역순 문자열을 넣어줍니다.
  answer += rest;
}

console.log(answer);
