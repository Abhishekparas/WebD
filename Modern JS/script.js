let val;

val = String(555);
val = String(true);

val = String(new Date());

val = String([1,2,3,4,5]);

val = (5).toString();
val = (true).toString();

val = Number('5');

val = Number(true);

val = Number(false);

val = Number(null);

val = Number('hello');
val = Number([1,2,3]);

val = parseInt('100');
val = parseFloat('100.30');


console.log(val);
console.log(typeof val);
//console.log(val.length);

console.log(val.toFixed());

const val1 = String(5);
const val2 = String(6);

const sum = val1+val2;
console.log(sum);
console.log(typeof sum);



