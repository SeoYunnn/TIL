# <오픈소스프로그래밍 기말 프로젝트>

import os
import time

# 문자열 my_string과 target이 매개변수로 주어질 때,
# trarget이 문자열 my_string의 부분 문자열이라면 1을
# 아니라면 0을 return 하는 solution 함수를 작성하시오

# 제한사항
# 1 ≤ my_string 의 길이 ≤ 100
# my_string 은 영소문자로만 이루어져 있습니다.
# 1 ≤ target 의 길이 ≤ 100
# target 은 영소문자로만 이루어져 있습니다.

# in 연산자로 target 이 my_string 에 포함되어 있는지 확인
# 만약 target 이 my_string 에 부분 문자열이라면 1을 반환하고
# 그렇지 않다면 0을 반환
def solution(my_string, target):
    return 1 if target in my_string else 0

# 결과 값 : 1
result = solution("python quiz", "python")
print(result)  

# 결과 값 : 0
result = solution("python quiz", "java")
print(result)