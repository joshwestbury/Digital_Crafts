# Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to make the following character replacements (treat all input characters as uppercase):
#
# A => 4
# E => 3
# G => 6
# I => 1
# O => 0
# S => 5
# T => 7
# Example: Leet => l337

# def getLetter(ch):
#     if ch == "A":
#         return 4
#     if ch == "E":
#         return 3
#     if ch == "G":
#         return 6
#     if ch == "O":
#         return 0
#     if ch == "S":
#         return 5
#     if ch == "T":
#         return 7
#
# par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.".upper()
# newPar = " "
#
# for i in par:
#     newWord = getLetter(par[])
#     print(newWord)

# replacements = ( ('A','4'), ('E','3'), ('G','6'), ('I','1'), ('O', '0'), ('S', '5'), ('T', '7'))
# my_par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.".upper()
# new_string = my_par
# for old, new in replacements:
#     new_string = new_string.replace(old, new)
#
# print (new_string )

replacements = ( ('A','4'), ('E','3'), ('G','6'), ('I','1'), ('O', '0'), ('S', '5'), ('T', '7'))
my_par = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.".upper()
for i, j in replacements:
    my_par = my_par.replace(i, j)

print (my_par)
