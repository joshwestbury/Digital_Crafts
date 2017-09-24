# Print the multiplication table for numbers from 1 up to 10. Example output:

# $ python multiplication_table.py
# 1 X 1 = 1
# 1 X 2 = 2
# 1 X 3 = 3
# 1 X 4 = 4
# ...
# 5 X 5 = 25
# 5 X 6 = 30
# 5 X 7 = 35
# ...
# 10 X 8 = 80
# 10 X 9 = 90
# 10 X 10 = 100

num = 1

for i in range(4):
    print("1 X", num, "=", (1 * num))
    num += 1
print("...")
for i in range(3):
    print("5 X", num, "=", (5 * num))
    num +=1
print("...")
for i in range(3):
    print("5 X", num, "=", (10 * num))
    num +=1
