# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.


lst1= []          #initialize an empty list
for i in range(100, 1000):          # a nested loop is created since we want to multiply the values of two lists
    for j in range(100, 1000):
        x = j * i    #each value of the inner loop is multipled by the value of  outerloop (100 * 100, 101 * 100, 102 * 100)
        lst1.append(x)          #the ouput of the loop multiplication is appended to the variable lst1

#at this stage we have a long list called lst1 that contains the product of  each combination of values between 100-999

# Now we need to convert each item in the list lst1 into a string and append that list of string to a new list.

lst2 = [] # initialize new list
for k in lst1: # this loop goes through each value and converts each value to a string
    l = str(k)
    lst2.append(l) # this appends each new string value to a new list called lst2
#print(len(lst2)) # this prints the length of the lst2

#now that we have a list of strings, each of which is the product of the numbers 100-999, we need to find all of the palendroms in the list.

pal = [] #initial
for z in lst2: # list loop goes through lst2 and test each string z to see if the string == is the same string in reverse ([::-1])
    if z  == z [::-1]:
        pal.append(z) #if the condition is met, the palendrom string is put into a new list called pal.

#now we need convert the list of string palendroms to a list of numbers palendroms

final = []
for c in pal: #this loop goes through each string palendrom in list pal and converts it to a number.
    b = int(c)
    final.append(b) #this list appends the number palendroms to a new list called final.

print(max(final)) # this goes through the list final and prints out the maximum number in the list.
