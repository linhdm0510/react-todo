import { createSelector } from "@reduxjs/toolkit"

export const searchTextSelector = (state) => state.filters.search
export const searchStatusSlector = (state) => state.filters.status
export const searchPrioritySlector = (state) => state.filters.priorities

export const todoListSelector = (state) => state.todoList.todos

export const listFilter = createSelector(
  todoListSelector,
  searchStatusSlector,
  searchPrioritySlector,
  searchTextSelector,
  (todoList, status, priorities, text) => {
    return todoList.filter(item => {
      if(status === 'All') {
        if(priorities.length) return item.name.includes(text) && priorities.includes(item.priority)
        else return item.name.includes(text)
      } 

      return item.name.includes(text) &&
      (status === 'Completed' ? item.isCompleted : !item.isCompleted) &&
      (priorities.length ? priorities.includes(item.priority) : true)
    })
  }
)