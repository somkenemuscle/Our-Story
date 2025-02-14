'use client'

import confetti from "canvas-confetti";
import { useEffect } from "react";
import { Hero_Section_videos } from "@/constants/videos";

const HeroSection = () => {
    useEffect(() => {
        confetti({
            particleCount: 700,
            spread: 7000,
            origin: { x: 0.5, y: 1 },
        });
    }, []);


    return (
        <section className="bg-neutral-950 py-24">
            <div className="py-20">
                <section className="hero-status-container flex flex-col items-center mb-3">
                    <span className="hero-status-bitmoji mb-2"><img className="w-14 h-14 hover:scale-105 transition-all duration-1000 rounded-full animate-spin"
                        style={{ animationDuration: "3s" }}
                        src="https://cdn.pixabay.com/photo/2011/12/13/14/31/earth-11015_1280.jpg" />
                    </span>
                    <div className="text-pink-50 bg-black w-fit hero-status-info px-4 py-2 text-xs rounded tracking-wide font-light">
                        <span className="animate-pulse-ring inline-block bg-pink-400 rounded-full w-2 h-2 mr-2"></span>
                        {" "} Happy <span className="font-medium"><i>18th</i></span> Birthday <span className="font-medium"><i>My Love</i></span>  🎉
                    </div>
                </section>
                <header className="text-orange-100 font-semibold text-6xl text-center">The Documented <br />
                    <span className="font-light bg-gradient-to-r from-pink-500 to-yellow-300 text-transparent bg-clip-text"> <i>Story </i></span>
                    Of Us!
                </header>
                <p className="text-center text-gray-300  font-mono text-sm mt-4">A Journey From <span className="font-bold">
                    First Hello </span>👋 to<span className="font-bold"> Forever!</span>
                </p>

                {/* video section */}
                <section className="bg-neutral-900 mt-20 p-10 rounded-3xl border max-w-5xl mx-auto cursor-pointer  border-neutral-700">
                    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                        {Hero_Section_videos.map((video, index) => (
                            <div
                                key={index}
                                className="rounded-3xl overflow-hidden flex-shrink-0 w-full md:w-[30%]">
                                <video className="w-full" src={video} autoPlay muted playsInline></video>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HeroSection