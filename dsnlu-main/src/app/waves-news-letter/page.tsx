"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

const newsletterImages = [
    "https://dsnlu.ac.in/storage/2023/01/waves_Vol.V-Issue-1-2-232x300-1.jpg",
    "https://dsnlu.ac.in/storage/2023/01/waves-4-1.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Waves-3-2.jpg",
    "https://dsnlu.ac.in/storage/2023/01/waves-3-1.jpg",
    "https://dsnlu.ac.in/storage/2023/01/waves-1-2.jpg",
    "https://dsnlu.ac.in/storage/2023/01/Waves-4-2.jpg",
];

export default function WavesNewsLetterPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="WAVES NEWS-LETTER" />

            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            WAVES NEWS-LETTER
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {newsletterImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[3/4] overflow-hidden rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md"
                                >
                                    <Image
                                        src={src}
                                        alt={`WAVES News-Letter Vol ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
