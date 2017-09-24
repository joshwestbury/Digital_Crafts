#Extract all the code for the shapes in exercise 1 into functions. Move them all into a single file called shapes.py. Write a new .py program that imports the shapes module and use its functions to draw all the available shapes onto the screen.
from turtle import *

def triangle():
    for i in range (3):
        forward(300)
        left(120)

def square():
    for i in range (4):
        forward(100)
        left(90)

def pentagon():
    for i in range (5):
        forward(70)
        right(360.0 / 5)

def hexagon():
    for i in range(6):
        forward(70)
        right(360.0 / 6)

def octogon():
    for i in range(8):
        forward(70)
        right(360.0 / 8)

def star():
    for i in range(5):
        forward(100)
        right(144)

def circ():
    for i in range(4):
        up()
        forward(60)
        left(40)
        down()
    width(5)
    circle(150)

#if __name__ = "__"main__":
#mainloop()
