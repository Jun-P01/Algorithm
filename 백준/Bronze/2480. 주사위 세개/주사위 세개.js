let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, c] = input[0].split(' ').map(Number);

if (a == b && b == c) {  // 세 개의 눈이 모두 같은 경우
    console.log(10000 + a * 1000);
} else if (a == b || a == c || b == c) {  // 정확히 두 개의 눈만 같은 경우
   
    if (a == b || a == c) {
        console.log(1000 + a * 100);
    } else {
        console.log(1000 + b * 100);
    }
} else {  // 모든 눈금이 다른 경우
    let maxDice = Math.max(a, b, c);
    console.log(maxDice * 100);
}
