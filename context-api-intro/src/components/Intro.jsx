import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function Intro() {
    let {user} = useContext(UserContext);
    if(!user) return <h1>You are not logged in</h1>
  return (
    <div className='flex gap-3 items-center'>
      <img src={user.img} className='h-16 w-16 rounded-full' alt="" />
      <div className="div">
        <div className="">{user.name}</div>
        <div className="">{user.email}</div>

      </div>
    </div>
  )
}

export default Intro
