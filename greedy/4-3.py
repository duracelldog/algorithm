# 내풀이
# pos = input()

# x = ord(pos[0]) - ord('a') + 1
# y = int(pos[1])
# count = 0

# for _ in range(8):
#   if x - 2 > 0:
#     if y - 1 > 0:
#       count += 1
#     if y + 1 <= 8:
#       count += 1

#   elif x + 2 <= 8:
#     if y - 1 > 0:
#       count += 1
#     if y + 1 <= 8:
#       count += 1

#   elif y - 2 > 0:
#     if y - 1 > 0:
#       count += 1
#     if y + 1 <= 8:
#       count += 1

#   elif y + 2 <= 8:
#     if y - 1 > 0:
#       count += 1
#     if y + 1 <= 8:
#       count += 1

# print(count)


# 해답
input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

steps = [(-2, -1), (-2, 1), (2, 1), (2, -1), (-1, 2), (1, 2), (-1, -2), (1, -2)]
result = 0

for step in steps:
  next_row = row + step[0]
  next_column = column + step[1]

  if next_column > 0 and next_column <= 8 and next_row > 0 and next_row <=8:
    result += 1


print(result)
