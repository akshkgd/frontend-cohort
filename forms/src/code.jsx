// useRef Hook
// let nameInput = useRef();
// let emailInput = useRef();
// function submitHandler(event){
//   event.preventDefault();
//   console.log(nameInput.current.value, emailInput.current.value);
//   nameInput.current.value = ''
// }
{/* <div className="mx-auto flex h-screen w-full items-center justify-center">
      <form className="w-[400px] p-4 rounded-xl" action="" onSubmit={submitHandler}>
        <h1 className="text-xl font-bold">This is a useRef input</h1>
        <p>IN useRef we target the input field useing the ref attribute and then we can access the value using ref.current.value</p>
        <input type="text" ref={nameInput}  className="w-full border outline-none p-3 rounded-lg my-2" placeholder="Enter name" />
        <input type="text" ref={emailInput}  className="w-full border outline-none p-3 rounded-lg my-2" placeholder="Enter email" />
    
        <input className="bg-violet-100 text-violet-600 p-3 rounded-lg" type="submit" />
      </form>
     </div> */}


    //  controlled components


    // let [value, setValue] = useState({name: "", email:""})
    // function submitHandler(e){
    //   e.preventDefault();
    //   console.log(value)
    // }
    // <form action="" onSubmit={submitHandler}>
    //     <input type="text" onChange={(event)=>setValue({...value, name: event.target.value})} placeholder="Name" />
    //     <input type="text" onChange={(event)=>setValue({...value, email: event.target.value})} placeholder="Email" />
        
    //     <input type="submit" />
    //   </form>



    // bill split app


//     let [bill, setBill] = useState('🚘⛱️');
//   let {register, handleSubmit, reset} = useForm();
//   function submitHandler(data){
//     let amount = data.amount;
//     let users  = data.users;

//     setBill(Math.floor((amount / users)));
//     reset();
    // <form action="" className="w-[400px] text-center" onSubmit={handleSubmit(submitHandler)}>
    //     <h1 className="text-4xl font-black">{bill}</h1>
    //     <h1 className="text-xl font-bold">Split the bill among your friends!</h1>
    //     <p className="text-sm text-neutral-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, blanditiis?</p>
    //     <div className="mt-4 flex gap-2"> 
    //       <input type="text" {...register('amount')} className=" w-1/2 border p-3 outline-none rounded-xl" placeholder="Enter amount"/>
    //       <input type="text" {...register('users')} className="border p-3 outline-none rounded-xl" placeholder="Enter Users"/>
    //     </div>
    //     <input type="submit" className="mt-2 w-full bg-black p-4 text-white rounded-xl hover:cursor-pointer" value="Split the bill" />
    //   </form>