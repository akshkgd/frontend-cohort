import Navbar from './Navbar'
import DemoCard from './Card'
function App(){
  return (
    <>
      {/* <Navbar></Navbar> */}
     
      <h1 className="title">Thy this is my first component! {Math.floor(Math.random()*1000)}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit at ratione in modi, voluptates facilis.</p>
      
      <DemoCard />
      <DemoCard />

    </>
  )
  
}

export default App;