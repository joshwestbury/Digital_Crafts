import random
secret_number = random.randint(1, 10)

print("I was thinking of a number between 1 and 10.")

count = 5

while True:
    print("You have {} more turns".format(count))
    num_input = int(input("What's the number"))
    if num_input > secret_number:
        print("{} is too high".format(num_input))
        count -= 1
    elif num_input < secret_number:
        print("{} is too low".format(num_input))
        count -=1
    else:
        print("Yes, you win!")
        break
    if count < 1:
        print("You ran out of guesses")
        break
