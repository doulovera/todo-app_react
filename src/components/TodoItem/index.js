import React from 'react'
import { Link } from 'wouter'
import { TodoItemS } from './TodoItem.style'

export default function TodoItem ({ id, title, description, color, done }) {
  return (
    <Link href={`/note/${id}`}>
      <TodoItemS color={color}>
        <h2>{title}</h2>
        <input type="checkbox" />
      </TodoItemS>
    </Link>
  )
}
