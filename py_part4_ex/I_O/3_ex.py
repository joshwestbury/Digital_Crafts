#Write a program that prompts the user to enter a file name, then prints the letter histogram and the word histogram of the contents of the file.

#letter histogram
def  letter_hist(word):
    tally = {}
    for character in word:
        if character in tally:
            tally[character] += 1
        else:
            tally[character] = 1
    print(tally)

#word histogram
def word_hist(string):
    tally = {}
    par = string.lower()
    keyList = par.split()
    for word in keyList:
        if word in tally:
            tally[word] += 1
        else:
            tally[word] = 1
    print(tally)


fileName = input("Please enter a file name ")+".txt"

with  open(fileName, 'r') as fh:
    contents = fh.read()
    letter_hist(contents)
    word_hist(contents)
    print()
