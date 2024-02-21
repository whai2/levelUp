// 입력값 만들기 ['3', 'ABAB', 'AABB', 'ABBA']
const fs = require('fs');
let input = fs.readFileSync('.input.txt').toString().split('\n');


//케이스 갯수 3
const caseCount = +input[0];
//결과값 출력 변수
let result = 0;
//케이스만큼 for문 반목
for(let i = 1; i <= caseCount ; i++){
    //solution함수에 케이스경우 넣기 'ABAB' 'AABB' 'ABBA'
    solution(input[i]);
}

function solution (string) {
    //스택 배열 선언
    const stack = [];
    //입력받은 문자열 길이만큼 반복문 Ex) 'ABAB' => 4번 반복
    for(let j = 0; j <= string.length - 1; j++){
        //stack배열의 길이가 0, stack배열의 마지막 요소랑 string의 j번째 값이 같지 않으면 그 값을 stack에 push
        if(stack.length === 0 || stack[stack.length - 1] !== string[j]) {
            stack.push(string[j]);
        }
        //stack 배열길이가 0이 아니거나 stack배열의 마지막 요소랑  string의 j번째 값이 같으면 stack배열의 마지막 요소 제거
        else {
            stack.pop();
        }
    }
    //반복문을 다돌렸을 때 stack배열의 길이가 0이면 result값에 +1
    if(stack.length === 0) result += 1; 
}


console.log(result);