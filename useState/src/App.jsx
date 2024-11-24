import { useState } from "react";
import Counter from "./components/Counter";
import Alert from "./components/Alert";
import Loader from './components/Loader'
import User from "./components/User";
function App(){

    
    return(
        <>
        {/* <h1 className="text-center text-4xl font-bold mt-32">Hey! my age is {age}</h1>
        <div className="text-center">
                <button onClick={()=>{
                   setAge(30)
                }} className="mt-5 px-5 py-2 rounded-lg bg-blue-600 text-white">Update my age</button>
        </div> */}
        {/* <Counter/> */}
        {/* <Alert /> */}
        {/* <Loader /> */}
        <User />
        </>
    )
}
export default App;