const firstName = 'Harry';
const lastName = 'Potter';
const age = 25;
const str = "Hello there my name is abhishek";
const tags = "web development,programming,machine learning";

let val;

val = firstName + lastName;

val = firstName + ' ' + lastName;

val = 'Bilbo ';
val += 'Baggins';

val = 'Hello! My name is ' + firstName + ' and my age is ' + age;

val = "That's awesome ,i can't wait";

//Escaping
val = ' That\'s awesome, i can\'t wait ';

val = firstName.length;

val = firstName.concat(' ',lastName);

val = firstName.toUpperCase();

val = lastName.toLowerCase();

val = firstName.indexOf('r');

val = firstName.lastIndexOf('r');

val = firstName.charAt('3');

val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0,3);

val = firstName.slice(0,3);

val = firstName.slice(-3);

val = str.split(" ");

val = tags.split(',');

val = str.replace('abhishek','parashar');

val = str.includes('abhishek');




console.log(val);
