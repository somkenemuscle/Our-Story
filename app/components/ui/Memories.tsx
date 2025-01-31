'use client'
import { Memories_Section_videos } from "@/constants/videos"
import { useState } from "react";

const Memories = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeMemory, setActiveMemory] = useState<Memory | null>(null);

    const openModal = (memory: any) => {
        setActiveMemory(memory);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setActiveMemory(null);
    };


    return (
        <section className="bg-neutral-900 py-24">
            <div className="max-w-6xl mx-auto text-white">
                <h1 className="text-6xl font-semibold mb-3 text-orange-50">Some Of Our Special Memories</h1>
                <p className="text-gray-300">We've shared so many beautiful moments together.
                    Here are some of our favorites since we met!
                </p>

                {/* video section */}
                <section className="border border-neutral-700 p-12 mt-10 rounded-3xl cursor-pointer">
                    <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
                        {Memories_Section_videos.map((memory, index) => (
                            <div
                                key={index}
                                className="rounded-3xl overflow-hidden flex-shrink-0 w-full md:w-[30%]">
                                <video onClick={() => openModal(memory)} className="w-full rounded-3xl" src={memory.video} autoPlay muted playsInline></video>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modal */}
                {showModal && activeMemory && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                        <div className="relative bg-neutral-950 border border-neutral-800 p-10 rounded-3xl  mx-auto overflow-y-auto max-h-screen w-full pt-40">
                            {/* Close Button */}
                            <button onClick={closeModal} className="absolute top-4 right-4 text-red-600 text-2xl font-bold">
                                &times;
                            </button>

                            {/* Modal Content */}
                            <h2 className="text-xl font-bold mb-2 text-left">{activeMemory.title}</h2>
                            <p className="text-gray-400 mb-6 text-left">{activeMemory.description}</p>

                            {/* Images */}
                            <div className="grid grid-cols-3 gap-4">
                                {activeMemory.images.length !== 0 && (activeMemory.images.map((image: string, idx: number) => (
                                    <img
                                        key={idx}
                                        src={image}
                                        alt={`Memory ${idx + 1}`}
                                        className="w-fit h-fit object-cover rounded-lg"
                                    />
                                )))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Memories