// 08_22

var string = "Hello World";
var search = "l";
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있음
for (var i = 0; i < string.length; i++) {
  // 문자열의 개별 문자가 "l"이면
  if (string[i] === search) {
    index = i;
    break; // 반복문을 탈출
  }
}

console.log(index); // 2

// 참고로 String.prototype.indexOf 메서드를 사용해도 같은 동작을 함
console.log(string.indexOf(search)); // 2