<template>
  <div :class="['todo-item', todoProps.completed ? 'is-completed' : '']">
    <p>
      <input type="checkbox" :checked="todoProps.completed" @change="markAsCompleted">{{ todoProps.title }}
      <button class="btn-delete" @click="markAsDeleted">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: [
    'todoProps'
  ],
  setup(props, context) {
    const markAsCompleted = () => {
      context.emit('item-completed', props.todoProps.id);
    }

    const markAsDeleted = () => {
      context.emit('item-deleted', props.todoProps.id)
    }

    return {
      markAsCompleted,
      markAsDeleted
    }
  }
}
</script>

<style scoped>
  .todo-item {
    max-width: 500px;
    width: 100%;
  }

  .is-completed {
    text-decoration: line-through !important;
  }

  p {
    padding: 10px;
  }

  p input {
    margin-right: 10px;
  }

  .btn-delete {
    background-color: #e63946;
    color: #fff;
    padding: 2px 5px;
    border: none;
    outline: none;
    cursor: pointer;
    float: right;
  }

  .btn-delete:hover {
    background-color: #e29578;
  }
</style>