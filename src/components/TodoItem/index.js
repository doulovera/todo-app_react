import React from 'react'
import { Link } from 'wouter'
import Check from 'components/Icons/Check'
import { TodoItemS } from './TodoItem.style'
import Dash from 'components/Icons/Dash'

export default function TodoItem ({
  id,
  title,
  color,
  done,
  isLoading = false,
  toggleCompleteTask
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
            ? <Dash fill='#000' />
            : <Check fill='#39d353' />
        }
      </button>
    </TodoItemS>
  )
}
