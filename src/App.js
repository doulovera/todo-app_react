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

function App () {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const {
    completedTasks,
    notCompletedTasks,
    status,
    addTask,
    removeTask,
    searchSingleTask,
    toggleCompleteTask
  } = useTasks()

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AppS>
        <TodoHeader
          toggleDarkMode={toggleDarkMode}
          completedTasks={completedTasks.length}
          notCompletedTasks={notCompletedTasks.length}
          status={status}
        >
          <TodoHeaderButton />
        </TodoHeader>

        <Route path="/">
          <TodoList
            className="TodoList"
            status={status}
            tasks={notCompletedTasks}
            onError={() => <h3 className="TodoList__alert TodoList__alert-error">An error has ocurred...</h3>}
            onLoading={() => <TodoItem isLoading />}
            onEmpty={() => <h3 className="TodoList__alert">Use the &apos;+&apos; button to add a Task!</h3>}
          >
            { (task) => <TodoItem key={task.id} {...task} toggleCompleteTask={toggleCompleteTask} theme={isDarkMode} /> }
          </TodoList>
        </Route>

        <Route path="/completed">
          <TodoList
            className="TodoList"
            status={status}
            tasks={completedTasks}
            onError={() => <h3 className="TodoList__alert TodoList__alert-error">An error has ocurred...</h3>}
            onLoading={() => <TodoItem isLoading />}
            onEmpty={() => <h3 className="TodoList__alert">You have no completed tasks! 😦</h3>}
          >
            { (task) => <TodoItem key={task.id} {...task} toggleCompleteTask={toggleCompleteTask} /> }
          </TodoList>
        </Route>

        <Route path="/note/:id">
          {
            (params) => (
              <Note
                id={params.id}
                removeTask={removeTask}
                searchSingleTask={searchSingleTask}
                onLoading={() => <h3>Loading...</h3>}
                on404={() => <h3>This note doesn&apos;t exists</h3>}
              />
            )
          }
        </Route>

        <Route path="/create">
          <CreateNote addTask={addTask} />
        </Route>

      </AppS>
    </ThemeProvider>
  )
}

export default App
