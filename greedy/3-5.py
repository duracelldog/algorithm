n, k = map(int, input().split())
tryCount = 0

# n = 17, k = 4

while(True):
  if n == 1:
    break

  if n % k == 1:
    n -= 1
    tryCount += 1
  else:
    n /= k
    tryCount += 1

print(tryCount)