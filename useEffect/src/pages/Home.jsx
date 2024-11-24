import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Loader from '../components/Loader'
function Home(){
    let [products, setProducts] = useState([])
    // let [basic, setBasic] = useState('This is the basic data');
    // let [large, setLarge] = useState('This is the large data');

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((products)=>{
            console.log(products)
            setProducts(products.data)
        })
    },[])

    // function fetchProducts(){
    
    // }
    return(
        <>
        {/* <button className="bg-violet-100 text-violet-600 p-3 m-10 " onClick={fetchProducts}>Get data</button> */}


        {/* <div className="m-10">
        <h1>{basic}</h1>
        <button className="bg-violet-100 text-violet-600 p-3 " onClick={()=>(setBasic('The basic data is updated'))}>Update data</button>
        <div className="mt-10"></div>
        <h1>{large}</h1>
        <button className="bg-violet-100 text-violet-600 p-3 " onClick={()=>(setLarge('The large data is updated'))}>Update large data</button>

        </div> */}


        <div className="w-[800px] mx-auto mt-10">
        {
            products.length>0 ? products.map(data=> <Card title={data.title} key={data.id} id={data.id} img={data.image}/>) : <Loader />
        }
        </div>
        </>
    )
}
export default Home;