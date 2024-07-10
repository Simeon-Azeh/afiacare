import React from 'react'
import CardItem from './CardItem'
function Card() {
    const CardData = [
        {title: "Card 1", description: "This is card 1"},
        {title: "Card 2", description: "This is card 2"},
        {title: "Card 3", description: "This is card 3"},
        {title: "Card 3", description: "This is card 3"},
    ]
  return (
    <div className='p-8'>
     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%]'>
     {CardData.map((item) => (
        <div className="p-4 border rounded bg-white shadow-sm" key={item.title}>
          <CardItem title={item.title} description={item.description} />
        </div>
     ))}
     </div>
    </div>
  )
}

export default Card
