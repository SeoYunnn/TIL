// 08_24

var string = "Hello World";
var search = "l";
var count = 0;

for (var i = 0; i < string.length; i++) {
  // "l"이면 카운트를 증가시킴
  if (string[i] === search) count++;
}

console.log(count); // 3

// 참고로 String.prototype.match 메서드를 사용해도 같은 동작을 함
const regexp = new RegExp(search, "i");
console.log(string.match(regexp).length); // 1