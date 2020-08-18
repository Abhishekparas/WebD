// EVENT BUBBLING   
// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',function(){
//     console.log('col');
// });

// EVENT DELEGATION

document.body.addEventListener('click',deleteItem);

const delItem = document.querySelector('.delete-item');     

delItem.addEventListener('click',deleteItem);                   
                                                                // the output will only be logged to the console if we click the first cross symbol, therefore we have to use event delegation
function deleteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        e.target.parentElement.parentElement.remove();
    }                                    
}
// event delegation is nothing but putting eventListener on the parent of what we are looking for and then putting a consititon to defien the target