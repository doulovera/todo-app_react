import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { TitleS, DescriptionS, ButtonS } from './CreateNote.style'

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
        <TitleS
          type="text"
          placeholder="Write your tasks title"
          onChange={(e) => handleChange(e, setTaskTitle)}
        />

        <DescriptionS
          placeholder="# Your task in markdown!!"
          onChange={(e) => handleChange(e, setTaskDescription)}
        ></DescriptionS>
        <ButtonS type="submit">Save Note</ButtonS>
      </form>
    </section>
  )
}
