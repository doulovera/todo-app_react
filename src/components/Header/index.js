import React from 'react'
import { Link, useRoute } from 'wouter'
import { HeaderTop, Nav, Tab } from './Header.style.js'

export default function TodoHeader ({ children, toggleDarkMode, status, notCompletedTasks, completedTasks }) {
  const [match] = useRoute('/')

  return (
    <header style={{ marginBottom: '20px' }}>
      <HeaderTop>
        <h1>
          <button onClick={toggleDarkMode}>🌓</button>
          <Link href="/">
            <a>
              Notes App
            </a>
          </Link>
        </h1>
        { children }
      </HeaderTop>
      {
        match
          ? (<Nav>
          <Tab className={'active'}>ToDos {status === 'resolved' && <span>{notCompletedTasks}</span>}</Tab>
          <Tab className={''}>Completed {status === 'resolved' && <span>{completedTasks}</span>}</Tab>
        </Nav>)
          : ''
      }
    </header>
  )
}
