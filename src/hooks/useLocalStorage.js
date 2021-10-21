import { useEffect, useState } from 'react'

export default function useLocalStorage (itemName, initialValue) {
  const [status, setStatus] = useState('pending') // pending, resolved, rejected
  const [data, setData] = useState(initialValue)

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItems

      if (!localStorageItem) {
        parsedItems = initialValue
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      } else {
        parsedItems = JSON.parse(localStorageItem)
      }

      setData(parsedItems)

      setTimeout(() => setStatus('resolved'), 2000)
    } catch (error) {
      console.error(error)
      setStatus('rejected')
    }
  }, [])

  const saveItems = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setData(newItem)
    } catch (error) {
      console.error(error)
      setStatus('rejected')
    }
  }

  return {
    status,
    data,
    saveItems
  }
}
