import React from 'react'
import { InputS, TextareaS, ButtonS } from './CreateNote.style'

export default function CreateNote () {
  // feat: CREAR INTERVAL PARA QUE GUARDE AUTOMÁTICAMENTE EL CONTENIDO EN OTRO ITEM DEL LOCALSTORAGE
  return (
    <section>
      <form style={{ padding: '0 20px' }}>
        <InputS type="text" />
        <TextareaS></TextareaS>
        <ButtonS>Save Note</ButtonS>
      </form>
    </section>
  )
}
