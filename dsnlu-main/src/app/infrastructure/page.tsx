"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

const hostelImages = [
    "https://dsnlu.ac.in/storage/2025/01/G2.jpg",
    "https://dsnlu.ac.in/storage/2024/07/New-Girls-Hostel.jpeg",
    "https://dsnlu.ac.in/storage/2022/12/DSC_4854.jpg",
    "https://dsnlu.ac.in/storage/2022/12/DSC_4833.jpg",
];

const messImages = [
    "https://dsnlu.ac.in/storage/2022/12/3-768x512-1.jpg",
    "https://dsnlu.ac.in/storage/2022/12/8-1024x683-1.jpg",
];

const sportsImages = [
    "https://dsnlu.ac.in/storage/2024/07/i1.jpeg",
    "https://dsnlu.ac.in/storage/2024/07/i2.jpeg",
    "https://dsnlu.ac.in/storage/2024/07/i3.jpeg",
    "https://dsnlu.ac.in/storage/2024/07/i4-2.jpg",
    "https://dsnlu.ac.in/storage/2022/12/FB_IMG_1574614349171-1024x680-1.jpg",
    "https://dsnlu.ac.in/storage/2022/12/IMG_20191123_082712.jpg",
    "https://dsnlu.ac.in/storage/2022/12/FB_IMG_1574614137979-1024x682-1.jpg",
];

const medicalImages = [
    "https://dsnlu.ac.in/storage/2022/12/abulance-1.png",
    "https://dsnlu.ac.in/storage/2022/12/abulance-2.png",
];

export default function InfrastructurePage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="INFRASTRUCTURE" />

            <div className="container mx-auto mt-12 space-y-12 px-4">
                {/* Intro Section */}
                <Card className="border-none shadow-lg">
                    <CardContent className="p-8 text-lg leading-relaxed text-slate-700">
                        <p>
                            DSNLU state-of-the-art, technologically advanced and eco-friendly
                            campus is situated in 45.5 acres abutting the hill. DSNLU campus
                            has fully air-conditioned Academic Block, Wi-Fi enabled with LAN
                            facility. The University is a part of National Knowledge Network
                            whereas the Government of India has provided 1GBPS connectivity to
                            the University. Boys and Girls Hostels consists of 160 rooms each
                            with two students’ accommodation in a room as per the University
                            Rules. DSNLU has canteen building accommodating 350 students at a
                            time. DSNLU has 11 KV Sub-station with two 320 KVA backup
                            generators, 1.5 KLD capacity Sewage Treatment Plant, Andhra Bank
                            ATM. 350 Kwp Roof Top Solar Power Plant is also established. The
                            students are facilitated with a world-class library which provides
                            access to online resources like Westlaw India, Hein Online, SCC
                            online, Lexis Nexis, Kluwer Competition Law, Kluwer IP Law, Kluwer
                            Arbitration, Taxmann, JSTOR, Economic and Political Weekly and
                            Manupatra for intensive research. The online resources are
                            available through RemoteXs. Further, DSNLU adopts Turnitin, an
                            anti-plagiarism web tool. All the classrooms are equipped with LCD
                            projectors, internet and public address system. DSNLU Moot Court
                            Hall is a splendor in its own way. The University has seminar and
                            conference hall that are made available for conducting meetings
                            and organizing guest lectures.
                        </p>
                    </CardContent>
                </Card>

                {/* Academic Block */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            ACADEMIC BLOCK
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 text-lg leading-relaxed text-slate-700">
                        <p>
                            Academic Block is fully air conditioned and disabled friendly with
                            fire & safety equipment. The Infrastructure consists of 11 Class
                            Rooms, 400 seater Seminar Hall, 2 Conference Halls, Moot Court
                            Hall and Library. The Academic Block is fully connected with WIFI
                            & LAN facility provided by 1GBPs NKN-MHRD all the class rooms and
                            seminars halls are provided with public address systems and LCD
                            projectors.
                        </p>
                    </CardContent>
                </Card>

                {/* Boys and Girls Hostels */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            BOYS AND GIRLS HOSTELS
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {hostelImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Hostel Image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Hostels for Boys and Girls have 160 rooms each on twin sharing
                            basis and amenities including solar powered Hot water/ R.O. for
                            drinking water / WI-FI and LAN. Two Badminton courts and table
                            Tennis Boards and Gym with Latest equipment are available in both
                            the Hostels.
                        </p>
                    </CardContent>
                </Card>

                {/* Mess */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            MESS
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {messImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[3/2] overflow-hidden rounded-lg border border-slate-200 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Mess Image ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-lg leading-relaxed text-slate-700">
                            DSNLU CANTEEN HAS TWO MESS HALLS MANAGED BY STUDENT COMMITTEE
                            PROVIDING NORTH AND SOUTH CUISINES.
                        </p>
                    </CardContent>
                </Card>

                {/* Sports and Gym Facility */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            SPORTS AND GYM FACILITY
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {sportsImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Sports Facility ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-lg leading-relaxed text-slate-700">
                            Sports, all the while being important physical exercise, also help
                            develop the character of a human being, by teaching them the
                            importance of discipline and practice and imparting the important
                            lesson of team work. Hence, the sports committee has undertaken
                            the responsibility of inculcating the environment of Sports in
                            DSNLU. The work that the sports committee does inside the
                            university is very well-complimented by the sports infrastructure
                            of our campus. DSNLU provides badminton courts, Table Tennis
                            table(s) and a gym in both the hostels. DSNLU also has a football
                            field, 2 cricket pitches, 2 volleyball grounds, a basketball
                            court, and a lawn tennis court.
                        </p>
                    </CardContent>
                </Card>

                {/* Transport Facility */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            TRANSPORT FACILITY
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="mb-6 overflow-hidden rounded-lg border border-slate-200 shadow-sm md:w-2/3">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="https://dsnlu.ac.in/storage/2023/01/transport.jpg"
                                    alt="Transport Facility"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 66vw"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Medical Center */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            MEDICAL CENTER AND AMBULANCE HEALTH CENTRE
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {medicalImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 shadow-sm"
                                >
                                    <Image
                                        src={src}
                                        alt={`Medical Facility ${index + 1}`}
                                        fill
                                        className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
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
