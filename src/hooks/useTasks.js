import useLocalStorage from './useLocalStorage'

export default function useTasks () {
  const { status, data: tasks, saveItems: saveTasks } = useLocalStorage('NOTE_TAKER_V1', [])

  const completedTasks = tasks.filter(task => !!task.done).length
  const notCompletedTasks = tasks.filter(task => !task.done).length

  const addTask = (title, description, color) => {
    const newTask = [
      ...tasks,
      {
        id: Date.now(),
        title,
        description,
        done: false,
        color
      }
    ]

    saveTasks(newTask)
  }

  const removeTask = (taskId) => {
    const findTaskIndex = tasks.findIndex(task => task.id === taskId)
    const newTasks = [...tasks]
    newTasks.splice(findTaskIndex, 1)
    saveTasks(newTasks)
  }

  const toggleCompleteTask = (taskId) => {
    const findTaskIndex = tasks.findIndex(task => task.id === taskId)
    const newTasks = [...tasks]
    newTasks[findTaskIndex].done = !newTasks[findTaskIndex].done
    saveTasks(newTasks)
  }

  return {
    tasks,
    completedTasks,
    notCompletedTasks,
    status,
    addTask,
    removeTask,
    toggleCompleteTask
  }
}
