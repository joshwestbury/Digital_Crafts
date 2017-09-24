#Write a function that takes a temperature in Celcius and converts it Fahrenheit. Plot it on a graph.

import matplotlib.pyplot as plot
from math import sin
from numpy import arange

c = int(input("Give me a temperature in celsius "))

def conv(c):
    return 9/5 * c + 32

f = conv(c)
plot.plot(c, f, 'go')
plot.show()
