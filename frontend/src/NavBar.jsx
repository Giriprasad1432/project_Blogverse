const NavBar=()=>{
    return(
        <div className="border-b-1 flex justify-around h-16 items-center shadow-lg shadow-violet-100 border-b-gray-400">
            <h1 className="text-2xl font-bold">BlogVerse</h1>
            <button className="border-1 hover:bg-violet-400 text-black h-12 rounded-2xl px-5 py-2 cursor-pointer">Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-600 cursor-pointer">Signin</button>
                <button className="bg-violet-600 rounded-2xl px-5 py-2 cursor-pointer text-white font-semibold">Signup</button>
            </div>
        </div>
    )
}
export default NavBar