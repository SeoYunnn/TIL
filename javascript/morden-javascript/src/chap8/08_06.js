// 08_06
var num = 2;

// 0은 false로 취급됨
var kind = num ? (num > 0 ? "양수" : "음수") : "영";

console.log(kind); // 양수