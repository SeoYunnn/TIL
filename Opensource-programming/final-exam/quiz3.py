# 행성의 나이를 알파벳으로 표현할 때,
# a는 0, b는 1, ..., j는 9
# 예를 들어 cd는 23살, fb는 51살입니다
# age가 매개변수로 주어질 때
# PROGEAMMER-857식 나이를 return 하도록
# solution 함수를 완성하시오

# 제한사항
# age는 자연수입니다
# age ≤ 1,000
# PROGRAMMERS-857 행성은 알파벳 소문자만 사용합니다

# 각 숫자에 해당하는 알파벳 지정 -> 문제 조건 확인
def solution(age):
    pair = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        '3': 'd',
        '4': 'e',
        '5': 'f',
        '6': 'g',
        '7': 'h',
        '8': 'i',
        '9': 'j'
    }

    # age 를 문자열로 변환해 각 자릿수를 나누어 nums 리스트에 저장
    nums = str(age)
    answer = ''
    for num in nums:
      answer = answer + pair[num] # nums 에 있는 각 숫자를 pair 딕셔너리에서 찾아 알파벳 변환
    
    return answer

# 결과 값 : cdfb
result = solution(2351)
print(result)