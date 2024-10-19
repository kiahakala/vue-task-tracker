<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskItem
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      default: 'Tasks',
    },
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>
