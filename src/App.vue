<template>
  <div class="container">
    <AppHeader title="Task Tracker" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

@media (min-width: 1024px) {
}
</style>
