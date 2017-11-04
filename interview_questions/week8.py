# Challenge 2
#
# Given a list of numbers find the number of pairs that add to 0. Numbers are unique and will not repeat.
#
# Example: [-2, 1, 0, 2] => 1 pair since only -2 + 2 = 0

lst = [-2, -1, 1, 2, 0]
count = 0
used = []

for i in range(len(lst)):
    for j in range(len(lst)):
        if i != j and lst[i] + (lst[j]) == 0 and i not in used and j not in used:
            count += 1
            used.append(i)
            used.append(j)

print(count)
