"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, Phone } from "lucide-react";

const grievanceContacts = [
    {
        name: "Dr. K. Sudha",
        designation: "Dean Examinations",
        role: "Examination Matters",
        phone: "9492535618",
        email: "sudhakavuri@dsnlu.ac.in",
    },
    {
        name: "Dr. Soma Battacharjya",
        designation: "Associate Dean, Academics (U.G)",
        role: "Academic Matters",
        phone: "7032328648",
        email: "academics@dsnlu.ac.in",
    },
    {
        name: "Dr. P. Jogi Naidu",
        designation: "Assistant Professor",
        role: "Chief Warden, Boys Hostel",
        phone: "9910927182",
        email: "pjoginaidu1@dsnlu.ac.in",
    },
    {
        name: "Dr. N. Bhagya Lakshmi",
        designation: "Teaching Associate",
        role: "Chief Warden, Girls Hostel",
        phone: "9849528129",
        email: "bhagyasri.n@dsnlu.ac.in",
    },
    {
        name: "Mr. O. Manga Raju",
        designation: "Physical Director",
        role: "Sports Matters",
        phone: "9985861116",
        email: "pd@dsnlu.ac.in",
    },
];

export default function StudentWelfareCellPage() {
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
                        STUDENT WELFARE CELL
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            STUDENTS ARE ADVISED TO CONTACT FOR THEIR GRIEVANCE
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse text-left">
                                <thead>
                                    <tr className="bg-dsnlu-azure text-white">
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Name & Designation
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Role / Matters
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Contact
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    {grievanceContacts.map((contact, index) => (
                                        <tr
                                            key={index}
                                            className="transition-colors hover:bg-slate-50"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-dsnlu-dark-blue">
                                                    {contact.name}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {contact.designation}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700 font-medium">
                                                {contact.role}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col space-y-1">
                                                    <div className="flex items-center space-x-2 text-slate-600">
                                                        <Phone className="h-4 w-4 text-dsnlu-azure" />
                                                        <span>{contact.phone}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 text-slate-600">
                                                        <Mail className="h-4 w-4 text-dsnlu-azure" />
                                                        <a
                                                            href={`mailto:${contact.email}`}
                                                            className="hover:text-dsnlu-azure hover:underline"
                                                        >
                                                            {contact.email}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
