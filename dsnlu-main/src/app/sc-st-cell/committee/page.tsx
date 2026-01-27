"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Phone } from "lucide-react";

const committeeMembers = [
    {
        sNo: 1,
        name: "Dr. A. Nageswara Rao",
        designation: "Assistant professor of Law",
        capacity: "Chair person",
        contact: "+91 8341871919",
    },
    {
        sNo: 2,
        name: "Dr. N. Bhagya Lakshmi",
        designation: "Assistant professor of Law",
        capacity: "Member",
        contact: "+91 9849528129",
    },
    {
        sNo: 3,
        name: "Dr. Rifat khan",
        designation: "Assistant professor of Law",
        capacity: "Member",
        contact: "+91 7889414867",
    },
    {
        sNo: 4,
        name: "Dr. R. Deepthi",
        designation: "Teaching Assistant",
        capacity: "Member",
        contact: "+91 9059644528",
    },
    {
        sNo: 5,
        name: "Ms. SherleyHepsiba Dokiburra",
        designation: "Teaching Assistant",
        capacity: "Member",
        contact: "+91 7675830740",
    },
    {
        sNo: 6,
        name: "Ms. D. Aparna",
        designation: "Research Assistant",
        capacity: "Member",
        contact: "",
    },
    {
        sNo: 7,
        name: "Dr. Viswachandra Nath. M",
        designation: "Registrar I/C",
        capacity: "Secretary",
        contact: "+91 9110773504",
    },
];

export default function SCSTCellCommitteePage() {
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
                        Committee
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            SC/ST Cell Advisory Committee
                        </CardTitle>
                        <p className="text-center text-slate-600 mt-2">
                            An Advisory Committee has been constituted to effectively
                            implement policies and programmes of the reservation policy for
                            the SC/ST in the University.
                        </p>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[800px] border-collapse text-left">
                                <thead>
                                    <tr className="bg-dsnlu-azure text-white">
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider w-16 text-center">
                                            S.No
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Name & Designation
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Capacity
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Contact No
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    {committeeMembers.map((member) => (
                                        <tr
                                            key={member.sNo}
                                            className="transition-colors hover:bg-slate-50"
                                        >
                                            <td className="px-6 py-4 text-center text-slate-500">
                                                {member.sNo}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-dsnlu-dark-blue">
                                                    {member.name}
                                                </div>
                                                <div className="text-sm text-slate-500">
                                                    {member.designation}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-700 font-medium">
                                                {member.capacity}
                                            </td>
                                            <td className="px-6 py-4">
                                                {member.contact ? (
                                                    <div className="flex items-center space-x-2 text-slate-600">
                                                        <Phone className="h-4 w-4 text-dsnlu-azure" />
                                                        <span>{member.contact}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-slate-400">-</span>
                                                )}
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
