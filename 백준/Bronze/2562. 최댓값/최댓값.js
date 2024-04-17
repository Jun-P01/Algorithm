let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 9개의 자연수 주어짐 
let numbers = input.map(Number);

// 배열에서 최대값 찾기
let maxNumber = Math.max(...numbers);  
let maxNumberIndex = numbers.indexOf(maxNumber) + 1;  

console.log(maxNumber);  
console.log(maxNumberIndex);  
