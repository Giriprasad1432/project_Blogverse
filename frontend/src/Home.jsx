const Home = () => {

    const Posts = [{
        id: 1,
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
        id: 2,
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
        <div className="mt-10 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-center">Welcome to BlogVerse</h1>
                <h1 className="text-2xl text-gray-500 w-200 text-center">Discover amazing stories, insights, and ideas from our community of writers.Sign in to create your own posts and save your favorites.</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-[70%] mt-10 justify-center">
                {Posts.map((post) => {
                    return (
                        <div className=" ">
                            <img src={post.img} className="w-90 h-50"></img>
                            <div className="flex gap-2">
                            <img src={post.author_img} className="border-1 rounded-full w-10 h-10"></img>
                            <div className="flex flex-col">
                            <p className="font-semibold">{post.author_name}</p>
                            <p className="">{post.posted_time}</p>
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