# 비번은 6자리 이상 9자리 이하
# N줄에 걸쳐 숫자 문자열이 6자리 이상 9자리 이하면 yes
N = int(input())
for i in range(N):

  word = input()
  if 6 <= len(word) <= 9:
    print("yes")
  else:
    print("no")