//입력 받기
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
//입력받은거 줄별로 나누기
input = input.split(`\n`);
//주어지는 명령어 갯수
const testCaseNum = +input[0];
//스택 배열
const stack = [];
//결과를 담을 배열
const solutionArr = []; 

//입력값 배열 돌리기
for (let i = 1; i <= testCaseNum; i++) {
    const arr = input[i].split(' ').map((v) => +v);
    solution(arr);
    
}



//입력 숫자에 따라 주어진 명령 처리 함수
function solution(arr) {
    const inputValue = arr;
    if(inputValue.length === 2){
        stack.push(inputValue[1]);
        return
    }
    switch(inputValue[0]){
        case 2 :
            !stack.length ? solutionArr.push(-1) : solutionArr.push(stack.pop());
            break
        case 3 :
            solutionArr.push(stack.length);
            break
        case 4 :
            !stack.length ? solutionArr.push(1) : solutionArr.push(0);
            break
        case 5 :
            !stack.length ? solutionArr.push(-1) : solutionArr.push(stack[stack.length - 1]);
            break
    }
}

//결과값을 담은 배열 줄별로 나눠서 출력하기
console.log(solutionArr.join('\n'));


