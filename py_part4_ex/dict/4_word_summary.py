# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:
#
# >>> word_histogram('To be or not to be')
# {'to': 2, 'be': 2, 'or': 1, 'not': 1}

#Dict. comprehension
# def hist(string):
#     tally = {"key" : "value"}
#     par = string.lower()
#     keyList = par.split()
#     tally = {key: keyList.count(key) for key in keyList}
#     print(tally)
#
# hist("To be or not to be")

#Alt method
def hist2(string):
    tally = {}
    par = string.lower()
    keyList = par.split()
    for word in keyList:
        if word in tally:
            tally[word] += 1
        else:
            tally[word] = 1
    print(tally)

hist2("To be or not to be")
# def  letter_hist3(word):
#     tally = {}
#     for character in word:
#         if character in tally:
#             tally[character] += 1
#         else:
#             tally[character] = 1
#
#     print(tally)
#
#
