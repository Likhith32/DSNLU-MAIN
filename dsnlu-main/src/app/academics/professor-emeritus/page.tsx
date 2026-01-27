"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { FileText } from "lucide-react";

export default function ProfessorEmeritusPage() {
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
                        Professor Emeritus / Distinguished Professor
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="overflow-hidden border-none shadow-lg transition-all hover:shadow-xl">
                    <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                            {/* Image Section */}
                            <div className="w-full md:w-1/3 lg:w-1/4">
                                <div className="relative h-[300px] w-full md:h-full">
                                    <Image
                                        src="https://dsnlu.ac.in/storage/2024/01/DVVS.jpg"
                                        alt="Hon&rsquo;ble Justice D.V.S.S. Somayajulu"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex w-full flex-col justify-center p-6 md:w-2/3 md:p-10 lg:w-3/4">
                                <h2 className="mb-2 text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                    Hon&rsquo;ble Justice D.V.S.S. Somayajulu
                                </h2>
                                <div className="mb-6 h-1 w-16 bg-dsnlu-azure" />
                                <p className="mb-6 text-lg leading-relaxed text-slate-700">
                                    Former Judge, High Court of A.P. &amp;<br />
                                    Member General Council, Executive Council &amp; Academic Council,
                                    DSNLU.
                                </p>
                                <div>
                                    <a
                                        href="https://dsnlu.ac.in/professor-emeritus/honble-justice-d-v-s-s-somayajulu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-dsnlu-azure px-6 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-dsnlu-dark-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dsnlu-azure disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        <FileText className="mr-2 h-4 w-4" />
                                        Bio Data
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
