 const Card = ({title,description,image}) => {
    return (
        <div className="h-[400px] w-[300px] bg-gray-300 p-3 m-2 rounded-lg shadow-2xl" >
         <img className="rounded-md items-center shadow-md" src={image} alt="image" />
         <h2 className=" font-bold text-center p-2 m-2">{title}</h2>
         <p className="text-center text-gray-800">{description}</p>

        </div>
    )
}

export default Card