let todoList = [];


const addTodo = () => {

    const input = document.getElementById("todoInput");
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