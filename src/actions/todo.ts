type AddTodoAction = {
  type: 'ADD_TODO'
  payload: string
}

type ToggleTodoAction = {
  type: 'TOGGLE_TODO'
  payload: number
}

type ClearTodosAction = {
  type: 'CLEAR_TODOS'
}

export type TodoAction = AddTodoAction | ToggleTodoAction | ClearTodosAction

export const addTodo = (text: string): AddTodoAction => ({
  type: 'ADD_TODO',
  payload: text,
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  payload: id,
})

export const clearTodos = (): ClearTodosAction => ({
  type: 'CLEAR_TODOS',
})
