# Print a NxN square of * characters. Prompt the user for N. Example output:
#
# $ python square2.py
# How big is the square? 10
# **********
# **********
# **********
# **********
# **********
# **********
# **********
# **********
# **********
# **********

num = int(input("How big is the square? "))

size = num

for i in range(0, size):
    print("*" * size)
