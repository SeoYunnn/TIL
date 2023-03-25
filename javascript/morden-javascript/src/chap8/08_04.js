// 08_04
// x가 짝수이면 result 변수에 문자열 "짝수"를 할당하고, 홀수이면 문자열 "홀수"를 할당
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0 -> 이때 0은 false로 암묵적 강제 변환됨
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result); // 짝수