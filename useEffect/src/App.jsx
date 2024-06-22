import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Demo from './pages/Demo'

function App() {
  

  
  return (
    <>
    <div className='flex gap-5 border-b  py-4 px-10'>
      <Link to='/'>Home</Link>
      <Link to='/Demo'>Demo</Link>

    </div>

    


    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/demo' element={<Demo/>} />


    </Routes>
    </>
  )
}

export default App
