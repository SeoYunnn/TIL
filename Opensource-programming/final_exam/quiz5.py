# 0 또는 양의 정수가 주어졌을 때,
# 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요

# 예를 들어, 주어진 정수가 [6, 10, 2]라면
# [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고,
# 이중 가장 큰 수는 6210입니다

# 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때,
# 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어
# return 하도록 solution 함수를 작성해주세요

# 제한사항
# numbers의 길이는 1 이상 100,000 이하입니다
# numbers의 원소는 0 이상 1,000 이하입니다
# 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다

# numbers = [8, 30, 17, 2, 23]

def solution(numbers):
    answer = ''
    
    # numbers 가 모두 0인 경우 예외처리로 return 값을 0으로 반환

    if sum(numbers)==0:
        return '0'
    
    # numbers 를 string 타입 원소를 가진 리스트로 변환
    # numbers 의 원소는 모두 1,000 이하의 값이라고 했기에, 3자리 수를 맞춰 내림차순 정렬을 해주면 됨
    # numbers 값들을 하나의 string 값으로 합치자 
    # 정렬 기준은 숫자를 3번 반복해 길이를 맞추면 됨
    numbers = list(map(str, numbers))
    numbers.sort(key=lambda x: x*3, reverse=True)
    
    return ''.join(numbers)