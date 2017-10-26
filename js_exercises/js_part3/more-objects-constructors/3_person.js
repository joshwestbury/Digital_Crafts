// Person
//
// Given this Person type:
//
// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }
//
// Person.prototype.addFriend = function(friend) {
//   this.friends.push(friend);
// };
//
// Person.prototype.createGreeting = function(other) {
//   return 'Yo ' + other.name + '! from ' + this.name + '.';
// };
//
// Person.prototype.greet = function(other) {
//   console.log(this.createGreeting(other));
// };

// Rewrite the above type as a class.

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriends (friend) {
        this.friends.push(friend);
    }
    createGreeting(other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    greet(other) {
         return this.createGreeting(other);
    }
}

var josh = new Person('josh');
var bri = new Person('bri');

console.log(josh.createGreeting(bri))
console.log(josh.greet(bri))
