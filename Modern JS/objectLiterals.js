const person = {
    firstName : 'steve',
    lastName : 'smith',
    age: 33,
    email : 'steve@gmail.com',
    hobbies : ['sports', 'music',],
    address : {
        city : 'miami',
        state : 'FL'
    },

    getBirthYear : function(){
        return 2020 - this.age;
    }

}

let val;
val = person.hobbies;

val = person.address.city;

val = person.getBirthYear();

const people = [
    {name : 'John', age: 35},
    {name : 'Mike', age: 33},
    {name : 'Nancy', age: 54}
]

people.forEach(element => {
    console.log(element.name);
    
});

console.log(val);
