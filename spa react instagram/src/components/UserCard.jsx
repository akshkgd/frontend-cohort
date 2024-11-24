import {Link } from 'react-router-dom'
function UserCard({img, name, prof, username}){
    return(
        <>
        <Link to={`/${username}`} className='hover:cursor-pointer'>
        <div className="flex gap-5 items-center mt-4  ">
                <img src={img} className="h-14 w-14 object-cover rounded-full " alt="" />
                <div>
                    <p>{name}</p>
                    <p className="text-sm text-neutral-600">{prof}</p>
                </div>
            </div>
        </Link>
            
        </>
    )
}
export default UserCard;