from matplotlib import pyplot

def f(x):
    return 2 * x + 1

def g(x):
    return x + 1

for x in range(-3, 5):
  print("f({x})={y} \t g({x})={z}".format(x=x, y=f(x), z=g(x)))

f_output = []
g_output =[]

x_list = list(range(-3, 5))

for x in x_list:
    f_output.append(f(x))
    g_output.append(g(x))

pyplot.plot(x_list, f_output, x_list, g_output)
pyplot.show()
