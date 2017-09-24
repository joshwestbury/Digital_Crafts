# Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. Repeat the process indefinitely, and you'll eventually reach 1.
#
# Given a num variable, can you print all the numbers in num's Collatz sequence until 1 is reached? Print the numbers space-separated (and each test case on its own line).
#
#


num = int(input("Give me a number "))


def collatz_sequence(num):
    seq = []            #initialize an empty list
    while num > 1:      #the while loop tests to see if num is greater than one. As long as num > 1 the while loop runs
        if num % 2 == 0: # if num is divisible by two (i.e. num is even), divide num by 2.
            num = num // 2
        else:
            num  = num * 3 + 1 # if num is not divisible by two (i.e. num is odd)
        seq.append(num) # append num values to the list seq

    print(seq)

collatz_sequence(num)
