import {Link} from "react-router-dom"
const NavBar=()=>{
    return(
        <div className="border-b-1 flex justify-around h-16 items-center shadow-lg shadow-violet-100 border-b-gray-400 w-full">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <Link to="/" className="border-1 hover:bg-gray-400 text-black h-12 rounded-2xl px-5 py-2 cursor-pointer border-gray-400">Home</Link>
            <div className="flex gap-5 justify-center items-center">
                <Link to="/login" className="font-semibold text-gray-600 cursor-pointer">Signin</Link>
                <Link to="/signup" className="bg-violet-600 rounded-2xl px-5 py-2 cursor-pointer text-white font-semibold">Signup</Link>
            </div>
        </div>
    )
}
export default NavBar