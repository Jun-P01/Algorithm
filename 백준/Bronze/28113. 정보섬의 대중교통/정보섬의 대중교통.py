# N: 지하철까지 걸어서 가는 시간, A: A분뒤 버스 도착, B: B분후 지하철 도착.

N, A, B = map(int, input().split())

# 버스에 먼저 탑승할수 있으면 Bus, 지하철에 더 먼저 탑승할 수 있으면 Subway, 버스와 지하철에 탑승하게 되는 시간이 동일하면 Anything을 출력.
if B < N:
  print("Bus")
elif A < B:
  print("Bus")
elif A > B:
  print("Subway")
else:
  print("Anything")
