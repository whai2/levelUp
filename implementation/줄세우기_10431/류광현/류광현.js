const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().split('\n');

const totalNumber = Number(input[0]); 
const testCases = list.map(line => line.split(' ')); // [1, 900, 901, 902 ...], [2, 901, 902 ...]
const list = input.shift(); 
const totalSteps = 0;

for (let i=1; i< testCases.length; i++){
    let steps = 0;
    for(let j=0; j<i; j++){
        if(testCases[j] > testCases[i]){
            steps++;
        }
    }
    totalSteps += steps;
    const box = testCases.splice(j,i)[0];
    testCases.splice(j-steps, 0, box);
}

console.log(`${list} ${totalSteps}`);

//실패! 모르겠음!