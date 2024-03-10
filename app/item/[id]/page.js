import ItemComponent from '@/components/Items'
import React from 'react'

const Item = ({ params }) => {
  const { id } = params

  if (!id) return null

  return (
    <ItemComponent id={id} />
  )
}

export default Item