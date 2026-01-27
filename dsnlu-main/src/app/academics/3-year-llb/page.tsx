"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const curriculumData = {
    "2025-26": [
        {
            semester: "Semester I",
            courses: [
                { code: "1.1", name: "Legal Language and Legal Writing", credits: 4 },
                { code: "1.2", name: "The General Principles of Contract (Indian Contract Act, 1872 and Specific Relief Act, 1963)", credits: 4 },
                { code: "1.3", name: "The Law of Torts, The Motor Vehicle Accident Act, 1988 & The Consumer Protection Act, 2019", credits: 4 },
                { code: "1.4", name: "Constitutional Law – I", credits: 4 },
                { code: "1.5", name: "The Bharatiya Nyaya Sanhita (BNS), 2023", credits: 4 },
                { code: "1.6", name: "Family Law – I", credits: 4 },
            ]
        },
        {
            semester: "Semester II",
            courses: [
                { code: "2.1", name: "Legal and Constitutional History", credits: 4 },
                { code: "2.2", name: "Special Contracts", credits: 4 },
                { code: "2.3", name: "Constitutional Law – II", credits: 4 },
                { code: "2.4", name: "Environmental Laws", credits: 4 },
                { code: "2.5", name: "Jurisprudence", credits: 4 },
                { code: "2.6", name: "Family Law – II", credits: 4 },
            ]
        },
        {
            semester: "Semester III",
            courses: [
                { code: "3.1", name: "Public International Law", credits: 4 },
                { code: "3.2", name: "Code of Civil Procedure", credits: 4 },
                { code: "3.3", name: "The Bharatiya Nagarik Suraksha Sanhita, 2023", credits: 4 },
                { code: "3.4", name: "Administrative Law", credits: 4 },
                { code: "3.5", name: "Transfer of Property including Law of Easement", credits: 4 },
                { code: "3.6", name: "Labour Law – I", credits: 4 },
            ]
        },
        {
            semester: "Semester IV",
            courses: [
                { code: "4.1", name: "Principles of Taxation", credits: 4 },
                { code: "4.2", name: "The Bharatiya Sakshya Adhiniyam, 2023", credits: 4 },
                { code: "4.3", name: "Company Law", credits: 4 },
                { code: "4.4", name: "Clinical Paper I – Alternative Dispute Resolution", credits: 4 },
                { code: "4.5", name: "Interpretation of Statutes", credits: 4 },
                { code: "4.6", name: "Labour Law – II", credits: 4 },
            ]
        },
        {
            semester: "Semester V",
            courses: [
                { code: "5.1", name: "Clinical Paper II – Law of Mediation", credits: 4 },
                { code: "5.2", name: "Clinical Paper III – Drafting, Pleading and Conveyancing", credits: 4 },
                { code: "5.3", name: "Intellectual Property Rights", credits: 4 },
                { code: "5.4", name: "Securities Law including Mergers and Take over", credits: 4 },
                { code: "5.5", name: "Competition Law", credits: 4 },
                { code: "5.6", name: "Law of Banking and Negotiable Instruments", credits: 4 },
            ]
        },
        {
            semester: "Semester VI",
            courses: [
                { code: "6.1", name: "Clinical Paper IV- Legal and Professional Ethics and Professional Accounting", credits: 4 },
                { code: "6.2", name: "Land Laws", credits: 4 },
                { code: "6.3", name: "Information Technology Law", credits: 4 },
                { code: "6.4", name: "Clinical Paper V- Moot Court", credits: 4 },
                { code: "6.5", name: "Elective – I: Insurance Law/ Right To Information & Media Law", credits: 4 },
                { code: "6.6", name: "Elective – II: Criminology, Penology& Victimology including Forensic Science/ Law of Insolvency and Bankruptcy", credits: 4 },
            ]
        }
    ],
    "2024-25": [
        {
            semester: "Semester I",
            courses: [
                { code: "1.1", name: "The General Principles of Contract (Indian Contract Act, 1872 and Specific Relief Act, 1963)", credits: 4 },
                { code: "1.2", name: "The Law of Torts, The Motor Vehicle Accident Act, 1988 & The Consumer Protection Act, 2019", credits: 4 },
                { code: "1.3", name: "Constitutional Law – I", credits: 4 },
                { code: "1.4", name: "The Bharatiya Nyaya Sanhita (BNS) 2023", credits: 4 },
                { code: "1.5", name: "Family Law – I", credits: 4 },
            ]
        },
        {
            semester: "Semester II",
            courses: [
                { code: "2.1", name: "Special Contracts", credits: 4 },
                { code: "2.2", name: "Constitutional Law – II", credits: 4 },
                { code: "2.3", name: "Environmental Laws", credits: 4 },
                { code: "2.4", name: "Jurisprudence", credits: 4 },
                { code: "2.5", name: "Family Law – II", credits: 4 },
            ]
        },
        {
            semester: "Semester III",
            courses: [
                { code: "3.1", name: "Public International Law", credits: 4 },
                { code: "3.2", name: "Code of Civil Procedure", credits: 4 },
                { code: "3.3", name: "The Bharatiya Nagarik Suraksha Sanhita, 2023", credits: 4 },
                { code: "3.4", name: "Administrative Law", credits: 4 },
                { code: "3.5", name: "Transfer of Property Law including Law of Easement", credits: 4 },
                { code: "3.6", name: "Labour Law – I", credits: 4 },
            ]
        },
        {
            semester: "Semester IV",
            courses: [
                { code: "4.1", name: "Principles of Taxation", credits: 4 },
                { code: "4.2", name: "The Bharatiya Sakshya Adhiniyam, 2023", credits: 4 },
                { code: "4.3", name: "Company Law", credits: 4 },
                { code: "4.4", name: "Clinical Paper I – Alternative Dispute Resolution", credits: 6 },
                { code: "4.5", name: "Interpretation of Statutes", credits: 4 },
                { code: "4.6", name: "Labour Law – II", credits: 4 },
            ]
        },
        {
            semester: "Semester V",
            courses: [
                { code: "5.1", name: "Clinical Paper II – Law of Mediation", credits: 4 },
                { code: "5.2", name: "Clinical Paper III – Drafting, Pleading and Conveyancing", credits: 6 },
                { code: "5.3", name: "Intellectual Property Rights", credits: 4 },
                { code: "5.4", name: "Securities Law including Mergers and Take over", credits: 4 },
                { code: "5.5", name: "Competition Law", credits: 4 },
                { code: "5.6", name: "Law of Banking and Negotiable Instruments", credits: 4 },
            ]
        },
        {
            semester: "Semester VI",
            courses: [
                { code: "6.1", name: "Clinical Paper IV- Legal and Professional Ethics and Professional Accounting", credits: 6 },
                { code: "6.2", name: "Land Laws", credits: 4 },
                { code: "6.3", name: "Information Technology Law", credits: 4 },
                { code: "6.4", name: "Clinical Paper V- Moot Court", credits: 6 },
                { code: "6.5", name: "Elective – I: Insurance Law/ Right To Information & Media Law", credits: 4 },
                { code: "6.6", name: "Elective – II: Criminology, Penology& Victimology including Forensic Science/ Law of Insolvency and Bankruptcy", credits: 4 },
            ]
        }
    ]
};

export default function ThreeYearLLBPage() {
    const [activeTab, setActiveTab] = useState<"2025-26" | "2024-25">("2025-26");

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
                        03 Year LL.B
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="mb-8">
                    <p className="text-lg text-slate-700">
                        The University offers Three Year LL.B. Course. Students are required
                        to complete 144 credits before they become eligible to graduate. Each
                        credit course involves 60 hours of classroom teaching.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-dsnlu-dark-blue">
                            Eligibility:
                        </h3>
                        <p className="text-slate-700">
                            (I) DET (DSNLU ENTRANCE TEST) as regards eligibility criteria.
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex space-x-4 border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab("2025-26")}
                        className={cn(
                            "border-b-2 px-4 py-2 text-sm font-medium transition-colors hover:text-dsnlu-dark-blue",
                            activeTab === "2025-26"
                                ? "border-dsnlu-lime text-dsnlu-dark-blue"
                                : "border-transparent text-slate-500"
                        )}
                    >
                        2025-26
                    </button>
                    <button
                        onClick={() => setActiveTab("2024-25")}
                        className={cn(
                            "border-b-2 px-4 py-2 text-sm font-medium transition-colors hover:text-dsnlu-dark-blue",
                            activeTab === "2024-25"
                                ? "border-dsnlu-lime text-dsnlu-dark-blue"
                                : "border-transparent text-slate-500"
                        )}
                    >
                        2024-25
                    </button>
                </div>

                {/* Curriculum Content */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                        CURRICULUM FOR 3 YEAR LL.B. FOR {activeTab} ADMITTED BATCH
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {curriculumData[activeTab].map((semester, index) => (
                            <Card key={index} className="border-none shadow-md">
                                <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                                    <CardTitle className="text-lg font-bold text-white">
                                        {semester.semester}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-slate-100 text-slate-500">
                                            <tr>
                                                <th className="px-4 py-2 font-medium">Code</th>
                                                <th className="px-4 py-2 font-medium">Course Name</th>
                                                <th className="px-4 py-2 font-medium text-center">Credits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {semester.courses.map((course, idx) => (
                                                <tr key={idx} className="hover:bg-slate-50">
                                                    <td className="px-4 py-3 font-medium text-slate-900">
                                                        {course.code}
                                                    </td>
                                                    <td className="px-4 py-3 text-slate-600">
                                                        {course.name}
                                                    </td>
                                                    <td className="px-4 py-3 text-center text-slate-600">
                                                        {course.credits}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
