import React from 'react'

function Card(props) {
  return (
    <div classname='w-70 border p-3 rounded-2x1'>
        <img src= {props?.animal?.img} alt="" className = 'w-full' rounded-3x1 hover:scale-105
         transition-all duration-300 mb-3 h-60 />
         <strong className='text-yellow-300'>{props?.animal?.title}</strong>

         <p className='text-gray-300'>{props?.animal?.desc}</p>
         <button className='p-2 bg-purple-700 w-full rounded-3x1 mt-3'>{props?.animal?.btn}</button>
      
    </div>
  )
}

export default Card
