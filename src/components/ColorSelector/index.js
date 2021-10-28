import React, { useState } from 'react'
import { NoteColorSelector, ColorsContainer, ColorOption } from './ColorSelector.style'

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

export default function ColorSelector ({ taskColor, setTaskColor }) {
  const [isColorOpen, setIsColorOpen] = useState(false)

  const handleColorChange = (color) => {
    setTaskColor(color)
    setIsColorOpen(false)
  }

  return (
    <>
      <NoteColorSelector
        type="button"
        isColorActive={isColorOpen} onClick={() => setIsColorOpen(!isColorOpen)}
        bgColor={taskColor}
      >
        <span className="ColorOption__square"></span>
      </NoteColorSelector>
      <ColorsContainer
        className={isColorOpen ? 'ColorsContainer-active' : ''} isColorActive={isColorOpen}
      >
        {
          COLORS.map(color => (
            <ColorOption
              key={color}
              bgColor={color}
              onClick={() => handleColorChange(color)}
            >
              <span className="ColorOption__square"></span>
              <p>{color}</p>
            </ColorOption>
          ))
        }
      </ColorsContainer>
    </>
  )
}