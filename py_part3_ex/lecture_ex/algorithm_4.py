# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

# # create an array of known_primes
# known_primes = [2,3]
# def is_prime(n):
# 	total_primes = len(known_primes)
# 	for i in range(0,total_primes):
# 		if(n % known_primes[i] == 0):
# 			# NOT PRIME!!
# 			return False
# 		else:
# 			# it might be prime, it might not.
# 			# Its just not divisible by this number
# 			continue
# 	known_primes.append(n)
# 	return True
#
# print is_prime(4534532235)

n = 100000

ls = []
for i in range(1, n):
    for x in range(2, i-1):
        if i % x == 0:
            ls.append(i)

lsn = []
for j in range(1, n+1):
    if j not in ls:
        lsn.append(j)

print(sum(lsn))
