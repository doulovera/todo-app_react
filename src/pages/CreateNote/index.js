import React, { useState } from 'react'
import { useLocation } from 'wouter'
import NoteTitle from 'components/NoteTitle'
import NoteDescription from 'components/NoteDescription'
import { ButtonS, NoteTitleContainer } from './CreateNote.style'
import ColorSelector from 'components/ColorSelector'

// feat: CREAR INTERVAL PARA QUE GUARDE AUTOMÁTICAMENTE EL CONTENIDO EN OTRO ITEM DEL LOCALSTORAGE (TEMP_NOTE)
export default function CreateNote ({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskColor, setTaskColor] = useState('default')

  const [, setLocation] = useLocation()

  const handleInputChange = (event, setState) => {
    setState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskTitle.trim() === '') return alert('Please, don\'t leave empty the title camp') // Tiene que poner el input en rojo
    addTask(taskTitle, taskDescription, taskColor)
    setLocation('/')
  }

  return (
    <section>
      <form style={{ padding: '0 20px' }} onSubmit={handleSubmit}>
        <NoteTitleContainer>
          <NoteTitle bgColor={taskColor}>
            <input
              type="text"
              className="Note__title"
              placeholder="Write your tasks title"
              onChange={(e) => handleInputChange(e, setTaskTitle)}
            />
          </NoteTitle>
          <ColorSelector taskColor={taskColor} setTaskColor={setTaskColor} />
        </NoteTitleContainer>

        <NoteDescription>
          <textarea
            placeholder="# Your task in markdown!!"
            className="Note__description"
            onChange={(e) => handleInputChange(e, setTaskDescription)}
          ></textarea>
        </NoteDescription>
        <ButtonS type="submit">Save Note</ButtonS>
      </form>
    </section>
  )
}
