import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from './components/TodoCard'
import logo from './assets/logo.svg'
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser, useAuth } from "@clerk/clerk-react";
const firebaseUrl = 'https://frontend-cohort-default-rtdb.asia-southeast1.firebasedatabase.app/';
function App() {
let {user} = useUser();
let {isSignedIn} = useAuth();
let taskInput = useRef(null);
let [todos, setTodos] = useState([])
let [formStatus, setFormStatus] = useState(false)
  function handleSubmit(){
    setFormStatus(true)
    let task = taskInput.current.value;
    axios.post(`${firebaseUrl}todos.json`, {
      title: task,
      createdBy: user.username,
    }).then(()=>{
      setFormStatus(false);
      fetchTodos();
    })
  }

  function fetchTodos(){
    axios.get(`${firebaseUrl}todos.json`).then(todos=>{
      let tempTodos = [];
      for(let key in todos.data){
        let todo = {
          id: key,
          ...todos.data[key]
        }
        tempTodos.push(todo)
      }
      setTodos(tempTodos)
    })
  }

  function handleDelete(id){
    axios.delete(`${firebaseUrl}todos/${id}.json`).then(()=>{
      fetchTodos();
    })
  }
  useEffect(()=>{
    fetchTodos()
  }, [])
  
  return (
    <>
    <div className="border-b py-3 ">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-5">
        <img className="h-8" src={logo} alt="" />
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      </div>
    </div>
    <SignedIn>
      <div className="w-[400px] mx-auto mt-12">
            <h1 className="text-2xl font-bold">Manage your tasks <span className="text-neutral-600">@{isSignedIn ? user.firstName : ""}</span></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, sit facilis! Dolorum.</p>
            <div className="flex gap-2">
            <input ref={taskInput} className="mt-2 border rounded-xl p-3 w-full focus:outline-none border-neutral-300" type="text" placeholder="Add task i.e. Learn Hooks in react" />
            <button onClick={handleSubmit} className="mt-2 bg-black py-3 px-5 text-white rounded-xl flex align-center gap-4">Add{!formStatus ? "" : <Loader /> }</button>
        
            </div>
            
          <div className="mt-12">

           {todos.filter(todo => isSignedIn ? todo.createdBy == user.username : true).map(todo=> <Card handleDelete={handleDelete} id={todo.id} title={todo.title} key={todo.id} />)

           }
          </div>
        
        
        </div>
        </SignedIn>
        <SignedOut>
          <Intro />
        </SignedOut>
    </>
  )
}

export default App
