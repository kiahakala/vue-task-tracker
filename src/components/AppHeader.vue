<template>
  <header>
    <h1>{{ title }}</h1>
    <AppButton
      @toggle-add-task="$emit('toggle-add-task')"
      :label="buttonConfig.text"
      :color="buttonConfig.color"
    />
  </header>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: 'Task Tracker',
    },
    showAddTask: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonConfig() {
      return this.showAddTask
        ? { text: 'Close', color: 'red' }
        : { text: 'Add Task', color: 'forestgreen' }
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
