console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

taskTitle.style.background = '#333';

taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';

// taskTitle.style.display = 'none';

taskTitle.textContent = 'Task List';

taskTitle.innerText = 'My Tasks';

taskTitle.innerHTML = '<span style = "color:red">Task List</span>';


console.log(document.querySelector('#task-title'));

console.log(document.querySelector('.card-title'));

console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'yellow';

document.querySelector('li:nth-child(3)').style.color = 'purple';

document.querySelector('li:nth-child(4)').textContent = 'helloWorld';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';









