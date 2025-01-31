import { gamesPlayed } from "@/constants/gamesPlayed";


export const GamesPlayed = () => {
    return (
        <section className="bg-neutral-900 py-32 text-white text-sm">
            <div className="max-w-6xl mx-auto overflow-x-auto">
                <h1 className="text-5xl font-semibold text-left text-orange-100 mb-1">
                    Games We've Played 🎮
                </h1>
                <p className='mb-8'>A leaderboard of all the fun games we have played &lt;3</p>

                <table className="w-full border-collapse border border-neutral-700 rounded-3xl">
                    <thead>
                        <tr className="bg-neutral-800 text-orange-200">
                            <th className="p-3 border border-neutral-700">Game</th>
                            <th className="p-3 border border-neutral-700">Winner</th>
                            <th className="p-3 border border-neutral-700">Played</th>
                            <th className="p-3 border border-neutral-700">Wins (Som)</th>
                            <th className="p-3 border border-neutral-700">Wins (Zayy)</th>
                            <th className="p-3 border border-neutral-700">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gamesPlayed.map((game, index) => (
                            <tr key={index} className="text-center">
                                <td className="p-3 border border-neutral-700">{game.name}</td>
                                <td
                                    className={`p-3 border border-neutral-700 font-medium ${game.winner === "Somkene"
                                        ? "text-red-400"
                                        : game.winner === "Zainab"
                                            ? "text-blue-400"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {game.winner}
                                </td>
                                <td className="p-3 border border-neutral-700">{game.played}</td>
                                <td className="p-3 border border-neutral-700">{game.wins.Somkene}</td>
                                <td className="p-3 border border-neutral-700">{game.wins.Zainab}</td>
                                <td className="p-3 border border-neutral-700 text-gray-300">
                                    {game.comment || "No comment"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    )
}
