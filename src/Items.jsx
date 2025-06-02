import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItem}) => {
  return (
    <div className='items'>
     {items.map((item) => {
      return <SingleItem item={item} removeItem={removeItem}/>
     })}
    </div>
  )
}

export default Items