"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

const publicationImages = [
    "https://dsnlu.ac.in/storage/2023/01/2.jpg",
    "https://dsnlu.ac.in/storage/2023/01/1.jpg",
    "https://dsnlu.ac.in/storage/2023/01/5.jpg",
    "https://dsnlu.ac.in/storage/2023/01/3.jpg",
    "https://dsnlu.ac.in/storage/2023/01/15.jpg",
    "https://dsnlu.ac.in/storage/2023/01/4.jpg",
    "https://dsnlu.ac.in/storage/2023/01/6.jpg",
    "https://dsnlu.ac.in/storage/2023/01/7.jpg",
    "https://dsnlu.ac.in/storage/2023/01/9.jpg",
    "https://dsnlu.ac.in/storage/2023/01/8.jpg",
    "https://dsnlu.ac.in/storage/2023/01/10.jpg",
    "https://dsnlu.ac.in/storage/2023/01/11.jpg",
    "https://dsnlu.ac.in/storage/2023/01/12.jpg",
    "https://dsnlu.ac.in/storage/2023/01/13.jpg",
    "https://dsnlu.ac.in/storage/2023/01/14.jpg",
];

export default function DsnluPublicationsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="DSNLU Publications" />

            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            DSNLU Publications
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 text-slate-700 leading-relaxed">
                        <p className="mb-8 text-justify">
                            An institution for higher learning must promote scholarship that
                            engages with practical questions as well as the moral and
                            philosophical dilemmas that arise in contemporary life. In
                            addition to its full-time taught programmes and initiatives in
                            proximate education, DSNLU University of Law provides an enabling
                            environment for its faculty members, research scholars and
                            students to actively contribute to the production of knowledge in
                            legal studies as well as cognate disciplines such as political
                            science, history, economics, sociology and business studies among
                            others. Our faculty members have authored several book-length
                            studies, chapters in longer compilations, scholarly articles in
                            peer-reviewed journals, research-based surveys and opinion pieces
                            in leading newspapers and magazines. Our research scholars
                            enrolled in the PhD. programme are encouraged to produce innovate
                            and creative legal scholarship that blends methods and insights
                            drawn from several disciplines The curricular design of the
                            undergraduate and postgraduate courses gives students regular
                            opportunities to hone their research and writing skills, with many
                            of them successfully developing their written assignments into
                            scholarly publications.
                        </p>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {publicationImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-[3/4] overflow-hidden rounded-lg border border-slate-200 shadow-sm transition-transform hover:scale-105 hover:shadow-md"
                                >
                                    <Image
                                        src={src}
                                        alt={`DSNLU Publication ${index + 1}`}
                                        fill
                                        className="object-cover"
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
