# Make a Hero class to store the health and power of the hero, and make a Goblin class to store the health and power of the goblin. Use a hero object in place of the variables hero_health and hero_power and use a goblin object in place of the variables goblin_health and goblin_power all through out the app.


class Character:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return '{}'.format(self.name)

    def attack(self, enemy):
        enemy.health -= self.power
        print("{} did {} damage to {}.".format(self.name, self.power, enemy.name))

    def attack_zombie(self, enemy):
        print("Lester is a Zombie. He cannot die!")

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

class Goblin (Character):
    def __init__(self, name):
        self.name = name
        self.health = 6
        self.power = 2

class Zombie (Character):
    def __init__(self, name):
        self.name = name
        self.health = 1
        self.power = 1

hero_1 = Hero("Jack")
goblin_1 = Goblin("Felix")
zombie_1 = Zombie("Lester")

while zombie_1.alive() and hero_1.alive():
    hero_1.print_status()
    zombie_1.print_status()
    #print("The goblin has {} health and {} power.".format(felix.health, felix.power))
    print()
    raw_input = input("What do you want to do? \n\t 1. fight the Zombie \n\t 2. do nothing \n\t 3. flee \n\t")
    if raw_input == "1":
        hero_1.attack_zombie(zombie_1)
        break
        if zombie_1.health <= 0:
            print("The Zombie is dead.")
    elif raw_input == "2":
        pass
    elif raw_input == "3":
        print("Goodbye.")
        break
    else:
        print("Invalid input {}".format(raw_input))
