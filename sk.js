var Mouse = require('./mouse');
var Cat   = require('./cat');

console.log('what do you do!');


var micky = new Mouse('black');
var jerry = new Mouse('orange');

var tom = new Cat();

tom.eat(micky);
tom.eat(jerry);

console.log(tom);
// console.log(micky);
// console.log(jerry);
