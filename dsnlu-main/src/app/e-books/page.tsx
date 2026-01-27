"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

const ebooks = [
    {
        title: "Cambridge E-Books",
        image: "https://dsnlu.ac.in/storage/2024/03/Cambridge.jpg",
        link: "https://www.cambridge.org/core",
    },
    {
        title: "EBC Reader",
        image: "https://dsnlu.ac.in/storage/2022/12/ebc-reader.png",
        link: "https://www.ebcreader.com/",
    },
    {
        title: "Lexis Knowledge",
        image: "https://dsnlu.ac.in/storage/2023/01/lexisnexis-logo1.png",
        link: "https://knowledge.lexisnexis.in/",
    },
];

export default function EBooksPage() {
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
                        E-BOOKS
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ebooks.map((ebook, index) => (
                        <Link
                            key={index}
                            href={ebook.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <CardContent className="p-4 flex flex-col items-center justify-center h-full gap-4">
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-white">
                                        <Image
                                            src={ebook.image}
                                            alt={ebook.title}
                                            fill
                                            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-center font-bold text-dsnlu-dark-blue group-hover:text-dsnlu-azure transition-colors line-clamp-2">
                                        {ebook.title}
                                    </h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
