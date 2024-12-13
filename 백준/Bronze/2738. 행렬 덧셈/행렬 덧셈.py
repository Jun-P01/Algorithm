# 첫 줄에서 행렬의 크기 N과 M 입력받기
N, M = map(int, input().split())

# 행렬 A 입력받기
A = []  
for _ in range(N):
    A.append(list(map(int, input().split())))

# 행렬 B 입력받기
B = [] 
for _ in range(N):
    B.append(list(map(int, input().split())))

# 두 행렬을 더한 결과 저장
result = [] 
for i in range(N):
    row = []
    for j in range(M):
        row.append(A[i][j] + B[i][j]) 
    result.append(row)

# 결과 출력
for row in result:
    print(" ".join(map(str, row))) 
