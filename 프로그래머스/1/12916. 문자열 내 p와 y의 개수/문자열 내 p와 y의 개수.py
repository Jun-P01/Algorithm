def solution(s):
    s = s.lower()
    pcount = s.count('p')
    ycount = s.count('y')
    
    return pcount == ycount
    
    
