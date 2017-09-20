class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greets =[]
        self.greeting_count = 0

    def __str__(self):
        return '{}'.format(self.name)

    def greet(self, other_person):
        #print('Hello {}, I am {}!'.format(other_person, self.name))
        self.greeting_count += 1
        if other_person not in self.greets:
            self.greets.append(other_person)
            self.num_unique_people_greeted()
        #print(self.greeting_count)

    def num_unique_people_greeted(self):
        print("{0} has met {1} people".format(self.name, len(self.greets)))

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

#sonny.num_unique_people_greeted()
sonny.greet(jordan)
sonny.greet(josh)
sonny.greet(josh)
