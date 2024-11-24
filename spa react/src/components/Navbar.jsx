import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
            <div className=" p-3  border-b border-neutral-100">
                <div className="w-[900px] mx-auto flex items-center justify-between">
                {/* <a href="/" className="text-2xl font-black">React SPA.</a> */}
                <Link to='/' className="text-2xl font-bold">Instagram</Link>
                <div className=" flex gap-3">
                    <Link to='/requests' className="">Requests</Link>
                    <Link to='/about' className="">About Us</Link>
                    <Link to=''>random link</Link>   
                </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;