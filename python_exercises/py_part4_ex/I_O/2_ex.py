# Write a program that prompts the user to enter a file name, then prompts the user to enter the contents of the file, and then saves the content to the file.

fileName = input("Please enter a file name. ")+ ".txt"

with  open(fileName, 'w') as fh:
    contents = fh.write(input("Please enter file contents. "))
    print(contents)
