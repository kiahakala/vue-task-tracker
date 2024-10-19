<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
  <AppButton label="Add Task" color="green" />
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'Task Tracker',
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
