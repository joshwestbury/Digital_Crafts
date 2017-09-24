# Print a triangle consisting of * characters like this:
#
#    *
#   ***
#  *****
# *******

# h = 4
# w = 7
#
# for i in range(h):
#     if i in[0]:
#         print("     " + "*" + "  ")
#     elif i in[1]:
#         print("   " + ("*" * 3) + " ")
#     elif i in[2]:
#         print("  " + ("*" * 4) + " ")
#     else:
#         print("*" * w)


stars = 1
rowCount = row -1

for i in range(4):
    print(rowCount * " " +  stars * "*")
    stars += 2
    rowCount -= 1
