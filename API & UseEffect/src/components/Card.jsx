import React from 'react'
import { Link } from 'react-router-dom'

function Card({title, img, desc, price, id}) {
  return (
    <Link to={`/details/${id}`}>
        <div className='w-[250px] border p-2 hover:cursor-pointer'>
        <div className="text-center">
            <img className='h-28 inline' src={img} alt="" />
        </div>
        <h1 className='truncate mt-2 font-semibold'>{title}</h1>
        <p>Rs {Math.floor(price * 80)}</p>
        
    </div>
    </Link>
    
  )
}

export default Card
