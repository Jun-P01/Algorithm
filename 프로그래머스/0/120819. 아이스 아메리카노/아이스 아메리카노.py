def solution(money):
    number = money //5500
    leftmoney = money %5500
    coffee = [number, leftmoney]
    return coffee