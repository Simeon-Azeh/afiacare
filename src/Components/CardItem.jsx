import React from 'react'

function CardItem({ title, description }) {
  return (
    <div className=''>
        <div className=''>
        <h2 className='text-red-900'>{title}</h2>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default CardItem
