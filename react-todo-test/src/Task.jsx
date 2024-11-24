import React from 'react'
function Task({id, todo, handleDelete}) {

  return (
    <div>
      <div key={id} className="flex justify-between items-center border-b p-2">
            <span>{todo}</span>
            <button onClick={() => handleDelete(id)} className=" text-red-900">Delete</button>
          </div>
    </div>
  )
}

export default Task;
