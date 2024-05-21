T = int(input())

for i in range(T):
    N = input()
    N_rvs = N[::-1]

    addition= int(N) + int(N_rvs)
    addition = str(addition)
    addition_rvs = addition[::-1]

    if addition == addition_rvs:
        print("YES")
    else:
        print("NO")
