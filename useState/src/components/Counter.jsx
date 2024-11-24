import { useState } from "react";

function Counter(){
    let [counter, setCounter] = useState(0);
    function incrementHandler(){
        // setCounter(counter +1)
        setCounter((prev)=>prev+1)
    }
    function decrementHandler(){
        // setCounter(counter +1)
        setCounter((prev)=>prev-1)
    }
    return(
        <>
        <div className="w-[400px] mx-auto mt-24">
            <h1 className="text-3xl font-semibold">This is a simle counter App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam perferendis iure.</p>


            <h1 className="font-bold text-2xl ">{counter}</h1>
            <div className="mt-5 flex gap-2">
                <button onClick={incrementHandler} className="px-4 py-2 bg-orange-600 text-white">Increment</button>
                <button onClick={decrementHandler} className="px-4 py-2 bg-orange-600 text-white">Decrement</button>

            </div>
        </div>
        </>
    )
}
export default Counter;