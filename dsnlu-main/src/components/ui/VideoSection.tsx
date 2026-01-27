"use client";

import { Play } from "lucide-react";
import { useState } from "react";

interface Video {
    id: string;
    thumbnail: string;
    title: string;
    youtubeId: string;
}

export function VideoSection() {
    const videos: Video[] = [
        {
            id: "1",
            thumbnail: "https://dsnlu.ac.in/storage/2024/04/DSNLU_campus-tour.png",
            title: "Campus Tour",
            youtubeId: "H007irJfzww",
        },
        {
            id: "2",
            thumbnail: "https://img.youtube.com/vi/ZEbiUBP-P7U/maxresdefault.jpg",
            title: "Campus Tour Part 2",
            youtubeId: "ZEbiUBP-P7U",
        },
    ];

    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold text-center mb-8 tracking-tight">
                    <span className="text-dsnlu-lime">Experience</span> DSNLU
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black"
                        >
                            {activeVideo === video.id ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0"
                                />
                            ) : (
                                <div
                                    className="absolute inset-0 cursor-pointer"
                                    onClick={() => setActiveVideo(video.id)}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 transform"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-dsnlu-azure/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg backdrop-blur-sm">
                                            <Play className="w-6 h-6 text-white fill-current ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-lg font-bold text-white">{video.title}</h3>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
