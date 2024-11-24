import React, { useEffect, useState } from 'react'
function Home(){
  let [data, setData] = useState(0)
  useEffect(()=>{
    console.log('Home mounted')
    return ()=>{
      console.log('Home unmounted')
    }
  }, [data])  
  return (
    <div className='mt-24'>
      <h1 className="text-center text-2xl font-bold">This is home page & data is {data}</h1>
      <div className="text-center">
        <button onClick={()=>{
          setData(data + 1)
        }} className="bg-violet-100 text-violet-700 p-3 mt-4">Update Data</button>
      </div>

    </div>
  )
}

export default Home
