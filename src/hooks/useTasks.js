import useLocalStorage from './useLocalStorage'

export default function useTasks () {
  const { status, data: tasks, saveItems: saveTasks } = useLocalStorage('NOTE_TAKER_V1', [])

  const completedTasks = tasks.filter(task => !!task.done)
  const notCompletedTasks = tasks.filter(task => !task.done)

  const addTask = (title, description, color) => {
    const newTask = [
      ...tasks,
      {
        id: parseInt(Date.now(), 10),
        title,
        description,
        done: false,
        color
      }
    ]
    saveTasks(newTask)
  }

  const removeTask = (taskId) => {
    let id = taskId
    if (typeof (taskId) === 'string') id = parseInt(taskId, 10)
    const filterTask = tasks.filter(task => task.id !== id)
    saveTasks(filterTask)
  }

  const toggleCompleteTask = (taskId) => {
    try {
      const findTaskIndex = tasks.findIndex(task => task.id === taskId)
      const newTasks = [...tasks]
      newTasks[findTaskIndex].done = !newTasks[findTaskIndex].done
      saveTasks(newTasks)
    } catch (err) {
      console.error(err)
    }
  }

  const searchSingleTask = (taskId) => {
    let status = 'pending'
    const task = tasks.find(task => {
      status = 'resolved'
      return task.id === parseInt(taskId, 10)
    })
    return { task, status }
  }

  return {
    tasks,
    completedTasks,
    notCompletedTasks,
    status,
    addTask,
    removeTask,
    toggleCompleteTask,
    searchSingleTask
  }
}
