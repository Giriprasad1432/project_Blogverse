import NavBar from "./NavBar"
const Home = () => {

    const Posts = [{
        id: 1,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "prem.jpg",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    },
    {
        id: 2,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "prem.jpg",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    },
    {
        id: 3,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "img1",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    },
    {
        id: 4,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "img1",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    },
    {
        id: 5,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "img1",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    },
    {
        id: 6,
        img: "wallpaper1.jpg",
        author_name: "Prem",
        author_img: "img1",
        posted_time: "1 hour ago",
        read_time: "100 min read",
        title: "The Theory of Evolution",
        category: "Environment",
        description: "The theory of evolution states that all living things are related and have descended from common ancestors, gradually changing over vast periods through a process called natural selection"
    }
    ]



    return (
        <div className=" flex flex-col items-center justify-center ">
            <NavBar/>
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-center mt-4">Welcome to BlogVerse</h1>
                <h1 className="text-2xl text-gray-500 w-200 text-center">Discover amazing stories, insights, and ideas from our community of writers.<span className="cursor-pointer hover:underline text-blue-400">Sign in</span> to create your own posts and save your favorites.</h1>
            </div>
            <div className="flex flex-wrap gap-15 w-[70%] mt-10 justify-center">
                {Posts.map((post) => {
                    return (
                        <div className="transition-transform duration-500 border-1 border-gray-300 rounded-2xl shadow-lg shadow-gray-300 w-100 hover:shadow-gray-500 hover:scale-101">
                            <div className="relative flex">
                                <img src={post.img} className="w-full h-50 rounded-t-2xl "></img>
                                <button className="rounded-full absolute right-4 top-4 border-1 text-white">save</button>
                                <p className="bg-blue-500 text-white rounded-2xl absolute left-4 top-4 px-2 py-1 font-semibold text-xs ">{post.category}</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-3 px-4">
                                <div className="flex gap-2 px-2 item">
                                    <img src={post.author_img} className="border-1 rounded-full w-10 h-10"></img>
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{post.author_name}</p>
                                        <p className="text-xs">{post.posted_time}</p>
                                    </div>
                                </div>
                                <p className="px-3 font-bold text-lg hover:text-blue-500 cursor-pointer">{post.title}</p>
                                <p className="px-3 text-sm text-gray-500">{post.description}</p>
                                <div className="border-1 border-gray-300"></div>
                                <div className="flex justify-between py-2">
                                    <p className="text-sm px-2 py-1">{post.read_time}</p>
                                    <p className="text-blue-500">Read more</p>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

        </div>
    )
}
export default Home