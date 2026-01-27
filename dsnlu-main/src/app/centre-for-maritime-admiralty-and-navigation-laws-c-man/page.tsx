"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";
import Image from "next/image";

export default function CMANPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Centre for Maritime, Admiralty and Navigation laws (C-MAN)" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* About Section */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                About the Centre
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <div className="mb-6 flex justify-center md:justify-start">
                                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg border border-slate-200 shadow-sm">
                                    <Image
                                        src="https://dsnlu.ac.in/storage/2024/09/IMG-20240823-WA0006-300x300.jpg"
                                        alt="C-MAN"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <p className="mb-4">
                                Centre for Maritime, Admiralty and Navigation laws (C-MAN,{" "}
                                <em>pronounced as “Seaman”</em>) at Damodaram Sanjivayya
                                National Law University, was established on 29th of July 2024
                                with vision to strengthen the University’s endeavor in promoting
                                research and discourse in the field of Shipping and Maritime
                                laws.
                            </p>
                            <p className="mb-4">
                                C-MAN is aimed at creating a Centre of Excellence to further
                                maritime research in the heart of a port city, Visakhapatnam. It
                                will tap the true potential of Visakhapatnam, as the largest
                                port on the Eastern Coast and as the Eastern Naval Command. This
                                opens the gateway of opportunities for students to enhance their
                                knowledge on admiralty, maritime and shipping laws.
                            </p>
                            <p>
                                The Centre will serve as a hub for research on maritime laws,
                                identifying issues and innovating solutions for maritime
                                activities, international trade, dispute resolution,
                                environmental protection, and maritime security. As the demand
                                for maritime trade is burgeoning, this Centre positions DSNLU at
                                the forefront of maritime legal studies by contributing
                                significantly to national and international discourse on the
                                subject.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Vision and Mission */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Vision and Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p>
                                The Centre aims to navigate the complexities of Maritime Law by
                                fostering innovation, cooperation, and conflict resolution. Our
                                mission is to advance maritime policy, protect the marine
                                environment, promote safe and efficient shipping, and support
                                economic growth and development.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Objectives */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Objectives
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    Creating Public Awareness and fostering Research, Education
                                    and Training in the domain of Maritime and Shipping laws
                                </li>
                                <li>
                                    Facilitating Networking and Collaboration with domestic and
                                    international experts of the Maritime industry
                                </li>
                                <li>
                                    Addressing the challenges posed by the contemporary Maritime
                                    issues, including security and safety, marine environment,
                                    piracy among others
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Recent Events */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Recent Events
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <h3 className="mb-2 text-xl font-semibold text-dsnlu-dark-blue">
                                One Day Open House Discussion on the “Rights of Fishermen” | 31
                                August 2024
                            </h3>
                            <p className="mb-6">
                                Organised by National Human Rights Commission, India, in
                                collaboration with Damodaram Sanjivayya National Law University,
                                Visakhapatnam, the programme was able to gather an audience of
                                around 250 people including 50 fishermen and fisherwomen in
                                attendance. The Acting Chairperson of NHRC, Smt. Vijaya Bharathi
                                Sayani presided over the discussion. Smt. Bharathi was exemplary
                                of an honest and diligent public officer, who utilised this
                                opportune time to hear the grievances of the unheard and uncared
                                for, that is the vulnerable community of fishermen.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-dsnlu-dark-blue text-white">
                                            <th className="border border-slate-200 px-4 py-3 text-left font-bold">
                                                Honorary Chair Person
                                            </th>
                                            <th className="border border-slate-200 px-4 py-3 text-left font-bold">
                                                Faculty Member
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-slate-200 px-4 py-3 align-top">
                                                Dr. P. Jogi Naidu
                                            </td>
                                            <td className="border border-slate-200 px-4 py-3 align-top">
                                                <ul className="list-none space-y-1">
                                                    <li>Dr. Ch. Lakshmi</li>
                                                    <li>Mr. Abhishek Sinha</li>
                                                    <li>Dr. Arvind Nath Tripathi</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Centre Composition */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Centre Composition (AY 2025-26)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <div className="mb-6">
                                <h3 className="mb-2 text-lg font-semibold text-dsnlu-dark-blue">
                                    Office Bearers:
                                </h3>
                                <ul className="list-disc space-y-1 pl-6">
                                    <li>
                                        <strong>Student Convenor:</strong> Rishi Raj – IV Year
                                    </li>
                                    <li>
                                        <strong>Student Co-Convenor:</strong> Sumangala Bhargava –
                                        IV Year
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-2 text-lg font-semibold text-dsnlu-dark-blue">
                                    Student Members:
                                </h3>
                                <ol className="list-decimal space-y-1 pl-6">
                                    <li>Vineela Kottapalli – V Year</li>
                                    <li>Hema Chandra Kota – IV Year</li>
                                    <li>G. Deepika – IV Year</li>
                                    <li>Kashvi Som – III Year</li>
                                    <li>Aaron Thomas – III Year</li>
                                    <li>Mallika Tangella – III Year</li>
                                    <li>Akshat Aggarwal – III Year</li>
                                    <li>Aanchal Tiwary – III Year</li>
                                    <li>Anushka Kalluri – II Year</li>
                                    <li>Ayushman Anand – II Year</li>
                                    <li>Tanvi Patibandla – II Year</li>
                                    <li>Bhavya Adlakha – II Year</li>
                                    <li>Arthana Agilesh – II Year</li>
                                    <li>Krishna J. – II Year 3 Year LL.B</li>
                                    <li>Akshat Khandelwal – II Year 3 Year LL.B</li>
                                </ol>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
