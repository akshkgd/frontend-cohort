import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

function Products() {
    let [products, setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((products)=>{
            setProducts(products.data);
            console.log(products)
       })
    }, [])
    return (
        <div>
            <div className="flex gap-4 justify-center flex-wrap mt-24">
                {products.length > 0 ? products.map(product=> <Card key={product.id} id={product.id} price={product.price} img={product.image} desc={[product.description]} title={product.title} />)  : <div className="">Loading...</div> }
                
               
            </div>
        </div>
    )
}

export default Products
