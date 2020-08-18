function basic(firstName= 'Walter',lastname = 'White'){
    // if(typeof firstName === 'undefined'){
    //     firstName = 'Jesse';
    // }
    // if(typeof lastName === 'undefined'){
    //     lastname = 'Pinkman';
    // }
    return 'Hello ' + firstName + ' ' + lastname;
}
console.log(basic('Jesse','Pinkman'));

const square = function(x = 3){
    return x*x;
}
console.log(square(9));

(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('Hello ' + name);
})('Mike');

const todo = {
    add: function(){
        console.log('Add ToDo...');
    },

    edit: function(id){
        console.log(`Edit ToDo..${id}`);
    }
}

todo.delete = function(){
    console.log('Delete ToDo...');
}

todo.add();
todo.edit(39);
todo.delete();

for(let i=0 ;i<10; i++){
    if( i === 2){
        console.log('2 is my favourite number');
        continue;
    }
    console.log('Number ' + i);   
}

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'}
]

const ids = users.map(function(user){
    return user.name;
});

console.log(ids);

const user = {
    firstName: 'Jesse',
    lastName: 'James',
    age: '40'
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}






