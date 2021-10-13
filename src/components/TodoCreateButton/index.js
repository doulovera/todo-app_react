import React from 'react'
import { Link, useRoute } from 'wouter'
import { Button } from './TodoCreate.style'

export default function TodoCreateButton () {
  const [match] = useRoute('/')

  return (
    <Link href={match ? '/create' : '/'}>
      <Button>
        {
          // change emojis to icons
          match ? '➕' : '⬅️'
        }
      </Button>
    </Link>
  )
}
