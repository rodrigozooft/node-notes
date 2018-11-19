var square = (side) => side * side;

console.log(square(2));
console.log(square(9));

// more examples.
// the variable this.name is undefined. We have to define object literals

var user = {
    name: 'Rodrigo',
    sayHi: () => console.log(`Hello there I'm ${this.name}`),
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hello there I'm ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt(1,2,3);