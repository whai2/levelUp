const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const str = fs.readFileSync(path).toString().trim();

let obj = {};

for (let i = 0; i < str.length; i++) {
  obj[str[i]] = obj[str[i]] === undefined ? 1 : obj[str[i]] + 1;
}

const keys = Object.keys(obj).sort();
let sortedKeys = [];
let sortedValue = [];

for (const key of keys) {
  sortedKeys.push(key);
  sortedValue.push(obj[key]);
}

if (sortedValue.filter((e) => e % 2 === 1).length > 1)
  return console.log("I'm Sorry Hansoo");

let newStr = "";

sortedKeys.forEach((e, i) => {
  newStr += e.repeat(parseInt(sortedValue[i] / 2));
});

let chk = "";
let c = sortedValue.findIndex((e) => e % 2 === 1);
if (c !== -1) chk += sortedKeys[c];

console.log(newStr + chk + newStr.split("").reverse().join(""));
