import React from 'react'
import { LabelS } from './NoteDescription.style'

export default function NoteDescription (props) {
  return (
    <LabelS>
      {props.children}
    </LabelS>
  )
}
