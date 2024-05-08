<template>
  <li>
    {{ todoItem }}
    <button @click="$emit('removeTodo', todoItem)">Delete</button>
  </li>
</template>

<script setup>
defineProps({
  todoItem: String
});
</script>
