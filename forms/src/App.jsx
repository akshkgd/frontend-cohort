import { useState } from "react"
import Card from "./Card"
import { useForm } from "react-hook-form";
function App() {
  let [users, setUsers] = useState([]);
  let {register, handleSubmit, reset} = useForm();
  function addUserHandler(data){
    setUsers([...users, data]);
    reset()
  }
return (

    <>
    <form action="" className="w-full m-2 flex justify-center" onSubmit={handleSubmit(addUserHandler)}>
      <input {...register('name')} type="text" placeholder="Name" className="p-2 outline-none border"/>
      <input {...register('email')} type="email" placeholder="Email" className="p-2 outline-none border"/>
      <input {...register('img')} type="text" placeholder="Image" className="p-2 outline-none border"/>
      <input type="submit" value="Add User" className="p-2 outline-none bg-black text-white px-4"  />

    </form>
     <div className="mx-auto flex gap-3 flex-wrap h-screen w-full items-center justify-center">
        {
          users.length > 0 ? users.map(user=> <Card name={user.name} img={user.img} email={user.email} />) : <h1>No Users</h1>
        }
     </div>
    </>
  )
}

export default App
