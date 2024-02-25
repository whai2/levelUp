const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(path).toString().split('\n').slice(1).map(num => +num);

//다솜이가 받은 투표수
let main = input[0];
//나머지 후보들의 투표수를 담은 배열
let other = input.slice(1);
//결과값을 저장할 변수
let result = 0;


//나머지 후보들의 투표수가 다솜이가 받은 투표수보다 작아질 때까지 반복
while(main <= Math.max(...other)){
   //나머지 후보들의 투표수 중 제일 많이 득표한 후보의 인덱스 번호
  const maxIndex = other.indexOf(Math.max(...other));
   //그 후보 투표자 한명 매수하기
  other[maxIndex] -= 1;
   //매수 완료했으니깐 다솜이의 투표수 +1
  main += 1;
    // 결과값에 +1
  result += 1;
}


console.log(result);