import React from 'react'
import useTasks from 'hooks/useTasks'
import ReactMarkdown from 'react-markdown'
import NoteTitle from 'components/NoteTitle'
import NoteDescription from 'components/NoteDescription'
import { ButtonGroup, ButtonS } from './Note.style'

export default function Note ({ id }) {
  const { tasks, removeTask } = useTasks()
  const task = tasks.find(task => task.id === parseInt(id, 10))
  // const { color, title, description, done } = task

  return (
    <section style={{ padding: '0 20px' }}>
      <NoteTitle bgColor={task?.color}>
        <h4 className="Note__title">
          {task?.title}
        </h4>
      </NoteTitle>
      <NoteDescription>
        <div className="Note__description">
          <ReactMarkdown linkTarget="_blank">
            {task?.description}
          </ReactMarkdown>
        </div>
      </NoteDescription>
      <ButtonGroup>
        <ButtonS onClick={() => removeTask(id)}>
          Remove
        </ButtonS>
        <ButtonS onClick={() => removeTask(id)}>
          Complete
        </ButtonS>
      </ButtonGroup>
    </section>
  )
}
