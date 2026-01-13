const inputTask = document.querySelector('#input-task');
const todoList = document.querySelector('#list-type');

function addTask() {
    if (inputTask.value === '') {
        alert('Input is empty')
    }else{
       let list = document.createElement('li');
       list.innerHTML = inputTask.value;
       todoList.appendChild(list);
       let span = document.createElement('span')
       span.innerHTML = '\u00d7';
       list.appendChild(span);
    }
    inputTask.value = '';
    storeData();
}

todoList.addEventListener('click', function(c){
    if(c.target.tagName === 'LI') {
        c.target.classList.toggle('checked');
        storeData();
    }
    else if(c.target.tagName === 'SPAN') {
        c.target.parentElement.remove()
        storeData();
    }
}, false);

function storeData(){
    localStorage.setItem('data', todoList.innerHTML);
}

function showBackUpTask(){
    todoList.innerHTML = localStorage.getItem('data');
}
showBackUpTask();