import users  from '../Users';
import UserCard from '../components/UserCard';
function Requests(){
    return(
        <>
            <div className="mx-auto w-[400px] mt-24 mb-24">
                <h1 className="text-2xl  font-bold">Your Follow requests</h1>
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odio soluta voluptatum?</p>

                {
                    users.map(user=><UserCard img={user.image} name={user.name} username={user.username} prof={user.profession} />)
                }
            </div>
        </>
    )
}
export default Requests;