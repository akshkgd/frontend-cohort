import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Img from './pages/Img';
import Error from './pages/Error';
import logo from './assets/logo.svg'
function App() {

  return (
    <>
    <div className="border-b border-neutral-100 py-3 sticky top-0 bg-white ">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/"><img src={logo} className='h-8' alt="" /></Link>
        <div className='flex gap-4'>
          <Link to="/image">Generate Images</Link>
          <Link>About</Link>

        </div>
      </div>
    </div>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/image' element={<Img/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  )
}

export default App
