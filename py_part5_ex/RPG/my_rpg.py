# Make a Hero class to store the health and power of the hero, and make a Goblin class to store the health and power of the goblin. Use a hero object in place of the variables hero_health and hero_power and use a goblin object in place of the variables goblin_health and goblin_power all through out the app.
import math

infinite = math.inf

class Character:
    def __init__(self, name):
        self.name = name



    def __str__(self):
        return '{}'.format(self.name)

    def attack(self, enemy):
        enemy.health -= self.power
        print("{} did {} damage to {}.".format(self.name, self.power, enemy.name))

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

    # def print_status(self):
    #     print("You have {} health and {} power.".format(self.health, self.power))

    # def attack(self, goblin):
    #     felix.goblin_health -= jack.hero_power
    #     print("You did {} damage to the goblin.".format(self.hero_power))

    # def alive(self):
    #     if jack.health > 0:
    #         return True

    # def print_status(self):
    #     print("You have {} health and {} power.".format(self.health, self.power))

class Goblin (Character):
    def __init__(self, name):
        self.name = name
        self.health = 6
        self.power = 2

    # def attack(self, hero):
    #     felix.attack(jack)

    # def alive(self):
    #     if felix.health > 0:
    #         return True

class Zombie (Character):
    def __init__(self, name):
        self.name = name
        self.health = math.inf
        self.power = math.inf


jack = Hero("Jack")
felix = Goblin("Felix")
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
