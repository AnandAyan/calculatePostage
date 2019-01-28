let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const calculatPost = payload => ({
  type: 'CALCULATEPOST',
  payload
})

export const toggleTodo = payload => ({
  type: 'TOGGLE_TODO',
  payload
})

 