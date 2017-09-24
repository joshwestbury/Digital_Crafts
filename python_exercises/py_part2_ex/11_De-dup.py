#Given an list of numbers or strings, create a new list containing the same elements as the first list, except with any duplicate values removed. Print the list.

x = [3, 3, 5, 5, 6, 6, 7,7, 9, 10]
y = [ ]

for i in x:
    y = set(x)

print(y)
