import { createSlice } from "@reduxjs/toolkit"

export default createSlice({
  name: 'search',
  initialState: {
    search: '',
    status: 'All',
    priorities: []
  },
  reducers: {
    text: (state, action) => {
      state.search = action.payload
    },
    status: (state, action) => {
      state.status = action.payload
    },
    priority: (state, action) => {
      state.priorities = action.payload
    },
  },
})