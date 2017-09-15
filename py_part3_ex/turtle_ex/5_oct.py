#draw an octogon

from turtle import *

def octogon():
    for i in range(8):
        forward(70)
        right(360.0 / 8)

octogon()
mainloop()
