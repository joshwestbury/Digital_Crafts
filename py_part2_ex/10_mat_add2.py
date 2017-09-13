#Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

a = [ [2, 1], [5, 3], [5, 3] ]
b = [ [4, 3], [6, 2], [5, 3] ]
c = [ [0, 0], [0, 0], [0, 0] ]


for i in range (len(a)):
    for j in range(len(a[0])):
        c[i][j] = a[i][j] + b[i][j]

for i in c:
    print(i)
