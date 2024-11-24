function Card({title, date}) {
    function formatDate(date){
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
    }
  return (
    <div className="w-72 border rounded-lg p-2 flex-gro">
        <h1 className="text-lg font-semibold m-0">{title}</h1>
        <p className="text-sm text-neutral-500">{formatDate(date)}</p>
    </div>
  )
}

export default Card
