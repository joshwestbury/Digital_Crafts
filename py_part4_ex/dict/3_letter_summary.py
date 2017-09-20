
# Write a letter_histogram function that takes a word as its input, and returns a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

# >>> letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


#Dan's Solution
def letter_hist2(word):
    tally = {}
    keyList = list(word)
    tally = {key: keyList.count(key) for key in keyList} #dictionary comprehension
        print(tally)

#Paul's solution
def  letter_hist3(word):
    tally = {}
    for character in word:
        if character in tally:
            tally[character] += 1
        else:
            tally[character] = 1

    print(tally)

#Alternative Solution
def letter_hist(word):
    letters = list(word)
    tally = {}
    
    for letter in letters:
        tally[letter] = letters.count(letter)

    return tally

tally = letter_hist("bananna")
print(tally)
