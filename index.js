const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if (todo.length !== 0) {
        generateTemplate(todo);
        addForm.reset();
    }else{
        alert('please input task');
    }
});

const generateTemplate = (todo) => {
    const html = `<li class="list-group-item">
    <span>${todo}</span>
    <i class="fa fa-trash delete"></i>
    </li>`;
    list.innerHTML += html;
}

list.addEventListener('click',(e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})