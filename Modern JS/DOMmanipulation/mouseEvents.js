const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// event handler
// clearBtn.addEventListener('click',runEvent);
// clearBtn.addEventListener('dblclick',runEvent);
// clearBtn.addEventListener('mousedown',runEvent);
// clearBtn.addEventListener('mouseup',runEvent);

card.addEventListener('mouseenter',runEvent);
card.addEventListener('mouseleave',runEvent);
card.addEventListener('mouseover',runEvent);
card.addEventListener('mouseout',runEvent);


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MOUSEX: ${e.offsetX}, MOUSEY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    e.preventDefault();
}