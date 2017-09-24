import math

infinite = math.inf

class Character:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return '{}'.format(self.name)

    # #def attack(self, enemy):
    #     enemy.health -= self.power
    #     print("{} did {} damage to {}.".format(self.name, self.power, enemy.name))

    def alive(self):
        if self.health > 0:
            return True

    def print_status(self):
        print("{0} has {1} health and {2} power.".format(self.name, self.health, self.power))

class Hero (Character):
    def __init__(self, name):
        self.name = name
        self.health = 10
        self.power = 5

class Enemy:
    def __init__ (self, name):
        self.name = name

    def attack(self, enemy):
        enemy.health -= self.power
        print("{} did {} damage to {}.".format(self.name, self.power, enemy.name))

class Goblin (Enemy):
    def __init__(self, name):
        self.name = name
        self.health = 6
        self.power = 2

class Zombie (Enemy):
    def __init__(self, name):
        self.name = name
        self.health = math.inf
        self.power = math.inf

jack = Hero("Jack")
#felix = Goblin("Felix")
#lester = Zombie("Lester")

enemy = input("Your name is Jack and you're the hero of this game. Who do you want to fight? \n\t 1. A Gobline named Felix. \n\t  Or 2. A Zombie named Lester? Enter #1 or #2")
if enemy == 1:
    felix = Goblin("Felix")
elif enemy == 2:
    lester = Zombie("Lester")

while lester.alive() and jack.alive():
    jack.print_status()
    lester.print_status()
    #print("The goblin has {} health and {} power.".format(felix.health, felix.power))
    print()
    raw_input = input("What do you want to do? \n\t 1. fight the Zombie \n\t 2. do nothing \n\t 3. flee \n\t")
    if raw_input == "1":
        jack.attack(lester)
        if lester.health <= 0:
            print("The Zombie is dead.")
    elif raw_input == "2":
        pass
    elif raw_input == "3":
        print("Goodbye.")
        break
    else:
        print("Invalid input {}".format(raw_input))
