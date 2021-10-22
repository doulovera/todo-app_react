import React from 'react'
import useTasks from 'hooks/useTasks'
import ReactMarkdown from 'react-markdown'
import { TitleS, DescriptionS } from './Note.style'

export default function Note ({ id }) {
  const { tasks } = useTasks()
  const task = tasks.find(task => task.id === parseInt(id, 10))
  // const { color, title, description, done } = task

  return (
    <section style={{ padding: '0 20px' }}>
      <TitleS bgColor={task?.color}>
        {task?.title}
      </TitleS>
      <DescriptionS>
        <ReactMarkdown linkTarget="_blank">
          {task?.description}
        </ReactMarkdown>
      </DescriptionS>
    </section>
  )
}
