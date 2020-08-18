// replace element

// first create an element
const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get old heading
const oldHeading = document.getElementById('task-title');

// get parent
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHeading,oldHeading);

// REMOVE ELEMENT   
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES

const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;
// classes
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');
val = link;

// attributes
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

