<template>
  <div>
    <h1>My Todo</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Write a todo">
      <button type="submit">Add</button>
    </form>
    <ul>
      <TodoItem v-for="todoItem in todo" :key="todoItem" :todoItem="todoItem" @removeTodo="removeTodo" />
    </ul> 
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref("");
const todo = ref([]);

const addTodo = () => {
  if (newTodo.value.trim() && !todo.value.includes(newTodo.value)) {
    todo.value.push(newTodo.value);
    newTodo.value = "";
  }
};

const removeTodo = (todoItem) => {
  todo.value = todo.value.filter(item => item !== todoItem);
};
</script>
