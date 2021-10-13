import React from 'react'
import { Link } from 'wouter'
import { TodoItemS } from './TodoItem.style'

export default function TodoItem ({ id, title, description, color, done, isLoading = false }) {
  return (
    <TodoItemS color={color} isLoading={isLoading}>
      <Link href={`/note/${id}`}>
        <a>
          <span>
          {title}
          </span>
        </a>
      </Link>
      <input type="checkbox" />
    </TodoItemS>
  )
}
