const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';

// form.addEventListener('submit',runEvent);

// taskInput.addEventListener('keydown',runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress',runEvent);
// taskInput.addEventListener('focus',runEvent);
// taskInput.addEventListener('blur',runEvent);
// taskInput.addEventListener('cut',runEvent);
// taskInput.addEventListener('paste',runEvent);
// taskInput.addEventListener('input',runEvent);
select.addEventListener('change',runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    console.log(e.target.value);
    heading.textContent = e.target.value;

    // to get input value written 
    // console.log(taskInput.value);
    //e.preventDefault();
}
