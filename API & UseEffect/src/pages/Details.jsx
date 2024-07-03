import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function Details() {
  let [product, setProduct] = useState({})
  let {id} = useParams()
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
      setProduct(product.data)
    })
  })
  return (
    <div className='mt-24 w-[700px] mx-auto'>
      <div className="flex gap-5 items-center">
        <img className='h-56 w-[300px] object-contain' src={product.image} alt="" />
        <div className="">
          <h1 className='text-xl font-semibold'>{product.title}</h1>
          <h1 className='my-2 text-neutral-600'>{product.description}</h1>  
          <p className='my-2'>Rs {Math.floor(product.price * 80)}</p>
          <div className="flex gap-4">
            <button className="border border-black bg-black text-white py-3 px-5">Purchase Now</button>
            <button className="border border-black text-black bg-white py-3 px-5">Add to Wishlist</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Details
