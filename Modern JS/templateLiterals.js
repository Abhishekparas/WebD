const name = 'Abhishek';
const age = 19;
const job = 'Software Developer';
const city = 'Munich';

let html;

function hello(){
    return 'hello';
}

//es5
html =  '<ul>' + 
        '<li>Name: ' + name + '</li>' + 
        '<li>Age: ' + age + '</li>' + 
        '<li>Job: ' + job + '</li>' + 
        '<li>City: ' + city + '</li>' + 
        '</ul>';

//es6
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>City: ${city} </li>
        <li>${5+4}</li>
        <li>${hello()} </li>
        <li>${age > 30 ?'over 30' : 'under 30'}  </li>
    </ul>
`;
      

document.body.innerHTML = html;
 