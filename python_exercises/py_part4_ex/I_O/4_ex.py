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




# for key in data.keys():
#     print(data[key[1]])
    #xl.append(key)

#print(xl)





#dict(zip())



# def f(x):
#     #return sin(x)
#
# xs = list(range(-5, 5, 1))
# ys = []
# for x in xs:
#     ys.append(f(x))
#
# plot.plot(xs, ys)
# plot.show()
#
#
