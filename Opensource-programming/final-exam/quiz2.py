# 모스부호 해독 프로그램 만들기
# 문자열 letter 가 매개변수로 주어질 때,
# letter 영어 소문자로 바꾼 문자열을 return 하는
# solution 함수를 완성하시오

# 제한사항
# 1 ≤ letter 의 길이 ≤ 1,000
# letter 의 모스부호는 공백으로 나누어져 있습니다
# letter 에 공백은 연속으로 두 개 이상 존재하지 않습니다

# letter = 여러분의 좌우명 또는 인상 깊었던 말을 쓰시오

def solution(letter):
  morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z', '/': ' '}
  pieces = letter.split() # letter 를 공백을 기준으로 나누어 pieces 리스트에 저장
  
  answer = ''
  for piece in pieces: # pieces 에 있는 각 모스 부호를 more 딕셔너리에서 찾아 해당 알파벳으로 변환
    c = morse[piece]
    answer = answer + c
  
  return answer # 최종적으로 모인 알파벳들을 합쳐서 반환

# 결과 값 : js and opensource are future
result = solution('.--- ... / .- -. -.. / --- .--. . -. ... --- ..- .-. -.-. . / .- .-. . / ..-. ..- - ..- .-. .')
print(result)