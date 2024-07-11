import math 
def solution(slice, n):
    people_per_pizza = slice
    
    needed_pizza = n // people_per_pizza
    if n % people_per_pizza != 0:
        needed_pizza += 1
        
    return needed_pizza