from math import gcd

def solution(numer1, denom1, numer2, denom2):
    # 분모 통분
    common_den = denom1 * denom2
    # 분자 계산
    total_num = numer1 * denom2 + numer2 * denom1
    
    # / 최대공약수
    divisor = gcd(total_num, common_den)
    # 분자 분모 계산 및 리스트로 반환 
    reduce_den = common_den // divisor 
    reduce_num = total_num // divisor

    
    return [reduce_num, reduce_den]