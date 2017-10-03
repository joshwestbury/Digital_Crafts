# Given a histogram tally (one returned from either letter_histogram or word_summary), print the top 3 words or letters.

import operator

def sort_attr (item):
    #key, value
    return item[1]

def hist2(string):
    tally = {}
    par = string.lower()
    keyList = par.split()
    for word in keyList:
        if word in tally:
            tally[word] += 1
        else:
            tally[word] = 1
    #print(tally)

    tally1 = sorted(tally.items(), key = sort_attr) #the (1) tells the itemgetter that we want to sort by the value. If 0 were entedered it would sort by the key names.
    #print(tally1)
    x = tally1[-3:]
    print(x)
   # items = list(tally.items())
   # print(items)

hist2("To be or not to be be to be or or or or or.")
