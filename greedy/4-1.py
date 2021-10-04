# 내풀이
x = 1
y = 1
n = int(input())
ways = input().split()

for way in ways:
  if way == 'L' and y - 1 > 0:
    y -= 1

  if way == 'R' and y + 1 <= n:
    y += 1

  if way == 'U' and x - 1 > 0:
    x -= 1

  if way == 'D' and x + 1 <= n:
    x += 1

print(x, y)

# 해답
n = int(input())
x, y = 1, 1
plans = input().split()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']

for plan in plans:
  for i in range(len(move_types)):
    if plan == move_types[i]:
      nx = x + dx[i]
      ny = y + dy[i]

  if nx < 1 or ny < 1 or nx > n or ny > n:
    continue

  x, y = nx, ny

print(x, y)