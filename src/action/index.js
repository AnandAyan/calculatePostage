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
 
export const serviceType = payload => ({
  type: 'SERVICE_TYPE',
  payload
})

export const articleDetailSum = payload => ({
  type: 'ARTICLE_DETAIL',
  payload
})
 