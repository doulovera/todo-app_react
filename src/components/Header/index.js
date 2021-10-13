import React from 'react'
import { Link, useRoute } from 'wouter'
import { HeaderTop, Nav, Tab } from './Header.style.js'

export default function TodoHeader ({ toggleDarkMode }) {
  const [match] = useRoute('/create')

  return (
    <header style={{ marginBottom: '20px' }}>
      <HeaderTop>
        <h1>
          <Link href="/">
            <a>
              Notes App 📝
            </a>
          </Link>
        </h1>
        <button onClick={toggleDarkMode}>🌓</button>
      </HeaderTop>
      {
        !match
          ? (<Nav>
          <Tab className={'active'}>ToDos {true && <span>5</span>}</Tab>
          <Tab className={''}>Completed {true && <span>5</span>}</Tab>
        </Nav>)
          : ''
      }
    </header>
  )
}
