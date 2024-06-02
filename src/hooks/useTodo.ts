import { useContext } from 'react'
import { TodoContext } from '@/contexts/TodoContext'

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (context === undefined) {
    throw new Error('useTodoはTodoProviderの内側で使用する必要があります')
  }
  return context
}
