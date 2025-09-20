import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { Eye } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';
import { EyeClosed } from 'lucide-react';
import { useState } from "react"
const SignIn = () => {
    const [ShowPassword, setShowPassword] = useState(false)
    const handlePassword = () => {
        setShowPassword((password) => !password)
    }
    return (
        <div className="flex flex-col items-center gap-20">
            <NavBar />
            <form className="flex flex-col w-1/4 gap-5 border-1 rounded-2xl px-5 py-5 bg-white border-gray-300 shadow-lg shadow-gray-400 items-center">
                <div className="flex flex-col items-center">
                    <h className="font-bold text-2xl ">SignIn</h>
                    <p className="text-gray-600">Access your account</p>
                </div>
                <div className="w-[90%] flex flex-col gap-2 focus:outline-none focus:border-blue-400">
                    <p className="font-semibold text-gray-700 ">Email address</p>
                    <div className="relative">
                    <input type="email" className="border-1 border-gray-400 rounded-2xl h-15 px-10 w-full" placeholder="enter your email"></input>
                    <Mail className="text-gray-400 absolute left-3 top-5 " />
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2 focus:outline-none focus:border-blue-400">
                    <p className=" font-semibold text-gray-700 ">Password</p>
                    <div className="relative">
                        <input type={ShowPassword ? "text" : "password"} className="border-1 border-gray-400 rounded-2xl h-15 pl-10 w-full" placeholder="enter password"></input>
                        <p onClick={handlePassword}>{ShowPassword ? <EyeClosed className="text-gray-400 absolute right-3 top-5" /> : <Eye className="text-gray-400 absolute right-3 top-5" />}</p>
                        <KeyRound className="text-gray-400 absolute left-3 top-5 " />
                    </div>
                </div>
                <div className="flex justify-between items-center w-[90%]">
                    <div className="flex gap-2">
                        <input type="checkbox" className=""></input>
                        <p className="font-semibold text-gray-700">Remember me</p>
                    </div>
                    <a href="" alt="" className="font-semibold  text-blue-800 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="border-1 font-bold bg-violet-800 rounded-2xl h-15 text-white px-5 py-2 w-[90%]">Sign In</button>
                <p className="text-gray-500 font-semibold">Dont Have an account?  <Link to="/signup" className="text-purple-700 cursor-pointer hover:underline">Create one here</Link></p>
            </form>
        </div>
    )
}
export default SignIn