#Use your solution in Matrix Addition, and extend it to work for a pair of matrices of any size, as long as they have the same size.

a = [ [2, 1],
        [5, 3],
        [5, 3],
]

b = [ [4, 3],
        [6, 2],
        [5, 3],
]

answer = [
        [0, 0],
        [0, 0],
        [0, 0],
]


for i in range (len(a)):
    for j in range(len(a[0])):
        answer[i][j] = a[i][j] + b[i][j]

for i in answer:
    print(i)

#Paul's version
# answer = []
# for i in range(0, len(a)):
#     row = a[i]
#     temp = []
#     for j in range(0, len(row)):
#         print(i, j)
#         ans = a[i][j] + b[i][j]
#         temp.append(ans)
#     answer.append(temp)
# print(answer)
