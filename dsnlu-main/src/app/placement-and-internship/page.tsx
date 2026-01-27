"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, Phone, User } from "lucide-react";

export default function PlacementAndInternshipPage() {
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
                        PLACEMENT AND INTERNSHIP
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4 space-y-12">

                {/* Recruitment Coordination Committee (RCC) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-dsnlu-dark-blue">
                        RECRUITMENT COORDINATION COMMITTEE
                    </h2>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p>
                                The Recruitment Coordination Committee (RCC) of Damodaram Sanjivayya National Law University, Visakhapatnam, is the designated body responsible for facilitating the recruitment process for the graduating batch. As a student-run organization, the committee helps students reach their full potential through various projects. Comprising dedicated individuals, the RCC’s primary objective is to ensure smooth interaction between recruiting organizations and aspiring legal professionals. Their efforts are dedicated to securing premier opportunities for emerging legal talents. Additionally, the committee organizes activities such as mock interviews, CV drafting sessions, skill-training workshops, mentorship programs, and networking events. These initiatives not only strengthen stakeholder relationships but also prepare students for successful careers in their chosen fields.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Committee Members Table */}
                        <Card className="border-none shadow-md h-full">
                            <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                                <CardTitle className="text-lg font-bold text-white">
                                    Internship & Placements Committee Members
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <table className="w-full text-left text-sm">
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {[
                                            { name: "Dr. Dayananda Murthy C.P.", role: "Convener" },
                                            { name: "Dr. P. Jogi Naidu", role: "Member" },
                                            { name: "Dr. R. Bharat Kumar", role: "Member" },
                                            { name: "Dr. B. Neelima", role: "Member" },
                                            { name: "Dr. K. Sudha", role: "Member" },
                                            { name: "Dr. A. Nageswara Rao", role: "Member" },
                                            { name: "Dr. N. Bhagya Lakshmi", role: "Member" },
                                            { name: "Mr. M. Naresh Kumar", role: "Member" },
                                        ].map((member, index) => (
                                            <tr key={index} className="hover:bg-slate-50">
                                                <td className="px-6 py-3 font-medium text-slate-900">{member.name}</td>
                                                <td className="px-6 py-3 text-slate-600">{member.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </CardContent>
                        </Card>

                        {/* Student Convenors */}
                        <Card className="border-none shadow-md h-full">
                            <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                                <CardTitle className="text-lg font-bold text-white">
                                    Student Convenors (RCC)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-dsnlu-dark-blue flex items-center gap-2">
                                        <User className="h-4 w-4" /> Mr. VISWANADHAM VALLURI
                                    </h4>
                                    <p className="text-sm text-slate-600 pl-6">Student Convenor</p>
                                    <div className="pl-6 space-y-1 text-sm">
                                        <a href="mailto:vvrkcs@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <Mail className="h-3 w-3" /> vvrkcs@dsnlu.ac.in
                                        </a>
                                        <p className="flex items-center gap-2 text-slate-600">
                                            <Phone className="h-3 w-3" /> +91 89199 71228
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-dsnlu-dark-blue flex items-center gap-2">
                                        <User className="h-4 w-4" /> Ms. CHHAVI SINGHAL
                                    </h4>
                                    <p className="text-sm text-slate-600 pl-6">Student Co-Convenor</p>
                                    <div className="pl-6 space-y-1 text-sm">
                                        <a href="mailto:chhavisinghal@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <Mail className="h-3 w-3" /> chhavisinghal@dsnlu.ac.in
                                        </a>
                                        <p className="flex items-center gap-2 text-slate-600">
                                            <Phone className="h-3 w-3" /> +91 8815514923
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Internship Co-ordination Committee (ICC) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-dsnlu-dark-blue">
                        INTERNSHIP CO-ORDINATION COMMITTEE
                    </h2>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p>
                                DSNLU provides two months of summer and one month of winter internship breaks during each academic year with the vision of students learning the modalities of the legal profession and practical application of knowledge imbibed by judicial officials, advocates, law firms, companies, government, and non-governmental agencies including research organisations. The ICC facilitates the students’ networking and endeavours for their professional careers.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Placement Officer */}
                        <Card className="border-none shadow-md">
                            <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                                <CardTitle className="text-lg font-bold text-white">
                                    Placement Officer
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-dsnlu-dark-blue flex items-center gap-2">
                                        <User className="h-4 w-4" /> Mr. M Naresh Kumar
                                    </h4>
                                    <div className="pl-6 space-y-1 text-sm">
                                        <a href="mailto:nareshmadiki@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <Mail className="h-3 w-3" /> nareshmadiki@dsnlu.ac.in
                                        </a>
                                        <p className="flex items-center gap-2 text-slate-600">
                                            <Phone className="h-3 w-3" /> +91-9866592269
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Student Convenors ICC */}
                        <Card className="border-none shadow-md">
                            <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                                <CardTitle className="text-lg font-bold text-white">
                                    Student Convenors (ICC)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <h4 className="font-bold text-dsnlu-dark-blue flex items-center gap-2">
                                        <User className="h-4 w-4" /> Ms. Urvashi Ojha
                                    </h4>
                                    <p className="text-sm text-slate-600 pl-6">Student Convenor</p>
                                    <div className="pl-6 space-y-1 text-sm">
                                        <a href="mailto:urvashiojha@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <Mail className="h-3 w-3" /> urvashiojha@dsnlu.ac.in
                                        </a>
                                        <p className="flex items-center gap-2 text-slate-600">
                                            <Phone className="h-3 w-3" /> +91 9508397280
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-dsnlu-dark-blue flex items-center gap-2">
                                        <User className="h-4 w-4" /> Mr. Siddhi Vinayak
                                    </h4>
                                    <p className="text-sm text-slate-600 pl-6">Student Co-Convenor</p>
                                    <div className="pl-6 space-y-1 text-sm">
                                        <a href="mailto:siddhivinayak@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                            <Mail className="h-3 w-3" /> siddhivinayak@dsnlu.ac.in
                                        </a>
                                        <p className="flex items-center gap-2 text-slate-600">
                                            <Phone className="h-3 w-3" /> +91 8084267783
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Faculty Committee Contacts */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-dsnlu-dark-blue">
                        FACULTY COMMITTEE CONTACTS
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 space-y-3">
                                <h4 className="font-bold text-dsnlu-dark-blue">Dr. Dayananda Murthy C.P.</h4>
                                <p className="text-sm font-medium text-slate-500">Faculty Convener</p>
                                <div className="space-y-1 text-sm">
                                    <a href="mailto:dmurthy@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                        <Mail className="h-3 w-3" /> dmurthy@dsnlu.ac.in
                                    </a>
                                    <p className="flex items-center gap-2 text-slate-600">
                                        <Phone className="h-3 w-3" /> +919393719745
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 space-y-3">
                                <h4 className="font-bold text-dsnlu-dark-blue">Dr. R. Bharat Kumar</h4>
                                <p className="text-sm font-medium text-slate-500">Faculty Member</p>
                                <div className="space-y-1 text-sm">
                                    <a href="mailto:rbharat87@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                        <Mail className="h-3 w-3" /> rbharat87@dsnlu.ac.in
                                    </a>
                                    <p className="flex items-center gap-2 text-slate-600">
                                        <Phone className="h-3 w-3" /> +918500056969
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 space-y-3">
                                <h4 className="font-bold text-dsnlu-dark-blue">Dr. Neelima Boghadi</h4>
                                <p className="text-sm font-medium text-slate-500">Faculty Member</p>
                                <div className="space-y-1 text-sm">
                                    <a href="mailto:neelimaboghadi@dsnlu.ac.in" className="flex items-center gap-2 text-blue-600 hover:underline">
                                        <Mail className="h-3 w-3" /> neelimaboghadi@dsnlu.ac.in
                                    </a>
                                    <p className="flex items-center gap-2 text-slate-600">
                                        <Phone className="h-3 w-3" /> +917207357989
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

            </div>
        </div>
    );
}
