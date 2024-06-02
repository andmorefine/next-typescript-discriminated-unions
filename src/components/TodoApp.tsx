'use client'

import React, { useState } from 'react'
import { TodoProvider } from '@/contexts/TodoContext'
import { useTodo } from '@/hooks/useTodo'

export const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-4">TODO LIST</h1>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

const TodoList = () => {
  const { state, toggleTodo, clearTodos } = useTodo()

  return (
    <div>
      <ul className="space-y-2">
        {state.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`cursor-pointer p-2 rounded ${
              todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button
        onClick={clearTodos}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        すべてクリア
      </button>
    </div>
  )
}

const TodoInput = () => {
  const { addTodo } = useTodo()
  const [text, setText] = useState('')

  const handleAddTodo = () => {
    addTodo(text)
    setText('')
  }

  return (
    <div className="mt-4 flex space-x-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded"
        placeholder="新しいタスクを入力"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        追加
      </button>
    </div>
  )
}
