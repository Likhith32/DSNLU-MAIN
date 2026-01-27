import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const committeeMembers = [
    {
        id: 1,
        name: "Hon’ble Sri Justice D.V.S.S.Somayajulu",
        designation:
            "Judge (Retd.), High Court of A.P., Amaravati and Professor Emeritus / Distinguished Professor, DSNLU",
    },
    {
        id: 2,
        name: "Prof. (Dr.) D. Surya Prakasa Rao",
        designation: "Vice-Chancellor, DSNLU",
    },
    {
        id: 3,
        name: "Sri A.Satya Prasad",
        designation: "Sr. Advocate and Former Addl. Advocate General",
    },
    {
        id: 4,
        name: "Sri R.Shankar Rao",
        designation: "University Engineer, Andhra University",
    },
    {
        id: 5,
        name: "Sri John K Sudhakar",
        designation: "Superintendent Engineer, R&B Department, Visakhapatnam",
    },
    {
        id: 6,
        name: "Sri R.Radheshyam",
        designation: "Chief Architect, M/s Shilpakruti Architects",
    },
    {
        id: 7,
        name: "Dr. R. Bharat Kumar",
        designation: "Assistant Professor, DSNLU",
    },
    {
        id: 8,
        name: "Dr. B. Soma",
        designation: "Assistant Professor, DSNLU",
    },
    {
        id: 9,
        name: "Sri G. Vineeth Kumar",
        designation: "Sub-Engineer (Civil), DSNLU",
    },
    {
        id: 10,
        name: "Sri N. Tirupathi Rao",
        designation: "Sub-Engineer (Electrical), DSNLU",
    },
    {
        id: 11,
        name: "Registrar",
        designation: "DSNLU",
    },
];

export default function InfrastructureCommitteePage() {
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
                        Infrastructure Monitoring and Development Committee
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            INFRASTRUCTURE MONITORING AND DEVELOPMENT COMMITTEE
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse text-left">
                                <thead>
                                    <tr className="bg-dsnlu-azure text-white">
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                                            Hon’ble Members
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    {committeeMembers.map((member) => (
                                        <tr
                                            key={member.id}
                                            className="transition-colors hover:bg-slate-50"
                                        >
                                            <td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">
                                                {member.id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-dsnlu-dark-blue">
                                                    {member.name}
                                                </div>
                                                {member.designation && (
                                                    <div className="text-sm text-slate-600">
                                                        {member.designation}
                                                    </div>
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
