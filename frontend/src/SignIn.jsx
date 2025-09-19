const SignIn = () => {
    return (
        <div className="flex flex-col items-center mt-25">
            <form className="flex flex-col w-1/4 gap-5 border-1 rounded-2xl px-5 py-5 bg-white border-gray-300 shadow-lg shadow-gray-400 items-center">
                <div className="flex flex-col items-center">
                    <h className="font-bold text-2xl ">SignIn</h>
                    <p className="text-gray-600">Access your account</p>
                </div>
                <div className="w-[90%] flex flex-col gap-2 focus:outline-none focus:border-blue-400">
                    <p className="font-semibold text-gray-700 ">Email address</p>
                    <input type="email" className="border-1 border-gray-400 rounded-2xl h-15 pl-2" placeholder="enter your email"></input>
                </div>
                <div className="w-[90%] flex flex-col gap-2 focus:outline-none focus:border-blue-400">
                    <p className=" font-semibold text-gray-700 ">Password</p>
                    <input type="password" className="border-1 border-gray-400 rounded-2xl h-15 pl-2" placeholder="enetr password"></input>
                </div>
                <div className="flex justify-between items-center w-[90%]">
                    <div className="flex gap-2">
                        <input type="checkbox" className=""></input>
                        <p className="font-semibold text-gray-700">Remember me</p>
                    </div>
                    <a href="" alt="" className="font-semibold  text-blue-800 hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="border-1 font-bold bg-violet-800 rounded-2xl h-15 text-white px-5 py-2 w-[90%]">Sign In</button>

            </form>
        </div>
    )
}
export default SignIn