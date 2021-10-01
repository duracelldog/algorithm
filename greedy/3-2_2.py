# -*- coding: utf-8 -*-
# python3 3-1.py

# 큰 수의 법칙

# 배열의 크기가 N
# 숫자가 더해지는 횟수 M
# 연속해서 더해질 수 있는 횟수 K

n, m, k = map(int, input().split())
data = list(map(int, input().split()))

data.sort() # 접속받은 수 정렬
first = data[n - 1] # 가장 큰 수
second = data[n - 2] # 두 번쨰로 큰 수

# 가장 큰 수가 더해지는 횟수 계산
count = int(m / (k + 1)) * k
count += m % (k + 1)

result = 0
result += (count) * first # 가장 큰 수 더하기
result += (m - count) * second # 두 번째로 큰 수 더하기

print(result)

