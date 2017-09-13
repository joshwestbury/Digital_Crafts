num = [2, 4, 5, 6, 9]
even_num = []
for nums in num:
    if nums % 2 == 0:
        even_num.append(nums)

print(even_num)

#LIST COMPREHENSION
#evenList = [i for i in num if i % 2 == 0]
#print(evenList)
