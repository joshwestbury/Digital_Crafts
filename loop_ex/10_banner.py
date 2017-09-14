# Bonus: Print a Banner
#
# Given a string, input by the user, print that string with a box around it. The box should stretch to the length of the string. Example session:
#
# $ python banner.py
# Text? Welcome to DigitalCrafts
# ****************************
# * Welcome to DigitalCrafts *
# ****************************

x = input("Please give me a word ")

for i in range(len(x)):
    if i in[0]:
        print("*" * len(x))
    elif i in[1]:
        print("*" + x + "*")
    elif i in [2]:
        print("*" * len(x))

# w = int(input("What is the width? "))
# h = int(input("What is the height? "))
#
# for i in range(h):
#     if i in[0]:
#         print("*" * w)
#     elif i in[(h -1)]:
#         print("*" * w)
#     else:
#         print("*"+"  "*(w - 2) + "*")
