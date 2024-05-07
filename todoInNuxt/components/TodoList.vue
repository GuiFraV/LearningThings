<template>
  <div>
    <h1>My Todo</h1>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" placeholder="Write a todo">
        <button type="submit"> Add</button>
    </form>

    <ul>
        <TodoItem 
          v-for="todoItem in todo" 
          :key="todoItem" 
          :todoItem="todoItem" 
          :removeTodo="removeTodo"
        />
    </ul> 
  </div>
</template>

<script setup>
    const newTodo = ref("");
    const todo = ref([]);
    
    const addTodo = () => {
        if(newTodo.value !== "" && !todo.value.includes(newTodo.value)){
            todo.value.push(newTodo.value);
            newTodo.value = "";
        }
    }

    const removeTodo = (todoItem) => {
        const index = todo.value.indexOf(todoItem);
        if (index !== -1) {
            todo.value.splice(index, 1);
        }
    }

</script>