import { useState } from "react";

function Loader(){
    let [loadingStatus, setLoadingStatus] = useState(false);

    function loaderHandler(){
        setLoadingStatus((prev)=>!prev)
    }


    return(
        <>
        <div className="w-[400px] mx-auto mt-24">
            <h1 className="text-3xl font-semibold">This is a simple button loader app</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam perferendis iure.</p>

        <button onClick={loaderHandler}  className="mt-5 px-5 py-2 bg-orange-600 text-white flex gap-2 items-center "> 
            <div>Load Data</div> 
            {
                loadingStatus ?  <div className="loader"></div> : ""
            }   
           
        </button>
        
        </div>
        </>
    )
}
export default Loader;