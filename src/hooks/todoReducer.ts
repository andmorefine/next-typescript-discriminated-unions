import { TodoAction } from '@/actions/todo'

export type TodoState = {
  todos: { id: number; text: string; completed: boolean }[]
}

export const initialState: TodoState = {
  todos: [],
}

export const todoReducer = (
  state = initialState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      }
    case 'CLEAR_TODOS':
      return {
        ...state,
        todos: [],
      }
    default:
      return state
  }
}
