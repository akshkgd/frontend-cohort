import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(){
    let {id} = useParams()
    let [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((product)=>{
            setProduct(product.data)
        })
    }, [product])
    return(
        <>
        <div className="mt-24">
            <div className="w-[860px] mx-auto flex gap-5">
                <img src={product.image} className="w-full h-56 object-cover" alt="" />
                <div>
                    <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
                    <p className="text-neutral-500 text-xs">{product.description}</p>
                    <p className="mt-2">Rs {Math.floor(product.price * 85)}/- </p>
                    <button className="py-3 px-5 bg-black text-white mt-2">Purchase Now</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Details;