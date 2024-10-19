<template>
  <div class="container">
    <AppHeader title="Task Tracker" />
    <TaskList
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
    toggleReminder(id) {
      // const task = this.tasks.find(task => task.id === id)
      // task.reminder = !task.reminder
      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      )
    },
  },
  created() {
    this.tasks = [
      {
        id: '1',
        text: 'Task 1',
        date: 'October 19th at 12:00',
        reminder: true,
      },
      {
        id: '2',
        text: 'Task 2',
        date: 'October 20th at 13:00',
        reminder: true,
      },
      {
        id: '3',
        text: 'Task 3',
        date: 'October 21th at 14:00',
        reminder: false,
      },
    ]
  },
}
</script>

<style>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #eee;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

@media (min-width: 1024px) {
}
</style>
