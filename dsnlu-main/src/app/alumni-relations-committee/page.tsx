"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Calendar, Image as ImageIcon } from "lucide-react";

export default function AlumniRelationsCommitteePage() {
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
                        ALUMNI RELATIONS COMMITTEE
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-8">
                {/* Intro Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="https://dsnlu.ac.in/storage/2022/12/1-1.png"
                        alt="Alumni Event 1"
                        className="w-full rounded-lg shadow-md"
                    />
                    <img
                        src="https://dsnlu.ac.in/storage/2022/12/2-1.png"
                        alt="Alumni Event 2"
                        className="w-full rounded-lg shadow-md"
                    />
                    <img
                        src="https://dsnlu.ac.in/storage/2022/12/3-1.png"
                        alt="Alumni Event 3"
                        className="w-full rounded-lg shadow-md"
                    />
                    <img
                        src="https://dsnlu.ac.in/storage/2022/12/4-1.png"
                        alt="Alumni Event 4"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>

                {/* Faculty / Staff Members */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Users className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Faculty / Staff Members
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left text-sm md:text-base">
                                <thead>
                                    <tr className="bg-dsnlu-azure text-white">
                                        <th className="px-4 py-3 font-semibold border border-dsnlu-azure" colSpan={3}>
                                            Committee Members
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200 font-bold text-dsnlu-dark-blue" colSpan={3}>
                                            Dr. P. Jogi Naidu (Convenor)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Dr. Rifat Khan</strong><br />Member
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Dr. A. Nageswara Rao</strong><br />Member
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Dr. B. Soma</strong><br />Member
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Dr. K. Sudha</strong><br />Member
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Dr. N. Bhagya Lakshmi</strong><br />Member
                                        </td>
                                        <td className="px-4 py-3 border border-slate-200">
                                            <strong>Ms. B. Madhuri</strong><br />Member
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Student Members */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                <Users className="h-6 w-6 text-dsnlu-lime" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Student Members
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                        {/* 5th Year */}
                        <div>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">5th Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm md:text-base">
                                    <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200">Lasya Charitha.K</td>
                                            <td className="px-4 py-3 border border-slate-200">Kuppili Havishnu Hanita</td>
                                            <td className="px-4 py-3 border border-slate-200">Palak Dogra</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 4th Year */}
                        <div>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">4th Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm md:text-base">
                                    <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200">Vijaya Hadassa M</td>
                                            <td className="px-4 py-3 border border-slate-200">Mihira Chakravarthy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3rd Year */}
                        <div>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">3rd Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm md:text-base">
                                    <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200">Vaaghdevi M</td>
                                            <td className="px-4 py-3 border border-slate-200">E. Likhitha</td>
                                            <td className="px-4 py-3 border border-slate-200">G. Bhavana reddy</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 2nd Year */}
                        <div>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">2nd Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm md:text-base">
                                    <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200">Jatan Mittal</td>
                                            <td className="px-4 py-3 border border-slate-200">Priyamvada Singh</td>
                                            <td className="px-4 py-3 border border-slate-200">Priyal</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200 text-center" colSpan={3}>
                                                Atkuri Sri Sai Venkata Ratna Sahishn
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 1st Year */}
                        <div>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">1st Year</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse text-left text-sm md:text-base">
                                    <tbody className="divide-y divide-slate-200 bg-white border border-slate-200">
                                        <tr>
                                            <td className="px-4 py-3 border border-slate-200">Aditya Akunuri</td>
                                            <td className="px-4 py-3 border border-slate-200">Kaushaki</td>
                                            <td className="px-4 py-3 border border-slate-200">Ruchitha Samhitha</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Events Section */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-azure/10 rounded-lg">
                                <Calendar className="h-6 w-6 text-dsnlu-azure" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Events
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 text-slate-700 leading-relaxed">
                        <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                            Dashakam Santawara - Alumni Meet 2024
                        </h3>
                        <p className="mb-4">
                            The <strong>Dashakam Santawara</strong> alumni meet, held on{" "}
                            <strong>October 14-15, 2024</strong>, served as a vibrant platform
                            for alumni to reconnect with the university and engage with
                            students, faculty, and staff.
                        </p>
                        <p className="mb-4">
                            On the first day, alumni shared their experiences in moot court
                            competitions, internships, and job placements, providing valuable
                            insights into career growth and professional challenges. They also
                            expressed their commitment to mentoring students, offering
                            internship and job referrals, and contributing to future academic
                            initiatives.
                        </p>
                        <p>
                            The second day featured a spirited sports meet between alumni and
                            students, fostering camaraderie, teamwork, and a sense of
                            community. The friendly competition allowed alumni to relive their
                            university days while strengthening their bond with the current
                            student body. The event reinforced the importance of alumni
                            involvement in the university’s development and paved the way for
                            future collaboration, mentorship, and continued engagement.
                        </p>
                    </CardContent>
                </Card>

                {/* Gallery Section */}
                <Card className="border-none shadow-md">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-dsnlu-lime/10 rounded-lg">
                                <ImageIcon className="h-6 w-6 text-dsnlu-lime" />
                            </div>
                            <CardTitle className="text-xl font-bold text-dsnlu-dark-blue">
                                Alumni Meet 2025 Gallery
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="overflow-hidden rounded-lg shadow-sm">
                                    <img
                                        src={`https://dsnlu.ac.in/storage/2025/03/${num}.webp`}
                                        alt={`Alumni Meet Gallery ${num}`}
                                        className="w-full h-auto object-cover transition-transform hover:scale-105 duration-300"
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
