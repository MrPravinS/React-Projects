const Square = (props) => {
    return (
        <div onClick={props.onClick} className="flex border h-26 w-28 justify-center items-center cursor-pointer">
          <h2 className="text-2xl font-bold ">{props.value}</h2>
        </div>
    )
}


export default  Square