import Navbar from './Navbar'
import DemoCard from './Card'
function App(){
  return (
    <>
      {/* <Navbar></Navbar> */}
     
      <h1 className="title">Thy this is my first component! {Math.floor(Math.random()*1000)}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit at ratione in modi, voluptates facilis.</p>
      
      <DemoCard img='https://source.unsplash.com/1600x1000/?india' abc='ths is heading one for the component' />
      <DemoCard img='https://images.unsplash.com/photo-1504896287989-ff1fbde00199?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhcmlzfGVufDB8MHwwfHx8MA%3D%3D' abc='ths is heading two for the component' />

    </>
  )
  
}

export default App;