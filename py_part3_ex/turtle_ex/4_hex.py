#draw a hexagon

from turtle import *

def hexagon():
    for i in range(6):
        forward(70)
        right(360.0 / 6)

hexagon()
mainloop()
