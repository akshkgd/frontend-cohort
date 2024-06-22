import React, { useEffect } from 'react'
function Home() {
    useEffect(()=>{
        console.log('mount');
        return () =>{
            console.log('deleted')
        }
    })
  return (
    <div>
      <h1 className="">This is home page</h1>

    </div>
  )
}

export default Home
