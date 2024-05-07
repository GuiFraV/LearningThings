<template>
  <li>
    {{todoItem}}
    <button @click="remove">Delete</button>
  </li>
</template>

<script setup>
  const props = defineProps({
    todoItem: String,
    removeTodo: Function
  });


  const remove = () => {
    props.removeTodo(props.todoItem);
  };
</script>