from turtle import *

def circ():
    for i in range(4):
        up()
        forward(60)
        left(40)
        down()
    width(5)
    circle(150)

circ()
mainloop()
