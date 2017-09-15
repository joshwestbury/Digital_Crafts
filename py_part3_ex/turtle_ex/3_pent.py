#draw a pentagon

from turtle import *

num_sides = 5
side_length = 70
angle = 360.0 / num_sides

for i in range(num_sides):
    forward(side_length)
    right(angle)


mainloop()
