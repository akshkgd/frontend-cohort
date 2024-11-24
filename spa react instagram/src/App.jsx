import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import About from './pages/About'
import Navbar from './components/Navbar'
import Error from "./pages/Error";
import Requests from "./pages/Requests";
import Post from "./pages/Post";
import UserDetails from "./pages/UserDetails";

function App() {

  return (
    <>

      <Navbar/>


       <Routes>
        <Route path="/" element={<Requests />} />  
        <Route path="/about" element={<About />} />
        <Route path="/requests" element={<Requests />} />  
        <Route path="/:username" element={<UserDetails/>} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Error/>} />
      </Routes> 
    </>
  )
}

export default App
