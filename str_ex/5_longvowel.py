# Given a word as a string, print the result of extending any long vowels to the length of 5. Examples:
#
# Good => Goooood
# Cheese => Cheeeeese
# Man => Man
# Spoon => Spooooon

newWord = input("Please give me a word ")
replacements = ( ('aa','aaaaa'), ('ee','eeeeee'), ('oo','ooooo'))

for i, j in replacements:
    newWord = newWord.replace(i, j)

print (newWord)
