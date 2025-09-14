const SignUp=()=>{


    return(
        <div className="flex flex-col items-center mt-10 gap-5">
            <h1 className="font-bold text-2xl text-blue-400">Join BlogVerse</h1>
            <p className="text-gray-500 text-xl text-center font-semibold">Create your Account <br/> start your journey with BlogVerse</p>
            <form className="flex flex-col border-1 border-gray-400 rounded-2xl shadow-lg shadow-gray-500 hover:shadow-black w-1/3 py-7 items-center gap-5">
                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Full Name</p>
                    <input placeholder="Enter full Name" 
                    className="border-1 border-black w-full py-2 px-3 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                    </input>
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Email</p>
                    <input type="email" placeholder="Enter Email" 
                    className="border-1 border-black w-full py-2 px-3 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                    </input>
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Pasword</p>
                    <input type="password" placeholder="Enter Password" 
                    className="border-1 border-black w-full py-2 px-3 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                    </input>
                </div>

                <div className="w-[90%] flex flex-col gap-2">
                    <p className="text-md text-gray-700 font-semibold">Conform Password</p>
                    <input type="password" placeholder="Re-enter Password" 
                    className="border-1 border-black w-full py-2 px-3 rounded-2xl focus:outline-none
                     focus:border-purple-500 focus:shadow-lg focus:shadow-purple-400">
                    </input>
                </div>  

                <div className="flex gap-2 border-1 border-gray-800 w-[90%] p-3 items-center justify-center">
                    <input type="checkbox" className="h-5 w-5 cursor-pointer"></input>
                    <p>I agree to the terms and conditions</p>
                </div>
               
                <button className="text-white border-1 bg-purple-500 font-semibold p-3 rounded-2xl cursor-pointer">Create Account</button>
               
                <div className="border-[0.5px] border-gray-500 w-[90%] mt-4"></div>

                <p className="text-gray-500 font-semibold">Already have an account?<span className="text-purple-700 cursor-pointer">Sign In here</span></p>
                
                <button className="hover:bg-gray-500 cursor-pointer py-4 px-3 rounded-xl w-[90%]">Back to Home</button>
            </form>
        </div>
    )

}
export default SignUp