<template>
  <div>
    <form @submit.prevent="markAsNewItem">
      <input type="text" class="input-add" placeholder="Item title ..." v-model="title">
      <button type="submit" class="btn-add">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AddTodoItem',
  setup(props, context) {
    const title = ref('');

    const markAsNewItem = () => {
      const newItem = {
        title: title.value,
        completed: false
      }

      if (newItem.title.trim() != '') {
        context.emit('item-added', newItem);
      }
      title.value = '';
    }

    return {
      title,
      markAsNewItem
    }
  }
}
</script>

<style scoped>
  div {
    width: 100%;
    max-width: 500px;
  }

  div > form {
    margin: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  div > form > input {
    width: 430px;
    outline: none;
    padding: 3px 5px;
  }

  div > form > button {
    background-color: #006d77;
    color: #fff;
    padding: 2px 5px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0;
    width: 50px;
  }
</style>