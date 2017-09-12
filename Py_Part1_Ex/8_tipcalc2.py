bill = float(input("What is the total bill amount? "))
service = input("What was the level of service: good, fair, or bad? ").lower()
people = int(input("How many people in your party? "))

def calcTip (bill, service, people):
    if service == "good":
        tip = (bill * 0.2)
        total = bill + tip
    elif service == "fair":
        tip = (bill * .15)
        total = bill + tip
    elif service == "bad":
        tip = (bill * .1)
        total = bill + tip

    each = total / people
    print("Your tip amount is {:.2f}" .format(tip))
    print("Your total amount is {:.2f}" .format(total))
    print("Amount per person is  {:.2f}" .format(each))

calcTip(bill, service, people)
