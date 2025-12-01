import {Link} from "react-router-dom"
import {useState, useContext} from "react"
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { AppContext} from "./AppContext";
const NavBar=()=>{
    const [isDark , setDark]=useState(false)
    const handleDark= ()=>{
        setDark((isdark) => !isdark)
    }
    const {isOn,setIson}=useContext(AppContext);
    return(
        <div className="border-b-1 flex justify-around h-16 items-center shadow-lg border-b-gray-400 w-full">
            <h1 className="text-md lg:text-2xl font-bold">BlogVerse</h1>
            <Link to="/" className=" md:text-xl rounded-xl border-1 hover:bg-gray-400 text-black lg:h-12 md:rounded-2xl md:px-2  lg:px-5 lg:py-2 px-1 py-1 cursor-pointer border-gray-400">Home</Link>
            <div className="flex gap-5 justify-center items-center cursor-pointer">
                           <p onClick={()=> setIson(!isOn)}> {isOn ? <Sun className=" " />: <Moon className=" "/>} </p>   
                <Link to="/login" className="font-semibold text-white bg-violet-600 border-2 rounded-2xl px-2 py-2  cursor-pointer">Signin</Link>
                <Link to="/signup" className="bg-violet-600 rounded-2xl md:px-5 md:py-2 px-2 py-1 cursor-pointer text-white font-semibold">Signup</Link>
            </div>
        </div>
    )
}
export default NavBar