<template>
  <div>
   <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component.
    </AppAlert>

    <TodoList :todo="todo" :removeTodo="removeTodo">
        <template v-slot:default>
            <li v-for="todoItem in todo" :key="todoItem">
                {{todoItem}}
                <button @click="removeTodo(todoItem)">Delete</button>
            </li>
        </template>
    </TodoList>
  </div>
</template>

<script setup>
    const todo = ref([]);
    
    const removeTodo = (todoItem) => {
        const index = todo.value.indexOf(todoItem);
        if (index !== -1) {
            todo.value.splice(index, 1);
        }
    }
</script>