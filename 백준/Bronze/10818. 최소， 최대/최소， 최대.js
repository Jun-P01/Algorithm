let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
// 첫쨰줄 = 정수 개수, 둘째 줄 = 정수
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;

for(let i = 0; i < n; i++) {
  if( minValue > arr[i]) minValue = arr[i];
  if( maxValue < arr[i]) maxValue = arr[i];
  
}
console.log( minValue , maxValue);