import React from 'react'
import { Link } from 'wouter'
import CircleBold from 'components/Icons/CircleBold'
import { TodoItemS } from './TodoItem.style'
import Check from 'components/Icons/Check'

export default function TodoItem ({
  id,
  title,
  color,
  done,
  isLoading = false,
  toggleCompleteTask,
  theme
}) {
  return (
    <TodoItemS color={color} className={isLoading ? 'isLoading' : ''}>
      <Link href={`/note/${id}`}>
        <a>
          <span className={`${done && 'completed'}`}>
          {title}
          </span>
        </a>
      </Link>
      <button onClick={() => toggleCompleteTask(id)}>
        {
          done
            ? <Check fill={theme ? '#fff' : '#000'} />
            : <CircleBold fill={theme ? '#fff' : '#000'} />
        }
      </button>
    </TodoItemS>
  )
}
