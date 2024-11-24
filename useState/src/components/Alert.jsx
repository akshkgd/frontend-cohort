import { useState } from "react";

function Alert(){
    let [alertStatus, setAlertStatus] = useState(false);

    function alertHandler(){
        setAlertStatus((prev)=>!prev)
    }
    return(
        <>
        {
            alertStatus ? <div className="px-6 bg-neutral-50 py-3 border absolute top-10 right-10 rounded-xl">This is an react alert</div> :  ""
        }
        <div className="w-[400px] mx-auto mt-24">
            <h1 className="text-3xl font-semibold">This is a simple react js alert app</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam perferendis iure.</p>

        <button onClick={alertHandler} className="mt-5 px-5 py-2 bg-orange-600 text-white">{alertStatus ? 'Hide' : 'Show'} alert</button>
        
        </div>
        </>
    )
}
export default Alert;