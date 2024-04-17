let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// 첫째 줄 숫자 수, 둘째 줄 숫자 공백 없이 빈칸으로 주어짐
let n = Number(input[0]);
let string = input[1];

let answer = 0;
// 문자열에 포함된 문자를 하나씩 확인 후
for (let x of string) {
  answer += Number(x);
}

//입력으로 주어진 숫자 n개의 합을 출력
console.log(answer);