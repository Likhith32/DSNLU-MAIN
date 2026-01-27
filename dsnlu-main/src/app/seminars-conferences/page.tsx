"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Calendar, PlayCircle, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define types for our data
type EventImage = {
    src: string;
    alt: string;
};

type VideoLink = {
    title?: string;
    url: string;
    thumbnail?: string;
};

type Event = {
    title: string;
    date?: string;
    description?: string;
    images?: EventImage[];
    videos?: VideoLink[];
    guests?: {
        role: string;
        name: string;
        designation: string;
    }[];
};

type YearData = {
    [year: string]: Event[];
};

const seminarsData: YearData = {
    "2025": [
        {
            title: "Three Day Residential Legal Refreshing Programme by The Bar Council of A.P in Collaboration with DSNLU, VSKP",
            date: "12th - 14th June 2025",
            description: "Day 1 (12th June), Day 2 (13th June), Day 3 (14th June)",
            images: [
                { src: "https://dsnlu.ac.in/storage/2025/06/1-2-scaled.webp", alt: "Day 1 Image 1" },
                { src: "https://dsnlu.ac.in/storage/2025/06/2-2-scaled.webp", alt: "Day 1 Image 2" },
                { src: "https://dsnlu.ac.in/storage/2025/06/3-7-scaled.webp", alt: "Day 1 Image 3" },
                { src: "https://dsnlu.ac.in/storage/2025/06/26-1-scaled.webp", alt: "Day 2 Image 1" },
                { src: "https://dsnlu.ac.in/storage/2025/06/24-1-scaled.webp", alt: "Day 2 Image 2" },
                { src: "https://dsnlu.ac.in/storage/2025/06/1-4-scaled.webp", alt: "Day 3 Image 1" },
                { src: "https://dsnlu.ac.in/storage/2025/06/4-4-scaled.webp", alt: "Day 3 Image 2" },
                // Adding a subset of images to avoid overwhelming the page, user can add more if needed
            ],
        },
    ],
    "2024": [
        {
            title: "Lectures Delivered by Hon'ble Justice Ananya Bandyopadhyay",
            date: "28th September 2024",
            description: "Subjects: Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Sakshya Adhiniyam (BSA)",
            images: [
                { src: "https://dsnlu.ac.in/storage/2024/10/4.jpeg", alt: "Lecture Image 1" },
                { src: "https://dsnlu.ac.in/storage/2024/10/3.jpeg", alt: "Lecture Image 2" },
                { src: "https://dsnlu.ac.in/storage/2024/10/2.jpeg", alt: "Lecture Image 3" },
                { src: "https://dsnlu.ac.in/storage/2024/10/1.jpeg", alt: "Lecture Image 4" },
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=mvMY22jt1GM", thumbnail: "https://i3.ytimg.com/vi/mvMY22jt1GM/maxresdefault.jpg" },
                { url: "https://www.youtube.com/watch?v=qzpZ5UwrwzA", thumbnail: "https://i3.ytimg.com/vi/qzpZ5UwrwzA/maxresdefault.jpg" },
                { url: "https://www.youtube.com/watch?v=KzMH2Y5Qaes", thumbnail: "https://i3.ytimg.com/vi/KzMH2Y5Qaes/maxresdefault.jpg" },
            ],
        },
        {
            title: "Interaction Session on 'LEGAL EDUCATION & PROFESSION - CONTEMPORARY ISSUES AND CHALLENGES'",
            date: "6th September 2024",
            videos: [
                { url: "https://www.youtube.com/watch?v=Tayzzt--dOg", thumbnail: "https://i3.ytimg.com/vi/Tayzzt--dOg/maxresdefault.jpg" },
            ],
            images: [
                { src: "https://dsnlu.ac.in/storage/2024/09/1-3.jpeg", alt: "Interaction Session Image 1" },
                { src: "https://dsnlu.ac.in/storage/2024/09/2-3.jpeg", alt: "Interaction Session Image 2" },
                { src: "https://dsnlu.ac.in/storage/2024/09/3-3.jpeg", alt: "Interaction Session Image 3" },
            ],
        },
        {
            title: "NHRC-DSNLU Rights of Fisher Men",
            date: "31st August 2024",
            images: [
                { src: "https://dsnlu.ac.in/storage/2024/09/16.jpg", alt: "Fisher Men Rights Image 1" },
                { src: "https://dsnlu.ac.in/storage/2024/09/10.jpg", alt: "Fisher Men Rights Image 2" },
                { src: "https://dsnlu.ac.in/storage/2024/09/1.jpg", alt: "Fisher Men Rights Image 3" },
                { src: "https://dsnlu.ac.in/storage/2024/09/12.jpg", alt: "Fisher Men Rights Image 4" },
            ],
        },
        {
            title: "One Day Awareness and Capacity Building Program: 'Rise and Lead: Young Women Pioneering Technology, Business and Public Life'",
            date: "27th April 2024",
            description: "Organized by National Commission for Women, New Delhi in collaboration with DSNLU.",
            guests: [
                { role: "CHIEF GUEST", name: "Hon’ble Smt. Justice Venkata Jyothirmai Pratapa", designation: "Judge, High Court of Andhra Pradesh" },
                { role: "GUEST OF HONOUR", name: "Sri A. Asholi Chalai", designation: "Joint Secretary, National Commission for Women, New Delhi" },
            ],
            videos: [
                { url: "https://www.youtube.com/watch?v=pomkbY649cw", thumbnail: "https://i3.ytimg.com/vi/pomkbY649cw/maxresdefault.jpg" },
            ],
            images: [
                { src: "https://dsnlu.ac.in/storage/2024/04/1-5.jpeg", alt: "NCW Program Image 1" },
                { src: "https://dsnlu.ac.in/storage/2024/04/2-5.jpeg", alt: "NCW Program Image 2" },
                { src: "https://dsnlu.ac.in/storage/2024/04/3-5.jpeg", alt: "NCW Program Image 3" },
            ],
        },
        {
            title: "Contribution of Indian Judiciary to Constitutional Jurisprudence – Recent Developments",
            date: "24th January 2024",
            description: "On the eve of Republic Day Celebrations.",
            guests: [
                { role: "CHIEF GUEST", name: "Hon’ble Justice N JAYA SURYA", designation: "Judge, High Court of A.P. & Member General Council, DSNLU." },
                { role: "GUEST OF HONOUR", name: "Hon’ble Justice D.V.S.S. Somayajulu", designation: "Former Judge, High Court of A.P." },
            ],
            images: [
                { src: "https://dsnlu.ac.in/storage/2024/01/1-scaled.webp", alt: "Republic Day Seminar Image 1" },
                { src: "https://dsnlu.ac.in/storage/2024/01/2-scaled.webp", alt: "Republic Day Seminar Image 2" },
                { src: "https://dsnlu.ac.in/storage/2024/01/3-scaled.webp", alt: "Republic Day Seminar Image 3" },
            ],
        },
    ],
};

export default function SeminarsConferencesPage() {
    const [activeYear, setActiveYear] = useState("2025");

    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            {/* Banner Section */}
            <div className="relative h-[300px] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://dsnlu.ac.in/storage/2022/12/about-us-bannar.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative container mx-auto flex h-full flex-col justify-center px-4 text-white">
                    <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                        SEMINARS & CONFERENCES
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {["2025", "2024"].map((year) => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                                activeYear === year
                                    ? "bg-dsnlu-azure text-white shadow-md"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Events List */}
                <div className="space-y-12">
                    {seminarsData[activeYear].map((event, index) => (
                        <Card key={index} className="border-none shadow-lg overflow-hidden">
                            <CardHeader className="bg-white border-b border-slate-100 pb-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                        {event.title}
                                    </CardTitle>
                                    {event.date && (
                                        <div className="flex items-center text-sm text-slate-500 shrink-0">
                                            <Calendar className="h-4 w-4 mr-2 text-dsnlu-lime" />
                                            {event.date}
                                        </div>
                                    )}
                                </div>
                                {event.description && (
                                    <p className="text-slate-600 mt-2">{event.description}</p>
                                )}
                            </CardHeader>
                            <CardContent className="p-6">

                                {/* Guests Section */}
                                {event.guests && (
                                    <div className="mb-8 grid gap-6 md:grid-cols-2 bg-slate-50 p-6 rounded-lg">
                                        {event.guests.map((guest, idx) => (
                                            <div key={idx}>
                                                <h4 className="text-sm font-bold text-dsnlu-azure uppercase tracking-wider mb-1">
                                                    {guest.role}
                                                </h4>
                                                <p className="font-semibold text-slate-800">{guest.name}</p>
                                                <p className="text-sm text-slate-600">{guest.designation}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Videos Section */}
                                {event.videos && event.videos.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="font-semibold text-dsnlu-dark-blue mb-4 flex items-center gap-2">
                                            <PlayCircle className="h-5 w-5 text-dsnlu-lime" />
                                            Event Videos
                                        </h4>
                                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                            {event.videos.map((video, idx) => (
                                                <a
                                                    key={idx}
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group relative block aspect-video rounded-lg overflow-hidden bg-black"
                                                >
                                                    {video.thumbnail ? (
                                                        <Image
                                                            src={video.thumbnail}
                                                            alt="Video Thumbnail"
                                                            fill
                                                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 flex items-center justify-center text-white">
                                                            Video Link
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <PlayCircle className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform" />
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Images Grid */}
                                {event.images && event.images.length > 0 && (
                                    <div>
                                        <h4 className="font-semibold text-dsnlu-dark-blue mb-4 flex items-center gap-2">
                                            <ImageIcon className="h-5 w-5 text-dsnlu-lime" />
                                            Event Gallery
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {event.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    <Image
                                                        src={img.src}
                                                        alt={img.alt}
                                                        fill
                                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
