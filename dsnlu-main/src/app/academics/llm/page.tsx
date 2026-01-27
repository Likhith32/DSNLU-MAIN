"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function LLMPage() {
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
                        LL.M.
                    </h1>
                    <div className="mt-4 h-1 w-20 bg-dsnlu-lime" />
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto mt-12 px-4">
                <div className="mb-8 space-y-4">
                    <p className="text-lg text-slate-700">
                        The university offers one year LL.M. The academic year is divided into two semesters: the Monsoon Semester (July-November) and the Spring Semester (January May).
                    </p>
                    <p className="text-lg text-slate-700">
                        One Year LL.M. in three specializations with effect from 2023-24 which is as follows:
                    </p>
                </div>

                {/* Specializations Table */}
                <Card className="mb-12 border-none shadow-md">
                    <CardHeader className="bg-dsnlu-azure pb-4 pt-4">
                        <CardTitle className="text-lg font-bold text-white">
                            Specializations
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-100 text-slate-700">
                                    <tr>
                                        <th className="px-6 py-3 font-bold uppercase tracking-wider">#</th>
                                        <th className="px-6 py-3 font-bold uppercase tracking-wider">Specialization</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 bg-white">
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">1.</td>
                                        <td className="px-6 py-4 text-slate-700">Corporate and Commercial Law</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">2.</td>
                                        <td className="px-6 py-4 text-slate-700">Constitutional Law and Administrative Law</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">3.</td>
                                        <td className="px-6 py-4 text-slate-700">Criminal and Security Law</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* Curriculum Table */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-dsnlu-dark-blue">
                        One Year LL.M 2023-24 – CURRICULUM
                    </h2>
                    <Card className="border-none shadow-md">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[1000px] border-collapse text-left text-sm">
                                    <thead>
                                        <tr className="bg-dsnlu-azure text-white">
                                            <th colSpan={2} rowSpan={2} className="border-r border-white/20 px-4 py-3 text-center font-bold uppercase align-middle">
                                                Compulsory Papers
                                            </th>
                                            <th colSpan={4} className="px-4 py-3 text-center font-bold uppercase">
                                                Specialization Papers
                                            </th>
                                        </tr>
                                        <tr className="bg-dsnlu-azure text-white">
                                            <th className="border-r border-white/20 border-t border-t-white/20 px-4 py-3 font-semibold">Papers</th>
                                            <th className="border-r border-white/20 border-t border-t-white/20 px-4 py-3 font-semibold">Corporate and Commercial Law</th>
                                            <th className="border-r border-white/20 border-t border-t-white/20 px-4 py-3 font-semibold">Constitutional Law and Administrative Law</th>
                                            <th className="border-t border-t-white/20 px-4 py-3 font-semibold">Criminal and Security Law</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-I<br /><span className="text-xs text-slate-500">(3 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Research Methods and Legal Writing
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-IV<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Law on Securities and Financial Markets
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Fundamental Rights and Directive Principles of State Policy
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                International Criminal Law
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-II<br /><span className="text-xs text-slate-500">(3 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Comparative Public Law/Systems of Governance
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-V<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Commercial Arbitration
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Global Administrative Law
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                Criminal Justice Administration and Critical Criminal Law
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-III<br /><span className="text-xs text-slate-500">(3 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Law and Justice in a Globalizing World
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-VI<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                International Investment Law
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Centre-State Relations and Constitutional Governance
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                National Security and Regional Co-operation
                                            </td>
                                        </tr>
                                        {/* Row 4 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4" colSpan={2} rowSpan={4}></td>
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-VII<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Cyber Law
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Police and Security Administration
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                Criminal Justice and Human Rights
                                            </td>
                                        </tr>
                                        {/* Row 5 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-VIII<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Bankruptcy Law
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Media and Telecommunications Law
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                Victimology and Sentencing Policy
                                            </td>
                                        </tr>
                                        {/* Row 6 */}
                                        <tr className="hover:bg-slate-50">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Paper-IX<br /><span className="text-xs text-slate-500">(2 Credits)</span>
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Infrastructure Law
                                            </td>
                                            <td className="border-r border-slate-100 px-4 py-4 text-slate-700">
                                                Health Law
                                            </td>
                                            <td className="px-4 py-4 text-slate-700">
                                                Corporate Crimes
                                            </td>
                                        </tr>
                                        {/* Row 7 - Dissertation */}
                                        <tr className="bg-slate-50 hover:bg-slate-100">
                                            <td className="border-r border-slate-100 px-4 py-4 font-medium text-slate-900">
                                                Dissertation<br /><span className="text-xs text-slate-500">(3 Credits)</span>
                                            </td>
                                            <td className="px-4 py-4 text-center font-semibold text-dsnlu-dark-blue" colSpan={3}>
                                                Dissertation for 200 marks<br />
                                                <span className="text-sm font-normal text-slate-600">(150 marks- written submissions and 50 marks -Viva Voce)</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                    <p className="text-slate-600 italic">
                        * Subject will be allotted by the University.
                    </p>
                </div>
            </div>
        </div>
    );
}
