import React, { useState } from 'react'
import { useLocation } from 'wouter'
import NoteTitle from 'components/NoteTitle'
import NoteDescription from 'components/NoteDescription'
import { ButtonS } from './CreateNote.style'

// feat: CREAR INTERVAL PARA QUE GUARDE AUTOMÁTICAMENTE EL CONTENIDO EN OTRO ITEM DEL LOCALSTORAGE (TEMP_NOTE)
export default function CreateNote ({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [location, setLocation] = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskTitle.trim() === '') return alert('Please, don\'t leave empty the title camp') // Tiene que poner el input en rojo
    addTask(taskTitle, taskDescription, 'blue')
    setLocation('/')
  }

  const handleChange = (event, setState) => {
    setState(event.target.value)
  }

  return (
    <section>
      <form style={{ padding: '0 20px' }} onSubmit={handleSubmit}>
        <NoteTitle bgColor='default'>
          <input
            type="text"
            className="Note__title"
            placeholder="Write your tasks title"
            onChange={(e) => handleChange(e, setTaskTitle)}
          />
        </NoteTitle>

        <NoteDescription>
          <textarea
            placeholder="# Your task in markdown!!"
            className="Note__description"
            onChange={(e) => handleChange(e, setTaskDescription)}
          ></textarea>
        </NoteDescription>
        <ButtonS type="submit">Save Note</ButtonS>
      </form>
    </section>
  )
}
