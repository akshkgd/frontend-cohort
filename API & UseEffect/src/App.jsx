import {Link, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Products from './pages/Products';
function App() {

  return (
    <>
      <div className="border-b py-4 px-28 flex justify-between">
      <Link className='font-semibold text-lg ' to='/'>API's and UseEffect</Link>
        
        <div className="flex gap-4">
          <Link to='/'>Home</Link>
          <Link to='/details'>Details</Link>
        </div>

        
      </div>


      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </>
  )
}

export default App
