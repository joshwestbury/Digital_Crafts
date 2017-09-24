
num_coins = 0
print("You have {} coins.".format(num_coins))
switch = input("Do you want another? (yes/no)")
while switch == "yes":
    num_coins += 1
    print("You have {} coins.".format(num_coins))
    switch = input("Do you want another? (yes/no) ")
print("Bye")
