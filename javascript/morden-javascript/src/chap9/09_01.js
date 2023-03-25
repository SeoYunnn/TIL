// 09_01

var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅함
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아님
console.log(typeof x, x); // number 10