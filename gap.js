const stuff = require('./youtube.js');

const star = 4.321;

console.log(stuff.counter(['Shaun', 'Crystal', 'Ryu', 'Xiao']));

console.log(stuff.adder(54, 38));
console.log(Math.ceil(stuff.pi + star));
console.log(stuff.adder(stuff.pi, star));