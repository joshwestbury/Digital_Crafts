#Given a number as the height, print a triangle as in "Print a Triangle" but with the given height.
height = 4
stars = 1
rowCount = row -1

for i in range(height):
    print(rowCount * "  " +  stars * "*")
    stars += 2
    rowCount -= 1
