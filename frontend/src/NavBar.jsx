import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <div className="border-b-1 flex justify-around h-16 items-center shadow-lg shadow-violet-100 border-b-gray-400 w-full">
            <h1 className="text-md lg:text-2xl font-bold">BlogVerse</h1>
            <Link to="/" className=" md:text-xl rounded-xl border-1 hover:bg-gray-400 text-black lg:h-12 md:rounded-2xl md:px-2  lg:px-5 lg:py-2 px-1 py-1 cursor-pointer border-gray-400">Home</Link>
            <div className="flex gap-5 justify-center items-center">
                <Link to="/login" className="font-semibold text-gray-600 cursor-pointer">Signin</Link>
                <Link to="/signup" className="bg-violet-600 rounded-2xl md:px-5 md:py-2 px-2 py-1 cursor-pointer text-white font-semibold">Signup</Link>
            </div>
        </div>
    )
}
export default NavBar