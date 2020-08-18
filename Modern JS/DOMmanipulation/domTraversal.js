let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;                  //this will result into any one of the following mentioned below:

// 1- element
// 2- attribute(deprecated)
// 3- textnode
// 8- comment
// 9- document itself
// 10- doctype

// get children element nodes
val = list.children; 
val = list.children[1];

// children of children
list.children[1].textContent = 'abhi';

list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// count child elements
val = list.childElementCount;

// get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// get pevious sibling

val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);