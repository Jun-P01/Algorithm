let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcase = Number(input[0]);

for (let t = 1; t <= testcase; t++) {
  let data = input[t].split(' ').map(Number);
  let n = data[0]; // 데이터 개수
  let summary = 0;  // n개 점수의 합계

  for (let i = 1; i <= n; i++) {
    summary += data[i];
  }

  let average = summary / n; // 평균 계산
  let cnt = 0; // 평균 넘는 학생 수 계산
  for (let i = 1; i <= n; i++) {
    if (data[i] > average) {
      cnt += 1;
    }
  }

  console.log(`${(cnt / n * 100).toFixed(3)}%`);
}
