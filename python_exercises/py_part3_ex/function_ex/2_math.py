#Write a function f(x) that returns x + 1 and plot it for x values of -3 to 3 in increments of 1. You may use the following code template:

import matplotlib.pyplot as plot

def f(x):
    return x + 1

xs = list(range(-3, 3))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.show()
