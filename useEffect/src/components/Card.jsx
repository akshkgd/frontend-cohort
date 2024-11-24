import { Link } from "react-router-dom";
function Card({title, img, id}){
    return(
        <>
        <Link to={`/details/${id}`}>
        
        <div className="bg-orange-50 mb-4 rounded-lg p-3">
            {/* <img src={img} alt="" className="w-full h-52 object-cover" /> */}
            <h1>{title}</h1>
        </div>
        </Link>
        </>
    )
}
export default Card;