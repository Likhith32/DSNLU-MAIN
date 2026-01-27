"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function LegalIncubationCentrePage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="LEGAL INCUBATION CENTRE (LIC)" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* About & Objectives */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                LEGAL INCUBATION CENTRE (LIC)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <h3 className="text-xl font-semibold text-dsnlu-azure mb-4">
                                PURPOSE: FOSTERING LEGAL ENTREPRENEURSHIP AND ADVOCACY SKILLS
                            </h3>
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                ABOUT THE CENTRE
                            </h3>
                            <p className="mb-6">
                                The Legal Incubation Centre (LIC), Visakhapatnam is established
                                by Damodaram Sanjivayya National Law University (DSNLU) in the
                                year 2018. The Centre is committed to develop entrepreneurship
                                and advocacy skills among young lawyers and students. The centre
                                encourage law students to apply legal knowledge in creating
                                advanced solutions and provides a platform for students with
                                innovative legal ideas to address legal challenges. With a
                                resolute commitment to bridge the gap between theoretical
                                knowledge and practical application, LIC serves as an
                                institutional mechanism, offering a wide spectrum of services
                                geared towards empowering and aspiring legal professionals.
                            </p>

                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-2">
                                OBJECTIVES
                            </h3>
                            <ul className="list-disc list-inside space-y-2 ml-2 mb-6">
                                <li>
                                    To actively encourage and support start-ups in the field of
                                    law, adopting an interdisciplinary approach to innovation and
                                    growth.
                                </li>
                                <li>
                                    To bridge the gap between academic knowledge and real-world
                                    application, ensuring that budding lawyers and students are
                                    well-equipped with the skills needed for success in the legal
                                    arena.
                                </li>
                                <li>
                                    To provide valuable opportunities for experiential learning to
                                    students and young lawyers, enabling them to apply their
                                    knowledge in practical scenarios and develop a profound
                                    understanding of legal intricacies.
                                </li>
                                <li>
                                    To organise workshops providing information on all aspects of
                                    professional skills required for budding lawyers and
                                    entrepreneurs highlighting the culture of entrepreneurship.
                                </li>
                                <li>
                                    To conduct Inter-University and National-level competitions,
                                    programs, etc. like Crime Scene Investigation, Civil and
                                    Criminal Trial Advocacy and numerous other programs.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Committee Tables */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Committee Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            {/* Honorary Chair & Faculty */}
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse border border-slate-200">
                                    <thead>
                                        <tr className="bg-[#341e11] text-white">
                                            <th className="border border-slate-200 px-4 py-2 text-left">
                                                Honorary Chair Person
                                            </th>
                                            <th className="border border-slate-200 px-4 py-2 text-left">
                                                Faculty Member
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. Nandini C.P.
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. Ch. Lakshmi
                                                <br />
                                                Dr. A. Nageswara Rao
                                                <br />
                                                Dr. Rifat Khan
                                                <br />
                                                Dr. I. Durga Prasad
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Student Members */}
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-4">
                                Student Members:
                            </h3>
                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse border border-slate-200">
                                    <tbody>
                                        {[
                                            ["Cheerla Geethika Thanmai – IX Semester", "D V N V Sirichandana – IX Semester"],
                                            ["Goduguluri Venkata Srividya – IX Semester", "Sade Tejaswi – IX Semester"],
                                            ["Jinal Prajapat – VII Semester", "Thumsi Sreedhar Venkata Spoorthi – VII Semester"],
                                            ["Shashank Mohan Prasad – VII Semester", "Nikhil Raj – VII Semester"],
                                            ["S.S.K Panchajanya – VII Semester", "Chelamkuri Mounika – VII Semester"],
                                            ["Polisetti Sandhya – VII Semester", "Sowmya Tiwari – VII Semester"],
                                            ["Kottapalli Vineela – V Semester", "Jatin Sachdeva – V Semester"],
                                            ["Damarla Sudha Bhuvaneswari – V Semester", "Devanshi Pandey – V Semester"],
                                            ["Ankitha Varnika – V Semester", "Neerukonda Srivirajitha – V Semester"],
                                            ["P.Rohit – V Semester", "Gadhamsetty Lahari – V Semester"],
                                            ["P. Himaja Sree Reddy – III Semester", "Sai Jahnavi K – III Semester"],
                                            ["Divya – III Semester", "Shreya Sinha – III Semester"],
                                            ["Sava Vishnu Vardhan – III Semester", "Kamma Sreenithi – III Semester"],
                                            ["Rupuneni Brahmani – III Semester", "Dhanansh Bharadwaj – I Semester"],
                                        ].map((row, index) => (
                                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                <td className="border border-slate-200 px-4 py-2 text-slate-700">{row[0]}</td>
                                                <td className="border border-slate-200 px-4 py-2 text-slate-700">{row[1]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Trainee Members */}
                            <h3 className="text-lg font-bold text-dsnlu-dark-blue mb-4">
                                Trainee Members:
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-slate-200">
                                    <tbody>
                                        <tr className="bg-white">
                                            <td className="border border-slate-200 px-4 py-2 text-slate-700">
                                                Meruva Tony Akash – V Semester
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 text-slate-700">
                                                Priyansha Trivedi – V Semester
                                            </td>
                                        </tr>
                                        <tr className="bg-slate-50">
                                            <td className="border border-slate-200 px-4 py-2 text-slate-700">
                                                Koilada Tanusri Naga Nuka Sai –<br />
                                                III Semester
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 text-slate-700">
                                                Varun Jagga – I Semester
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
