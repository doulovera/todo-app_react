import { useState } from 'react'
import { Route } from 'wouter'
import { AppS } from 'styles/App.style'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import { darkTheme, lightTheme } from 'styles/theme'
import TodoHeader from 'components/Header'
import TodoList from 'components/TodoList'
import TodoItem from 'components/TodoItem'

const FAKE_ARRAY = [
  {
    id: 1634015287752,
    title: 'The task title',
    description: '# Hello world',
    done: false,
    color: 'blue'
  },
  {
    id: 1634015289490,
    title: 'Second task',
    description: '# Bye world >:)',
    done: true,
    color: 'red'
  },
  {
    id: 1634015289844,
    title: 'Tercera tarea bro',
    description: '# idunno bruh',
    done: false,
    color: 'orange'
  }
]

function App () {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppS>
        <TodoHeader toggleDarkMode={toggleDarkMode} />
        <Route path="/">
          <TodoList className="TodoList">
            {
              FAKE_ARRAY.map(todo => (
                <TodoItem key={todo.id} {...todo} />
              ))
            }
            <article className="TodoItem"></article>
          </TodoList>
          <div className="TodoCreate"></div>
        </Route>

        <Route path="/note/:id">
          <p>holi</p>
        </Route>
      </AppS>
    </ThemeProvider>
  )
}

export default App
