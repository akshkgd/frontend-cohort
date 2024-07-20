import hero from '../assets/hero.png'
function Intro() {
  return (
    <div className="max-w-3xl mx-auto mt-44 text-center">
        <img src={hero} className='h-36 inline' alt="" />
     <h1 className="text-4xl text-neutral-800 font-black">Organize your work and life, finally.</h1>
     <p className="text-lg font-light text-neutral-500">Simplify life for both you and your team. The world’s #1 task manager and to-do list app.</p>
    </div>
  )
}

export default Intro
