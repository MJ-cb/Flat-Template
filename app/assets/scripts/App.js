var $ = require('Jquery');
const Person = require('./modules/Person');

let John = new Person("John", "blue");
let jane = new Person("Jane", "pink");
alert("test 123");
John.greet();
jane.greet();