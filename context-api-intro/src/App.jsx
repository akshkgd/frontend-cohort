import { useContext } from "react";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
function App() {
  const {setUser} = useContext(UserContext)
  function loginHandler(){
      setUser({name: 'Ashish', email: 'ashish@gmail.com', img: 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D'})
  }

  return (
    <>
      <div className="border-b py-3">
        <div className="flex justify-between max-w-4xl mx-auto">
          <h3 className="">Context API's</h3>
          <div>
            <button onClick={loginHandler} className="">Login</button>
          </div>
        </div>
      </div>


      <div className="mt-44 max-w-4xl mx-auto">
        <Profile />
      </div>
    </>
  )
}

export default App
