// 08_25
// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 함

for (var i = 0; i < string.length; i++) {
  // "l"이면 카운터를 증가시킴
  if (string[i] === search) {
    count++;
    // code
    // code
    // code
  }
}

// continue 문을 사용하면 if 문 밖에 코드를 작성할 수 있음
for (var i = 0; i < string.length; i++) {
  //"l"이 아니면 카운트를 증가시키지 않음
  if (String[i] !== search) continue;

  count++;
  // code
  // code
  // code
}