# Write program that takes a JSON file name as input and plots the X,Y data. Exchange JSON data with others to test your program more thoroughly.
#
# Example Format:
#
# {
#   "data": [
#     [1, 1],
#     [2, 2],
#     [3, 3],
#     [4, 4]
#   ]
# }

import matplotlib.pyplot as plot
import json

fileName = input("Please enter a file name. ")+ ".json"

with open(fileName, 'r') as fh:
    data = json.load(fh)

dict(zip())

    # count1 = 0
    # count2 = 0
    # for i in data:
    #     count1 += 1
    #     for j in data:
    #          
    #         count2 += 1
    # print (data)





# def plot(pos1, pos2):
#     if i in data
#
#
#
#
#     xs = list(range(x, y))
#     ys = []
#     for x in xs:
#         ys.append(f(x))
#
#     plot.plot(xs, ys)
#     plot.show()
#
# plot()
