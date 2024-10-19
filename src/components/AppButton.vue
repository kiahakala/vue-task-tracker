<template>
  <button class="btn" :style="{ backgroundColor: color }">{{ label }}</button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      default: 'Add Task',
    },
    color: {
      type: String,
      default: 'green',
    },
  },
}
</script>

<style scoped>
.btn {
  display: inline-block;
  background: #ad1010;
  color: #eee;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}
</style>
