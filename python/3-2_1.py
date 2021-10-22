# -*- coding: utf-8 -*-
# python3 3-1.py

# 큰 수의 법칙

# 배열의 크기가 N
# 숫자가 더해지는 횟수 M
# 연속해서 더해질 수 있는 횟수 K

# 단순하게 푸는 답안 예시 ---------------------------------

# N, M, K를 공백으로 구분하여 입력받기
n, m, k = map(int, input().split())

# N개의 수를 공백으로  구분하여 입력 받기
data = list(map(int, input().split()))
data.sort()

first = data[n - 1] # 가장 큰 수
second = data[n - 2] # 두 번쨰로 큰 수

result = 0  # 모두 더한 결과

while True:
  for i in range(k):
    if m == 0:
      break

    result += first
    m -= 1

  if m == 0:
    break

  result += second
  m -= 1

print(result)