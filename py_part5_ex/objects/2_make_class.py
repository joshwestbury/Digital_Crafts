class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0

    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person, self.name))
        self.greeting_count += 1
        print(self.greeting_count)

    def print_contact_info(self):
        print("{}'s email: {}, {}'s phone number: {}".format(sonny.name, sonny.email, sonny.name, sonny.phone ))
        self.greeting_counter += 1
        print(self.greeting_counter)

    def add_friend(self, friend):
        self.friends.append(friend)
        #print(len(self.friends))

    def num_friends(self):
        print(len(self.friends))

sonny = Person("Sonny", "Sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "Jordan@aol.com", "495-586-3456")
josh = Person("Josh", "Josh@gmail.com", "289-370-4839")
# sonny.print_contact_info()

# jordan.add_friend(sonny)
# jordan.num_friends()

# sonny.greet(jordan.name)
jordan.greet(sonny.name)
jordan.greet(sonny.name)

# sonny.friends.append(jordan)
# print(len(sonny.friends))

# class Vehicle:
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
#
#     def print_info(self):
#         print("{}, {}, {}".format(car.make, car.model, car.year))
#
# car = Vehicle("Toyota", "Highlander", "2009")
# car.print_info()
