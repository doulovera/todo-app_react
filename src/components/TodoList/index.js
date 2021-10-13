import React from 'react'
import { SectionS } from './TodoList.style'

export default function TodoList ({
  children,
  status,
  tasks,
  onError,
  onLoading,
  onEmpty
}) {
  return (
    <SectionS>
      {status === 'rejected' && onError()}

      {status === 'pending' && onLoading()}

      {status === 'resolved' && tasks.length === 0 && onEmpty()}

      {status === 'resolved' && tasks.map(children)}
    </SectionS>
  )
}
