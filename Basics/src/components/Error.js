import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    console.log(err);
    
    return (
        <div className="flex h-screen  justify-center items-center flex-col">
            <h1 className="font-bold text-2xl ">OOPS !!!</h1>
            <p className="text-gray-600 text-xl font-md ">Something went wrong.....</p>
            <p>{err.data}</p>
            {/* <p>{err.status} {err.statusText}</p> */}
        </div>
    )
}

export default Error