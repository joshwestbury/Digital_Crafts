bill = float(input("What is the total bill amount? "))
service = input("What was the level of service: good, fair, or bad? ").lower()

def calcTip (bill, service):
    if service == "good":
        tip = (bill * 0.2)
        total = bill + tip
    elif service == "fair":
        tip = (bill * .15)
        total = bill + tip
    elif service == "bad":
        tip = (bill * .1)
        total = bill + tip
    print("Your tip amount is {:.2f}" .format(tip))
    print("Your total amount is {:.2f}" .format(total))

calcTip(bill, service)
