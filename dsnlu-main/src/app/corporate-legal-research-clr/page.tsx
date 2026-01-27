"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Banner } from "@/components/ui/banner";

export default function CorporateLegalResearchPage() {
    return (
        <div className="min-h-screen bg-slate-50 pb-12">
            <Banner title="Corporate Legal Research (CLR)" />

            <div className="container mx-auto mt-12 px-4">
                <div className="grid gap-8">
                    {/* Motto */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Our Motto
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 text-slate-700 leading-relaxed">
                            <p className="font-semibold text-lg text-dsnlu-azure">
                                Research, evaluation, analysis and critical thinking of
                                Corporate, Business, and Commercial Laws
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
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li>
                                    To carry out extensive research & create awareness of
                                    corporate, business and commercial laws.
                                </li>
                                <li>
                                    To organise guest lectures /workshops/seminars /symposiums
                                    /conferences/panel discussions to train the stakeholders with
                                    hands-on experience or challenges in understanding the laws.
                                </li>
                                <li>
                                    Publish a newsletter/report on the latest development of laws
                                    on a quarterly/half-yearly basis. Publish journals by “Call
                                    for Papers” and encourage the stakeholders to contribute
                                    through research papers/case comments, etc.
                                </li>
                                <li>
                                    Conduct competitions like essay competitions, mock mergers and
                                    acquisitions, employee and management disputes, etc. within
                                    the university and at the national level.
                                </li>
                                <li>
                                    To collaborate with law firms by entering into a MOU. Also
                                    with the Legal Incubation Centre (LIC), Centre for Advanced
                                    Research in Dispute Settlement (CARDS) and IPR Cell of DSNLU
                                    to invigorate the skill development programs.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Committee Table */}
                    <Card className="border-none shadow-lg">
                        <CardHeader className="bg-white pb-2 pt-6">
                            <CardTitle className="text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                                Committee Members
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
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
                                                Dr. P.Jogi Naidu
                                            </td>
                                            <td className="border border-slate-200 px-4 py-2 align-top text-slate-700">
                                                Dr. R. Bharat Kumar
                                                <br />
                                                Dr. P. Bhuvaneswari
                                                <br />
                                                Dr. R. Deepthi
                                                <br />
                                                Ms. Gali Parivartana
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
