import React from 'react'
import { HeaderTop, Nav, Tab } from './Header.style.js'

export default function TodoHeader ({ toggleDarkMode }) {
  return (
    <header>
      <HeaderTop>
        <h1>Notes App 📝</h1>
        <button onClick={toggleDarkMode}>🌓</button>
      </HeaderTop>
      <Nav>
        <Tab className={'active'}>ToDos {true && <span>5</span>}</Tab>
        <Tab className={''}>Completed {true && <span>5</span>}</Tab>
      </Nav>
    </header>
  )
}
