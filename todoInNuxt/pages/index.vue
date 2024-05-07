<script setup>

    const todo = ref([]);
    const newTodo = ref("");
    
    const addTodo = () => {
        if(newTodo.value !== ""){
            todo.value.push(newTodo.value)
            newTodo.value = "";
        }
    }

    const removeTodo = (index) => {
        todo.value.splice(index, 1);
    }
</script>



<template>
  <div>
   <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>

    <h1>My Todo</h1>
    <form @submit.prevent="addTodo">
        <input type="text" v-model="newTodo" placeholder="Write a todo">
        <button type="submit"> Add</button>
    </form>

    <ul>
        <li v-for="(todo, index) in todo" :key="index">
            {{todo}}
            <button @click="removeTodo(index)">Delete</button>
        </li>
    </ul> 


  </div>
</template>