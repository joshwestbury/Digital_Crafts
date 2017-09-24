# Write program that takes a JSON file name as input and plots the X,Y data. Exchange JSON data with others to test your program more thoroughly.

import matplotlib.pyplot as plot
import json

fileName = input("Please enter a file name. ")+ ".json"

with open(fileName, 'r') as fh:
    data = json.load(fh)
    fh.close()


for v in data.values():
    data_lst = v

xl = []
yl= []
for i in data_lst:
    xl.append(i[0])
    yl.append(i[1])

plot.plot(xl, yl)
plot.show()
