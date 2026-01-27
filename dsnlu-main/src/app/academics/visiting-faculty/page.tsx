"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

const visitingFaculty = [
    {
        name: "Prof. (Dr.) David Ambrose",
        image: "https://dsnlu.ac.in/storage/2023/12/david.png",
        link: "https://dsnlu.ac.in/david-ambrose/",
    },
    {
        name: "Prof. (Dr.) A. Raghunadha Reddy",
        image: "https://dsnlu.ac.in/storage/2023/12/Prof-A-Raghunadha-Reddy.png",
        link: "https://dsnlu.ac.in/prof-a-raghunadha-reddy/",
    },
    {
        name: "Prof. (Dr.) Reddivari Revathi",
        image: "https://dsnlu.ac.in/storage/2023/12/Prof-Reddivari-Revathi-1-1.png",
        link: "https://dsnlu.ac.in/prof-reddivari-revathi/",
    },
    {
        name: "Prof. (Dr.) Balraj Chauhan",
        image: "https://dsnlu.ac.in/storage/2023/04/Prof.-Balraj-Chauhan.jpg",
        link: "",
    },
    {
        name: "Prof. (Dr.) K.I.Vibhute",
        image: "https://dsnlu.ac.in/storage/2023/04/Prof.-K.I.Vibhute.jpg",
        link: "https://dsnlu.ac.in/professor-dr-khushal-vibhute/",
    },
    {
        name: "Prof. (Dr.) Mehraj Uddin Mir",
        image: "https://dsnlu.ac.in/storage/2023/04/Prof.-Mehraj-Uddin-Mir.jpg",
        link: "",
    },
    {
        name: "Prof. (Dr.) M. Prasada Rao",
        image: "https://dsnlu.ac.in/storage/2023/12/Dr-M-Prasada-Rao.png",
        link: "",
    },
];

export default function VisitingFacultyPage() {
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
                        Visiting Faculty
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {visitingFaculty.map((member, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden border-none shadow-md transition-all hover:shadow-xl"
                        >
                            <CardContent className="p-0">
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    {member.link && (
                                        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-white transition-transform duration-300 group-hover:translate-y-0">
                                            <a
                                                href={member.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block rounded-md bg-dsnlu-lime px-4 py-2 text-xs font-bold text-dsnlu-dark-blue hover:bg-white"
                                            >
                                                View Profile
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-white p-4 text-center">
                                    <h3 className="mb-1 text-lg font-bold text-dsnlu-dark-blue">
                                        {member.name}
                                    </h3>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
