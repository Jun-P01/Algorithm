all_students = set(range(1, 31))  

submitted_students = set()  
for _ in range(28):
    n = int(input())
    submitted_students.add(n)


missing_students = sorted(all_students - submitted_students)


print(missing_students[0])  
print(missing_students[1]) 