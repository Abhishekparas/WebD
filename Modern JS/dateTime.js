const today = new Date();

let birthday = new Date('9-10-1981 11:25:00');

birthday = new Date('September 10 1981');

birthday = new Date('9/10/1981');

let val;

val = today.getMonth();

val = today.getDate();

val = today.getDay();

val = today.getFullYear();

val = today.getHours();

val = today.getMinutes();

val = today.getSeconds();

val = today.getMilliseconds();

val = today.getTime();

birthday.setDate(14);
birthday.setHours(5);
birthday.setMinutes(23);
birthday.setSeconds(45);
birthday.setFullYear(1947);
birthday.setMonth(3);

console.log(birthday);
