# You will write a command line program to manage a phone book. When you start the phonebook.py program, it will print out a menu and ask the user to enter a choice:

print("Electronic Phone Book")
print("====================")
print("1. Look up an entry")
print("2. Set an entry")
print("3. Delete an entry")
print("4. List all entries")
print("5. Quite")

phonebook = {
        "Bri Westbury": "111-111-1111",
        "Estelle Rose" : "222-222-2222",
        "Margot Jean": "333-333-3333",
        "Dandy Lion": "444-444-4444",
        "Cooper Sater": "555-555-5555"
}

while True:
    option_num = int(input("Please choose an option between 1-5 "))
    if option_num == 1:
        name = (input("what is the person's name? "))
        print(phonebook[name])
    elif option_num == 2:
        name = (input("what is the person's name? "))
        number = (input("What is the phone number? "))
        phonebook[name] = [number]
    elif option_num == 3:
        name = (input("what is the person's name? "))
        del phonebook[name]
    elif option_num == 4:
        for k in phonebook.items():
            print(k)
    elif option_num == 5:
        break
    else:
        print("invalid input")
