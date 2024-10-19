<template>
  <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <span @click="$emit('delete-task', task.id)">&#10060;</span>
    </h3>
    <p>{{ task.date }}</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  // methods: {
  //   onDelete(id: string) {
  //     this.$emit('delete-task', id)
  //   },
  // },
}
</script>

<style scoped>
.task {
  display: flex;
  flex-direction: column;
  background: var(--color-background-soft);
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  border-radius: 8px;
}
.task:hover {
  transform: scale(1.02);
}
.task h3 {
  display: flex;
  justify-content: space-between;
}
span {
  cursor: pointer;
}
.task.reminder {
  border-left: 0.4rem solid forestgreen;
}
</style>
