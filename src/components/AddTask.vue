<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="date"
        name="date"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>
    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      text: '',
      date: '',
      reminder: false,
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.text) {
        alert('Please add a task')
        return
      }
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        date: this.date,
        reminder: this.reminder,
      }

      this.$emit('add-task', newTask)

      this.text = ''
      this.date = ''
      this.reminder = false
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 2.4rem;
}

.form-control {
  margin: 1.2rem 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 2.4rem;
  padding: 0.2rem 0.4rem;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-control-check input {
  height: 1.2rem;
  width: 2rem;
}
</style>
