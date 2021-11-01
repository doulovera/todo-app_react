import React from 'react'
import { Link, useLocation } from 'wouter'
import { HeaderTop, Nav, Tab } from './Header.style.js'

export default function TodoHeader ({ children, toggleDarkMode, status, notCompletedTasks, completedTasks }) {
  const [location] = useLocation()
  const isInHome = location === '/'
  const isInCompleted = location === '/completed'

  return (
    <header style={{ marginBottom: '20px' }}>
      <HeaderTop>
        <h1>
          <Link href="/">
            <a>
              Notes App
            </a>
          </Link>
          <button onClick={toggleDarkMode}>🌓</button>
        </h1>
        { children }
      </HeaderTop>
      {
        (isInHome || isInCompleted)
          ? (<Nav>
          <Link href="/">
            <Tab className={isInHome ? 'active' : ''}>ToDos {status === 'resolved' && <span>{notCompletedTasks}</span>}</Tab>
          </Link>
          <Link href="/completed">
            <Tab className={isInCompleted ? 'active' : ''}>Completed {status === 'resolved' && <span>{completedTasks}</span>}</Tab>
          </Link>
        </Nav>)
          : ''
      }
    </header>
  )
}
