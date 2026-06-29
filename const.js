//const is a type of variable that cannot be reassigned. It is used to declare variables that are meant to remain constant throughout the program. Once a value is assigned to a const variable, it cannot be changed or reassigned. This is useful for values that should not be modified, such as configuration settings or fixed values.

//lets calculate the circumference of a circle using const and accepting user input

const PI = 3.14;
let radius = prompt("Enter the radius of the circle:");
radius = Number(radius);
let circumference = 2 * PI * radius;
console.log(`The circumference of the circle with radius ${radius} is ${circumference}.`);