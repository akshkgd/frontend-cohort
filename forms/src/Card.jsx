function Card({name, email, img}){
    return(
        <>
        <div className="bg-neutral-100  w-40 text-center rounded-lg p-3">
            <img className="w-16 h-16 rounded-full inline object-cover" src={img} alt="" />
            <h1 className="mt-2">{name}</h1>
            <p className="text-sm text-neutral-800 overflow-hidden text-ellipsis">{email}</p>
            <p className="text-xs mt-2 text-neutral-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </>
    )
}
export default Card;