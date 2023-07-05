import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// action (object) va action creators () => { return action}
// thunk action (function) va thunk action ctrators () => { return thunk action}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos')
  const data = await res.json()
  return data.todos
})

export const addNewTodo = createAsyncThunk('todos/add', async (newTodo) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo)
  })
  const data = await res.json()
  return data.todos
})

export const updateTodo = createAsyncThunk('todos/update', async (updatedTodo) => {
  const res = await fetch('/api/todo/update', {
    method: 'POST',
    body: JSON.stringify(updatedTodo)
  })
  const data = await res.json()
  console.log('update data ', data)
  return data.todos
})

const todosSlice = createSlice({
  name: 'todoList',
  initialState: {
    status: 'idle', // idle: chua thuc hien goi request nao
    todos: []
  }, // => {status: '', todos: []}
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if(currentTodo) currentTodo.isCompleted = !currentTodo.isCompleted
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = 'loading';
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = 'idle';
      state.todos = action.payload
    })
    .addCase(addNewTodo.fulfilled, (state, action) => {
      state.status = 'idle';
      state.todos.push(action.payload)
    })
    .addCase(updateTodo.fulfilled, (state, action) => {
      console.log('action ', action.payload)
      let currentItem = state.todos.find(todo => todo.id === action.payload)
      currentItem = action.payload
    })
  }
})

export default todosSlice

