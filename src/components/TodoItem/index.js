import React from 'react'
import { Link } from 'wouter'
import { TodoItemS } from './TodoItem.style'

export default function TodoItem ({
  id,
  title,
  description,
  color,
  done,
  isLoading = false,
  toggleCompleteTask
}) {
  return (
    <TodoItemS color={color} className={isLoading ? 'isLoading' : ''}>
      <Link href={`/note/${id}`}>
        <a>
          <span>
          {title}
          </span>
        </a>
      </Link>
      <button onClick={() => toggleCompleteTask(id)}>|</button>
    </TodoItemS>
  )
}
