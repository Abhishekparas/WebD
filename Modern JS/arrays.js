const arr = [43,56,33,23,44,36,5];
const arx = new Array(22,45,67,73,89);

const fruits = ['Apple', 'Banana','Mango','Peach','Papaya'];

const mixed = [34,'Hello', true , null ,undefined,new Date(),{a:1, b:1} ];

let val;

val = arr.length;

val = Array.isArray(arr);

val = arr.indexOf(23);

arr.push(369);
arr.unshift(259);

arr.pop();
arr.shift();

arr.splice(1,3);

arr.reverse();

val = arr.concat(arx);

val = fruits.sort();

val = arr.sort();

val = arr.sort(function(x,y){
    return x-y;
})

val = arr.sort(function(x,y){
    return y-x;
})

function under50(num){         
    return num < 50;
}

val = arr.find(under50);         //gives the first number in the array which id less than 50

console.log(arr);
console.log(val);

