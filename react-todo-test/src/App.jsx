import { useEffect, useRef, useState } from "react"
import axios from 'axios';
import Task from './Task'
function App() {
  let [todos, setTodos] = useState([])
  let api = 'https://ck-test-b8cf0-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json'
  let todoRef = useRef(null);
  function handleSubmit(){
    let todo = todoRef.current.value;
    axios.post(api, {
      todo: todo,
    }).then(()=>{
      fetchTodos();
    });
    
  }

  const handleDelete = (id) => {
    const deleteApi = `https://ck-test-b8cf0-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${id}.json`;
      axios.delete(deleteApi).then(()=>{
        fetchTodos();
      })
    
  };

  function fetchTodos(){
    axios.get(api).then((t)=>{
      let tempTodos = []
      for(const key in t.data){
          let todo = {
              id: key,
              ...t.data[key]
          } 
          tempTodos.push(todo)
      }
      setTodos(tempTodos)
      console.log(todos)
  })
}

    useEffect(()=>{
        fetchTodos()
    }, [])

    // useEffect(()=>{
    //   console.log(todos)
    // }, [])

  return (
    <>
      <div className="w-[400px] mx-auto mt-10">
        <h1>Todos test</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed.</p>

        <input ref={todoRef} className='w-full p-3 focus:outline-none  border mb-3' type="text" placeholder='Add Todo' />
        <button onClick={handleSubmit} className="bg-violet-200 text-violet-900 p-3">Add Task</button>

        <div className="">
        {todos.map(todo => (
          <Task id={todo.id} handleDelete={handleDelete} key={todo.id} todo={todo.todo} />
        ))}
      </div>
      
      </div>

      
    </>
  )
}

export default App
