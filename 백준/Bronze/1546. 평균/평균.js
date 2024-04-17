let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


// 첫째 줄에 시험 본 과목 수. 둘째 줄 현재 성적

let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let maxValue = scores.reduce((a, b) => Math.max(a, b));
let update = [];

for(let i = 0; i < n; i++) {
  update.push(scores[i] / maxValue * 100);
}

//배열에 첫째 줄에 새로운 평균을 출력

console.log(update.reduce((a, b) => a + b) / n);