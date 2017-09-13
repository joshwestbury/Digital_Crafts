# Given a height and width, input by the user, print a box consisting of * characters as its border. Example session:
#
# $ python box.py
# Width? 6
# Height? 4
# ******
# *    *
# *    *
# ******

w = int(input("What is the width? "))
h = int(input("What is the height? "))

for i in range(h):
    if i in[0]:
        print("*" * w)
    elif i in[(h -1)]:
        print("*" * w)
    else:
        print("*"+"  "*(w - 2) + "*")
