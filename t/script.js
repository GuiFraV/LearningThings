let todoList = [];


const addTodo = () => {

    const input = document.getElementById('todoInput')
    const text = input.value.trim();


    if(text !== ""){

        const todo = {
            id: Date.now(),
            text: text,
            completed: false,
        }

        todoList.push(todo);
        input.value = "";

        renderTodoList();
    }

}



const renderTodoList = () => {

    const ul = document.getElementById('todoUl');
    
    ul.innerHTML = "";

    todoList.forEach( todo =>  {

        const li = document.createElement('li');

        li.innerHTML = `
        <input type="checkbox" onchange="toggleTodo(${todo.id})" ${todo.completed ? 'checked' : ""}>
        <span class="${todo.completed ? 'completed' : "" }">${todo.text} </span>
        <button type="button" onclick="removeTodo(${todo.id})">Close</button>
        `;

        ul.appendChild(li);

    })


}