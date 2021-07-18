<template>
  <div class="todos">
    <AddTodoItem @item-added="addItem"></AddTodoItem>
    <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" @item-completed="completeItem" @item-deleted="deleteItem">
      {{ todo + 'test' }}
    </TodoItem>
  </div>
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';
import AddTodoItem from './AddTodoItem.vue';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default {
  name: 'Todos',
  components: {
    TodoItem,
    AddTodoItem
  },
  setup() {
    const todos = ref([]);
    const getAllTodoItem = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
        todos.value = res.data;
      } catch (error) {
        console.log(error);
      }
    }
    getAllTodoItem();

    const completeItem = (id) => {
      todos.value = todos.value.map((todo) => {
        todo.id == id ? todo.completed = !todo.completed : undefined;

        return todo;
      });
    }

    const deleteItem = async (id) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        todos.value = todos.value.filter(todo => todo.id != id);
      } catch (error) {
        console.log(error);
      }
    }

    const addItem = async (newItem) => {
      try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', newItem);
        todos.value.push(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    return {
      todos,
      completeItem,
      deleteItem,
      addItem
    }
  }
}
</script>

<style scoped>
  .todos {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>