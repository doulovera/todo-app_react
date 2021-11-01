import React from 'react'
import { useLocation } from 'wouter'
import ReactMarkdown from 'react-markdown'
import NoteTitle from 'components/NoteTitle'
import NoteDescription from 'components/NoteDescription'
import { ButtonGroup, ButtonS } from './Note.style'

export default function Note ({ id, onLoading, on404, removeTask, searchSingleTask }) {
  const [, setLocation] = useLocation()
  const { task, status } = searchSingleTask(id)

  const handleRemove = () => {
    removeTask(id)
    setLocation('/')
  }

  // Cargando
  if (status === 'pending') return onLoading()

  // Si no existe
  if (!task) return on404()

  // La nota
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
        <ButtonS onClick={handleRemove}>
          Remove
        </ButtonS>
      </ButtonGroup>
    </section>
  )
}
