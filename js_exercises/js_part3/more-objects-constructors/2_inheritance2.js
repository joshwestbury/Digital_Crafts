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

// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

class Mom {
    constructor (firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
    showInfo()  {
        console.log(this.firstName, this.lastName, this.eyeColor, this.hairColor)
    }
}

class Daughter extends Mom {
}

var alice = new Mom('Alice', 'Wong', 'brown', 'black')
var sally = new Daughter('Sally', 'Wong', 'hazel', 'brown')

alice.showInfo()
sally.showInfo()
