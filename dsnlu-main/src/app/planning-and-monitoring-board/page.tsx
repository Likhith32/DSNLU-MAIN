import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const boardMembers = [
    {
        id: 1,
        name: "Prof. (Dr.) D. Surya Prakasa Rao",
        designation: "Vice-Chancellor, DSNLU",
    },
    {
        id: 2,
        name: "Prof. (Dr.) Nandini C.P.",
        designation: "Professor",
    },
    {
        id: 3,
        name: "Dr. Dayananda Murthy C.P.",
        designation: "Associate Professor",
    },
    {
        id: 4,
        name: "Dr. K. Sudha",
        designation: "Dean Examinations, DSNLU",
    },
    {
        id: 5,
        name: "Dr. B. Soma",
        designation: "Dean Academic Affairs, DSNLU",
    },
    {
        id: 6,
        name: "Prof. Kondaiah Jonnalagadda",
        designation:
            "Head Department of Law, Maharashtra National Law University, Aurangabad",
    },
    {
        id: 7,
        name: "Sri Y Ravi Prasad",
        designation: "Sr. Advocate, High Courts of Andhra Pradesh and Telangana",
    },
    {
        id: 8,
        name: "Prof. Sri krishna Deva Rao",
        designation: "Vice-Chancellor, NALSAR University of Law",
    },
    {
        id: 9,
        name: "Sri. Rami Reddy Aluru",
        designation: "Advocate & Member BCI",
    },
];

export default function PlanningMonitoringBoardPage() {
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
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Planning and Monitoring Board
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <Card className="border-none shadow-lg">
                    <CardHeader className="bg-white pb-2 pt-6">
                        <CardTitle className="text-center text-2xl font-bold text-dsnlu-dark-blue md:text-3xl">
                            PLANNING AND MONITORING BOARD
                        </CardTitle>
                        <p className="text-center text-slate-600">
                            Under Section 23 (1) of DSNLU Act, 2008
                        </p>
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
                                            Hon’ble Member
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 bg-white">
                                    {boardMembers.map((member) => (
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
