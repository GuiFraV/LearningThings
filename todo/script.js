let todoList = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const todoText = input.value.trim();
  
  if (todoText !== '') {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false
    };
    
    todoList.push(todo);
    input.value = '';
    renderTodoList();
  }
}

function toggleTodo(id) {
  todoList = todoList.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
  
  renderTodoList();
}
function removeTodo(id) {
  todoList = todoList.filter(todo => todo.id !== id);
  renderTodoList();
}

function renderTodoList() {
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  
  todoList.forEach(todo => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onchange="toggleTodo(${todo.id})" ${todo.completed ? 'checked' : ''}>
      <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
      <button type="button" onclick="removeTodo(${todo.id})">Close</button>
    `;
    list.appendChild(li);
  });
}