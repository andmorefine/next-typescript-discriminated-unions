import React, { createContext, useReducer, ReactNode } from 'react'
import { TodoState, todoReducer, initialState } from '@/hooks/todoReducer'
import { addTodo, toggleTodo, clearTodos } from '@/actions/todo'

type TodoContextProps = {
  state: TodoState
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  clearTodos: () => void
}

export const TodoContext = createContext<TodoContextProps | undefined>(
  undefined,
)

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const value = {
    state,
    addTodo: (text: string) => dispatch(addTodo(text)),
    toggleTodo: (id: number) => dispatch(toggleTodo(id)),
    clearTodos: () => dispatch(clearTodos()),
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
