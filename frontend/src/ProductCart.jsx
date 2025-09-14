const ProductCart=()=>{
    return(
        <div className="border-1 border-black w-[300px] items-center flex flex-col gap-10 py-10 rounded-tl-2xl rounded-br-2xl shadow-lg shadow-amber-400">
            <img src="wallpaper1.jpg" alt=""  className="border-1 w-[200px] h-[200px] rounded-full"></img>
            <p className="font-bold text-4xl text-blue-500 ">Product 1 </p>
            <div className="flex flex-col gap-3 items-center">
            <p className="text-2xl text-gray-600 text-center">This is a sample product  which is very interesting</p>
            <p className="font-bold text-3xl text-green-700">Price: 2222/-</p>
            <button className="bg-blue-500 border-1 border-black w-[200px] h-[40px] text-blue-50 rounded-4xl cursor-pointer hover:bg-green-500 ">Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductCart