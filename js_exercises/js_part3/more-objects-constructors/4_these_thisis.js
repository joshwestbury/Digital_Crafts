// Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriends (friend) {
        this.friends.push(friend);
    }
    createGreeting(other) {
        console.log('Yo ' + other.name + '! from ' + this.name + '.');
    }
    lazyGreeting(other) {
        setTimeout(function() {this.createGreeting(other);}, 5000);
    }
}

var josh = new Person('josh')
var john = new Person('john')

josh.lazyGreeting(john)



//
//
//
//
//
// ** setTimeout demo**
//
//
// var timeoutID;
//
// function delayedAlert() {
//   timeoutID = setTimeout(slowAlert, 5000);
// }
//
// function slowAlert() {
//   console.log('That was really slow!');
// }
//
// delayedAlert()
