N = int(input())
aprices = []

for _ in range(N):
  price = int(input())
  aprices.append(price)

M = int(input())
bprices = []

for _ in range(M):
  price = int(input())
  bprices.append(price)

total = 0
for b in bprices:
  total += aprices[b - 1]

print(total)