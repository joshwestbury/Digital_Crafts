#draw a pentagon

from turtle import *

def pentagon():
    for i in range (5):
        forward(70)
        right(360.0 / 5)

pentagon()
mainloop()
