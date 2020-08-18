const id = '100';

// if(id === 100){
// 	console.log("Correct");
// }
// else{
// 	console.log("Not Correct");
// }

// if(typeof id !== 'undefined'){
// 	console.log(`The ID is ${id}`);
// }
// else{
// 	console.log('NO ID');
	
// }

const name = 'Walter';
const age = '20';

if(age > 0 && age < 12){
	console.log(`${name} is a child`);
}

else if(age >= 13 && age <= 19){
	console.log(`${name} is a teenager`);
}
else{
	console.log(`${name} is an adult`);
}

console.log( id== 100 ? 'CORRECT' : 'INCORRECT');


