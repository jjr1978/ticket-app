let nextTodoId = 5


export const addTodo = ticket => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    ticket:ticket,

  })