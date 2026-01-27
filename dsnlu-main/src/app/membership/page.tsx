"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";

const memberships = [
    {
        name: "Indian Law Institute (ILI), New Delhi",
        logo: "https://dsnlu.ac.in/storage/2023/01/Indian_Law_Institute_Logo.png",
    },
    {
        name: "Association of Indian Universities (AIU), New Delhi",
        logo: "https://dsnlu.ac.in/storage/2023/01/AIU_Logo.png",
    },
    {
        name: "Indian Society of International Law (ISIL), New Delhi",
        logo: "https://dsnlu.ac.in/storage/2023/01/ISIL_Logo.png",
    },
];

export default function MembershipPage() {
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
                        MEMBERSHIP
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-dsnlu-dark-blue">
                        The University is a Member of the following institutions:
                    </h3>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {memberships.map((member, index) => (
                        <Card key={index} className="border-none shadow-md transition-shadow hover:shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                                <div className="relative mb-6 h-32 w-32">
                                    <Image
                                        src={member.logo}
                                        alt={member.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h5 className="text-lg font-semibold text-slate-800">
                                    {member.name}
                                </h5>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
