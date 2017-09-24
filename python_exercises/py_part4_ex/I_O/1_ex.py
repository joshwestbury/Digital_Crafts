#Write a program that prompts the user to enter a file name, reads the contents of the file and prints it to the screen.

fileName = input("Please enter a file name ")+ ".txt"

def main(x):
    fh = open(fileName, 'r')
    contents = fh.read()
    fh.close()
    print(contents)


main(fileName)
