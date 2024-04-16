let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);
let answer = '';
//각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.
for (let t =1; t <= testcase; t++) {
  let data = input[t].split(' ');
  let a = Number(data[0]);
  let b = Number(data[1]);
  answer += a + b + '\n'
}

console.log(answer);