// Given the following objects:
//
// var mom = {
//   firstName: 'Alice',
//   lastName: 'Wong',
//   eyeColor: 'brown',
//   hairColor: 'black'
// };
// var daughter = {
//   firstName: 'Ilene',
//   hairColor: 'brown'
// };
// One
//
// Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

class Mom {
    constructor (firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
}

var alice = new Mom('Alice', 'Wong', 'brown', 'black')
console.log(alice.firstName)

class Daughter extends Mom {
}

sally = new Daughter('Sally', 'Wong', 'hazel', 'brown')

console.log(sally.firstName)
