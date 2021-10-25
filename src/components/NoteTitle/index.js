import React from 'react'
import { LabelS } from './NoteTitle.style'

export default function NoteTitle (props) {
  return (
    <LabelS {...props}>
      {props.children}
    </LabelS>
  )
}
