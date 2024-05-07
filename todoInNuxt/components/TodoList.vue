<template>
  <div>
    <h1>My Todo</h1>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" placeholder="Write a todo">
        <button type="submit"> Add</button>
    </form>

    <ul>
        <slot></slot>
    </ul> 
  </div>
</template>

<script setup>
    const newTodo = ref("");
    
    const addTodo = () => {
        if(newTodo.value !== "" && !props.todo.includes(newTodo.value)){
            props.todo.push(newTodo.value);
            newTodo.value = "";
        }
    }

    const props = defineProps({
        todo: Array,
        removeTodo: Function
    });
</script>