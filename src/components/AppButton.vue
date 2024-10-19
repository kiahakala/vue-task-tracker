<template>
  <button @click="onClick()" class="btn" :style="{ backgroundColor: color }">
    {{ label }}
  </button>
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
  methods: {
    onClick() {
      console.log('click')
    },
  },
}
</script>
