import React, { useState } from 'react'
import { useLocation } from 'wouter'
import NoteTitle from 'components/NoteTitle'
import NoteDescription from 'components/NoteDescription'
import { ButtonS, NoteTitleContainer, NoteColorSelector, ColorsContainer, ColorOption } from './CreateNote.style'

const COLORS = [
  'default',
  'gray',
  'brown',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'pink',
  'red'
]

// feat: CREAR INTERVAL PARA QUE GUARDE AUTOMÁTICAMENTE EL CONTENIDO EN OTRO ITEM DEL LOCALSTORAGE (TEMP_NOTE)
export default function CreateNote ({ addTask }) {
  const [isColorActive, setIsColorActive] = useState(false)

  // Form
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const [location, setLocation] = useLocation()

  const handleInputChange = (event, setState) => {
    setState(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (taskTitle.trim() === '') return alert('Please, don\'t leave empty the title camp') // Tiene que poner el input en rojo
    addTask(taskTitle, taskDescription, 'blue')
    setLocation('/')
  }

  return (
    <section>
      <form style={{ padding: '0 20px' }} onSubmit={handleSubmit}>
        <NoteTitleContainer>
          <NoteTitle bgColor='default'>
            <input
              type="text"
              className="Note__title"
              placeholder="Write your tasks title"
              onChange={(e) => handleInputChange(e, setTaskTitle)}
            />
          </NoteTitle>
          <NoteColorSelector type="button" isColorActive={isColorActive} onClick={() => setIsColorActive(!isColorActive)} />
            <ColorsContainer isColorActive={isColorActive}>
              {
                COLORS.map(color => (
                  <ColorOption key={color} bgColor={color}>
                    <span className="ColorOption__square"></span>
                    <p>{color}</p>
                  </ColorOption>
                ))
              }
            </ColorsContainer>
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
