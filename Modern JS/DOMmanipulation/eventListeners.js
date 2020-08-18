// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('hello world');
//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e){
    let val;
    val = e;
    e.preventDefault();

    // event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    
    // e.target.innerText = 'hello';

    // event type;
    val = e.type;
    val = e.timeStamp;

    // coord events relative to window
    val = e.clientX;
    val = e.clientY;

    // coord events relative to element
    val = e.offsetX;
    val = e.offsetY;

    console.log(val);
}