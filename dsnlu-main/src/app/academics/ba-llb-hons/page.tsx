"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type Course = {
    code: string;
    name: string;
    credits?: number;
};

type Semester = {
    semester: string;
    courses: Course[];
};

type BatchData = {
    [key: string]: Semester[];
};

const curriculumData: BatchData = {
    "2025-26": [
        {
            semester: "Semester I",
            courses: [
                { code: "1.1", name: "English", credits: 2 },
                { code: "1.2", name: "Political Science – I", credits: 3 },
                { code: "1.3", name: "Sociology – I", credits: 3 },
                { code: "1.4", name: "History – I", credits: 3 },
                { code: "1.5", name: "Law of Torts, Motor Vehicle Act and Consumer Protection Act", credits: 4 },
                { code: "1.6", name: "Legal Methods & Moot Court", credits: 4 },
            ],
        },
        {
            semester: "Semester II",
            courses: [
                { code: "2.1", name: "Legal Language, Legal Writing and Soft Skills", credits: 2 },
                { code: "2.2", name: "Political Science – II", credits: 3 },
                { code: "2.3", name: "Sociology – II", credits: 3 },
                { code: "2.4", name: "Legal And Constitutional History", credits: 3 },
                { code: "2.5", name: "Economics – I", credits: 3 },
                { code: "2.6", name: "Law of Contracts – I and Specific Relief Act", credits: 4 },
            ],
        },
        {
            semester: "Semester III",
            courses: [
                { code: "3.1", name: "The Bharatiya Nyaya Sanhita (BNS)-I", credits: 4 },
                { code: "3.2", name: "Family Law – I", credits: 4 },
                { code: "3.3", name: "Constitutional Law – I", credits: 4 },
                { code: "3.4", name: "Economics – II", credits: 3 },
                { code: "3.5", name: "Jurisprudence", credits: 4 },
                { code: "3.6", name: "Specific Contracts (Contracts – II)", credits: 4 },
            ],
        },
        {
            semester: "Semester IV",
            courses: [
                { code: "4.1", name: "The Bharatiya Nyaya Sanhita (BNS)-II", credits: 4 },
                { code: "4.2", name: "Family Law – II", credits: 4 },
                { code: "4.3", name: "Constitutional Law – II", credits: 4 },
                { code: "4.4", name: "The Bharatiya Nagarik Suraksha Sanhita", credits: 4 },
                { code: "4.5", name: "Law and Social Transformation", credits: 4 },
                { code: "4.6", name: "Transfer of Property", credits: 4 },
            ],
        },
        {
            semester: "Semester V",
            courses: [
                { code: "5.1", name: "Labour Law – I", credits: 4 },
                { code: "5.2", name: "The Bharatiya Sakshya Adhiniyam", credits: 4 },
                { code: "5.3", name: "Code of Civil Procedure", credits: 4 },
                { code: "5.4", name: "Environmental Law", credits: 4 },
                { code: "5.5", name: "Intellectual Property Rights", credits: 4 },
                { code: "5.6", name: "Public International Law", credits: 4 },
            ],
        },
        {
            semester: "Semester VI",
            courses: [
                { code: "6.1", name: "Labour Law – II", credits: 4 },
                { code: "6.2", name: "Administrative Law", credits: 4 },
                { code: "6.3", name: "Interpretation of Statutes", credits: 4 },
                { code: "6.4", name: "Tax Law – I", credits: 4 },
                { code: "6.5", name: "Law of Banking and Negotiable Instruments", credits: 4 },
                { code: "6.6", name: "Clinical Paper I – ADR", credits: 4 },
            ],
        },
        {
            semester: "Semester VII",
            courses: [
                { code: "7.1", name: "Tax Law II", credits: 4 },
                { code: "7.2", name: "Clinical Paper II – Drafting, Pleading and Conveyancing", credits: 4 },
                { code: "7.3", name: "Corporate Law –I", credits: 4 },
                { code: "7.4", name: "Clinical Paper III – Law of Mediation", credits: 4 },
                { code: "7.5", name: "Elective – I: Health Laws / Air and Space Laws", credits: 4 },
                { code: "7.6", name: "Elective – II: International Trade Law / Natural Resources and Energy Laws", credits: 4 },
            ],
        },
        {
            semester: "Semester VIII",
            courses: [
                { code: "8.1", name: "Corporate Law – II", credits: 4 },
                { code: "8.2", name: "Competition Law", credits: 4 },
                { code: "8.3", name: "Private International Law", credits: 4 },
                { code: "8.4", name: "Elective – III: Human Rights & Humanitarian Law / International Dispute Settlement & Law", credits: 4 },
                { code: "8.5", name: "Elective – IV: Criminology, Penology & Victimology / Investment Law", credits: 4 },
                { code: "8.6", name: "Elective V: Insurance Laws / Biotechnology & Law", credits: 4 },
            ],
        },
        {
            semester: "Semester IX",
            courses: [
                { code: "9.1", name: "Land Laws", credits: 4 },
                { code: "9.2", name: "Information Technology Law", credits: 4 },
                { code: "9.3", name: "Elective – VI: Maritime Law / Citizenship and Immigration Laws", credits: 4 },
                { code: "9.4", name: "Elective – VII: Forensic Science & Law / Corporate Governance", credits: 4 },
                { code: "9.5", name: "Seminar Paper – I: Media Laws / Election Laws / Affirmative Action and Discriminative Justice", credits: 2 },
                { code: "9.6", name: "Seminar Paper II: Refugee Laws / Drug Control Laws / Law of Carriage", credits: 2 },
            ],
        },
        {
            semester: "Semester X",
            courses: [
                { code: "10.1", name: "Clinical Paper IV- Legal and Professional Ethics and Professional Accounting", credits: 4 },
                { code: "10.2", name: "Elective – VIII: International Environmental Law / Women and Child Law", credits: 4 },
                { code: "10.3", name: "Elective – IX: Insolvency Laws / International Criminal Law", credits: 4 },
                { code: "10.4", name: "Elective – X: Sports Laws / Infrastructure Laws", credits: 4 },
                { code: "10.5", name: "Seminar Paper – III: War Crimes, Terrorism and National Security Laws / Comparative Constitution / Right To Information / Culture and Heritage Laws", credits: 2 },
                { code: "10.6", name: "Seminar Paper IV: Military Law / Mining Laws / Comparative Criminal Procedure & Offences", credits: 2 },
            ],
        },
    ],
    "2021-24": [
        {
            semester: "Semester I",
            courses: [
                { code: "1.1", name: "English" },
                { code: "1.2", name: "Political Science – I" },
                { code: "1.3", name: "Sociology – I" },
                { code: "1.4", name: "History – I" },
                { code: "1.5", name: "Law of Torts, Motor Vehicle Act and Consumer Protection Act" },
                { code: "1.6", name: "Legal Methods & Moot Court" },
            ],
        },
        {
            semester: "Semester II",
            courses: [
                { code: "2.1", name: "Legal Language and Legal Writing" },
                { code: "2.2", name: "Political Science – II" },
                { code: "2.3", name: "Sociology – II" },
                { code: "2.4", name: "Legal And Constitutional History" },
                { code: "2.5", name: "Economics – I" },
                { code: "2.6", name: "Law of Contracts – I and Specific Relief Act" },
            ],
        },
        {
            semester: "Semester III",
            courses: [
                { code: "3.1", name: "Criminal Law I (IPC – I)" },
                { code: "3.2", name: "Family Law – I" },
                { code: "3.3", name: "Constitutional Law – I" },
                { code: "3.4", name: "Economics – II" },
                { code: "3.5", name: "Jurisprudence" },
                { code: "3.6", name: "Specific Contracts (Contracts – II)" },
            ],
        },
        {
            semester: "Semester IV",
            courses: [
                { code: "4.1", name: "Criminal Law – II (IPC – II)" },
                { code: "4.2", name: "Family Law – II" },
                { code: "4.3", name: "Constitutional Law – II" },
                { code: "4.4", name: "Code of Criminal Procedure" },
                { code: "4.5", name: "Law and Poverty" },
                { code: "4.6", name: "Transfer of Property" },
            ],
        },
        {
            semester: "Semester V",
            courses: [
                { code: "5.1", name: "Labour Law – I" },
                { code: "5.2", name: "Law of Evidence" },
                { code: "5.3", name: "Code of Civil Procedure" },
                { code: "5.4", name: "Environmental Law" },
                { code: "5.5", name: "Intellectual Property Rights" },
                { code: "5.6", name: "Public International Law" },
            ],
        },
        {
            semester: "Semester VI",
            courses: [
                { code: "6.1", name: "Labour Law – II" },
                { code: "6.2", name: "Administrative Law" },
                { code: "6.3", name: "Interpretation of Statutes" },
                { code: "6.4", name: "Tax Law – I" },
                { code: "6.5", name: "Law of Banking and Negotiable Instruments" },
                { code: "6.6", name: "Clinical Paper I – ADR" },
            ],
        },
        {
            semester: "Semester VII",
            courses: [
                { code: "7.1", name: "Tax Law II" },
                { code: "7.2", name: "Clinical Paper II – Drafting, Pleading and Conveyancing" },
                { code: "7.3", name: "Corporate Law – I" },
                { code: "7.4", name: "Clinical Paper III – Law of Mediation" },
                { code: "7.5", name: "Elective – I: Health Laws / Air and Space Laws" },
                { code: "7.6", name: "Elective – II: International Trade Law / Natural Resources and Energy Laws" },
            ],
        },
        {
            semester: "Semester VIII",
            courses: [
                { code: "8.1", name: "Corporate Law – II" },
                { code: "8.2", name: "Competition Law" },
                { code: "8.3", name: "Private International Law" },
                { code: "8.4", name: "Elective – III: International Humanitarian Law / International Dispute Settlement & Law" },
                { code: "8.5", name: "Elective – IV: Criminology, Penology & Victimology / Investment Law" },
                { code: "8.6", name: "Elective V: Insurance Laws / Biotechnology & Law" },
            ],
        },
        {
            semester: "Semester IX",
            courses: [
                { code: "9.1", name: "Land Laws" },
                { code: "9.2", name: "Information Technology Law" },
                { code: "9.3", name: "Elective – VI: Maritime Law / Citizenship and Immigration Laws" },
                { code: "9.4", name: "Elective – VII: Forensic Science & Law / Corporate Governance" },
                { code: "9.5", name: "Seminar Paper – I: Media Laws / Election Laws / Affirmative Action and Discriminative Justice" },
                { code: "9.6", name: "Seminar Paper II: Refugee Laws / Drug Control Laws / Law of Carriage" },
            ],
        },
        {
            semester: "Semester X",
            courses: [
                { code: "10.1", name: "Clinical Paper IV- Legal and Professional Ethics" },
                { code: "10.2", name: "Elective – VIII: International Environmental Law / Women and Child Law" },
                { code: "10.3", name: "Elective – IX: Insolvency Laws / International Criminal Law" },
                { code: "10.4", name: "Elective – X: Sports Laws / Infrastructure Laws" },
                { code: "10.5", name: "Seminar Paper – III: War Crimes, Terrorism and National Security Laws / Comparative Constitution / Right To Information / Culture and Heritage Laws" },
                { code: "10.6", name: "Seminar Paper IV: Military Law / Mining Laws / Comparative Criminal Procedure & Offences" },
            ],
        },
    ],
    "2019-20": [
        {
            semester: "Semester I",
            courses: [
                { code: "1.1", name: "English" },
                { code: "1.2", name: "Political Science – I" },
                { code: "1.3", name: "Sociology – I" },
                { code: "1.4", name: "History – 1" },
                { code: "1.5", name: "Law of Torts, Motor Vehicle Act and Consumer Protection Act" },
                { code: "1.6", name: "Legal Methods" },
            ],
        },
        {
            semester: "Semester II",
            courses: [
                { code: "2.1", name: "Legal Language and Legal Writing" },
                { code: "2.2", name: "Political Science – II" },
                { code: "2.3", name: "Sociology – II" },
                { code: "2.4", name: "Legal and Constitutional History" },
                { code: "2.5", name: "Economics – I" },
                { code: "2.6", name: "Law of Contracts – I and Specific Relief Act" },
            ],
        },
        {
            semester: "Semester III",
            courses: [
                { code: "3.1", name: "Criminal Law I (IPC – I)" },
                { code: "3.2", name: "Family Law – I" },
                { code: "3.3", name: "Constitutional Law – I" },
                { code: "3.4", name: "Economics – II" },
                { code: "3.5", name: "Jurisprudence" },
                { code: "3.6", name: "Specific Contracts (Contracts – II)" },
            ],
        },
        {
            semester: "Semester IV",
            courses: [
                { code: "4.1", name: "Criminal Law – II (IPC – II)" },
                { code: "4.2", name: "Family Law – II" },
                { code: "4.3", name: "Constitutional Law – II" },
                { code: "4.4", name: "Code of Criminal Procedure" },
                { code: "4.5", name: "Law and Poverty" },
                { code: "4.6", name: "Transfer of Property" },
            ],
        },
        {
            semester: "Semester V",
            courses: [
                { code: "5.1", name: "Labour Law – I" },
                { code: "5.2", name: "Law of Evidence" },
                { code: "5.3", name: "Code of Civil Procedure" },
                { code: "5.4", name: "Environmental Law" },
                { code: "5.5", name: "Intellectual Property Rights" },
                { code: "5.6", name: "Public International Law" },
            ],
        },
        {
            semester: "Semester VI",
            courses: [
                { code: "6.1", name: "Labour Law – II" },
                { code: "6.2", name: "Administrative Law" },
                { code: "6.3", name: "Interpretation of Statutes" },
                { code: "6.4", name: "Tax Law – I" },
                { code: "6.5", name: "Law of Banking and Negotiable Instruments" },
                { code: "6.6", name: "Clinical Paper – I – ADR" },
            ],
        },
        {
            semester: "Semester VII",
            courses: [
                { code: "7.1", name: "Tax Law II" },
                { code: "7.2", name: "Clinical Paper II – Drafting, Pleading and Conveyancing & Moot Court" },
                { code: "7.3", name: "Corporate Law –I" },
                { code: "7.4", name: "Elective – I : International Trade Law / Natural Resources and Energy Laws" },
                { code: "7.5", name: "Elective – II : International Organizations / Air and Space Laws" },
                { code: "7.6", name: "Elective – III : Maritime Law / International Dispute Settlement" },
            ],
        },
        {
            semester: "Semester VIII",
            courses: [
                { code: "8.1", name: "Corporate Law – II" },
                { code: "8.2", name: "Competition Law" },
                { code: "8.3", name: "Private International Law" },
                { code: "8.4", name: "Elective – IV : International Humanitarian Law / Forensic Science and Law" },
                { code: "8.5", name: "Elective – V : Criminology, Penology & Victimology / Investment Law" },
                { code: "8.6", name: "Elective VI : Insurance Laws / Biotechnology Law" },
            ],
        },
        {
            semester: "Semester IX",
            courses: [
                { code: "9.1", name: "Land Laws" },
                { code: "9.2", name: "Elective – VII : Health Laws / Citizenship and Immigration Laws" },
                { code: "9.3", name: "Elective – VIII : Disaster Management / Corporate Governance" },
                { code: "9.4", name: "Elective – IX : Women and Child Law / Information Technology Law" },
                { code: "9.5", name: "Seminar – I : Media Laws / Election Laws / Affirmative Action and Discriminative Justice" },
                { code: "9.6", name: "Seminar Paper II : Refugee Laws / Drug Control Laws / Law of Carriage" },
            ],
        },
        {
            semester: "Semester X",
            courses: [
                { code: "10.1", name: "Legal and Professional Ethics" },
                { code: "10.2", name: "Elective – X : International Environmental Law / International E- Commerce Law" },
                { code: "10.3", name: "Elective – XI : Insolvency Laws / International Criminal Law" },
                { code: "10.4", name: "Elective – XII : Sports Laws / Infrastructure Laws" },
                { code: "10.5", name: "Seminar – III : War Crimes, Terrorism and National Security Laws / Comparative Constitution / Right To Information / Heritage Laws" },
                { code: "10.6", name: "Seminar Paper IV : Military Law / Mining Laws / Comparative Criminal Procedure & Offences" },
            ],
        },
    ],
};

export default function BALLBHonsPage() {
    const [activeTab, setActiveTab] = useState<"2025-26" | "2021-24" | "2019-20">("2025-26");

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
                        B.A., LL.B. (Hons.)
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="mb-8">
                    <p className="text-lg text-slate-700">
                        The University offers Five Year Integrated B.A., LL.B. (Hons.). Students are required to complete 220 credits before they become eligible to graduate. Each credit course involves 60 hours of classroom teaching.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold text-dsnlu-dark-blue">
                            Eligibility:
                        </h3>
                        <p className="text-slate-700">
                            (I) DSNLU is governed by CLAT notification as regards eligibility criteria.
                        </p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-8 flex space-x-4 border-b border-slate-200 overflow-x-auto">
                    <button
                        onClick={() => setActiveTab("2025-26")}
                        className={cn(
                            "border-b-2 px-4 py-2 text-sm font-medium transition-colors hover:text-dsnlu-dark-blue whitespace-nowrap",
                            activeTab === "2025-26"
                                ? "border-dsnlu-lime text-dsnlu-dark-blue"
                                : "border-transparent text-slate-500"
                        )}
                    >
                        2025 - 2026
                    </button>
                    <button
                        onClick={() => setActiveTab("2021-24")}
                        className={cn(
                            "border-b-2 px-4 py-2 text-sm font-medium transition-colors hover:text-dsnlu-dark-blue whitespace-nowrap",
                            activeTab === "2021-24"
                                ? "border-dsnlu-lime text-dsnlu-dark-blue"
                                : "border-transparent text-slate-500"
                        )}
                    >
                        2021 to 2024
                    </button>
                    <button
                        onClick={() => setActiveTab("2019-20")}
                        className={cn(
                            "border-b-2 px-4 py-2 text-sm font-medium transition-colors hover:text-dsnlu-dark-blue whitespace-nowrap",
                            activeTab === "2019-20"
                                ? "border-dsnlu-lime text-dsnlu-dark-blue"
                                : "border-transparent text-slate-500"
                        )}
                    >
                        2019-2020
                    </button>
                </div>

                {/* Curriculum Content */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                        CURRICULUM FOR 5 Year B.A., LL.B. (Hons.) COURSE {activeTab === "2025-26" ? "2025-26" : activeTab === "2021-24" ? "2021 to 2024" : "2019-2020"}
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
                                                {activeTab === "2025-26" && (
                                                    <th className="px-4 py-2 font-medium text-center">Credits</th>
                                                )}
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
                                                    {activeTab === "2025-26" && (
                                                        <td className="px-4 py-3 text-center text-slate-600">
                                                            {course.credits}
                                                        </td>
                                                    )}
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
