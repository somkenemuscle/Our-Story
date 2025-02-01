import { moviesWatched } from "@/constants/movies"


const Movies = () => {
    return (
        <div className="max-w-6xl mx-auto mt-32  py-10 mb-28">
            <h2 className="text-5xl font-bold text-black mb-2">Movies We've Watched Together 🎥</h2>
            <p className="text-gray-600 mb-10">From our first movie night to the latest! 🍿💖</p>

            {/* Grid Layout */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-6">
                    {moviesWatched.map((movie, index) => (
                        <div key={index} className="bg-neutral-800 rounded-2xl p-4 shadow-lg min-w-[230px]">
                            {/* Movie Image */}
                            <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover rounded-lg" />

                            {/* Movie Info */}
                            <div className="mt-3">
                                <h3 className="text-lg font-bold text-orange-200">{movie.title}</h3>
                                <p className="text-yellow-400 font-bold text-sm">⭐ {movie.rating}/10</p>
                                <p className="text-gray-100 text-sm mt-1">{movie.comment || "No comment"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies