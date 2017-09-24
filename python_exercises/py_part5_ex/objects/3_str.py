class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0

    def __str__(self):
        return 'Person: {} {} {}'.format(self.name, self.email, self.phone)

sonny = Person("Sonny", "Sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "Jordan@aol.com", "495-586-3456")
josh = Person("Josh", "Josh@gmail.com", "289-370-4839")

print(josh)
