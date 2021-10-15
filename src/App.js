import { useState } from 'react'
import { Route } from 'wouter'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/global'
import { darkTheme, lightTheme } from 'styles/theme'
import useTasks from 'hooks/useTasks'
import CreateNote from 'pages/CreateNote'
import TodoHeader from 'components/Header'
import TodoList from 'components/TodoList'
import TodoItem from 'components/TodoItem'
import Note from 'pages/Note'
import TodoHeaderButton from 'components/TodoHeaderButton'
import { AppS } from 'styles/App.style'

const FAKE_ARRAY = [
  {
    id: 1634015287752,
    title: 'La propiedad text-overflow ha de ser especificada usando uno o dos valores. Si se define solo un valor, este determinará el comportamiento del overflow para el final de la línea (el extremo derecho en un texto izquierda-a-derecha o el extremo izquierdo en un texto derecha-a-izquierda)',
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

  const {
    tasks,
    completedTasks,
    notCompletedTasks,
    status,
    addTask,
    removeTask,
    toggleCompleteTask
  } = useTasks()

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppS>
        <TodoHeader toggleDarkMode={toggleDarkMode}>
          <TodoHeaderButton />
        </TodoHeader>

        <Route path="/">
          <TodoList
            className="TodoList"
            status={status}
            tasks={tasks}
            onError={() => <h3 className="TodoList__alert TodoList__alert-error">An error has ocurred...</h3>}
            onLoading={() => <TodoItem isLoading={true} />}
            onEmpty={() => <h3 className="TodoList__alert">Use the &apos;+&apos; button to add a Task!</h3>}
          >
            { (task) => <TodoItem key={task.id} {...task} /> }
          </TodoList>
        </Route>

        <Route path="/note/:id">
          {
            (params) => <Note id={params.id} />
          }
        </Route>

        <Route path="/create">
          <CreateNote />
        </Route>

      </AppS>
    </ThemeProvider>
  )
}

export default App
