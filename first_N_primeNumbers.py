def firts_N_primeNumbers():
    n = int(input("Enter Number"))
    prime_numbers = []
    # p_lst = []
    num = 2
    while len(prime_numbers) < n:
        p_lst = []
        for i in prime_numbers:
            if num % i == 0:
                p_lst.append(num)

        if p_lst:
            prime_numbers += []
        else:
            prime_numbers += [num]

        num += 1

    return prime_numbers


print(firts_N_primeNumbers())
