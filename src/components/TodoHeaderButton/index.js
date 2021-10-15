import React from 'react'
import { Link, useRoute } from 'wouter'
import { Button } from './TodoHeaderButton.style'

export default function TodoHeaderButton () {
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
